
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { Filter } from 'lucide-react'
import { AddTradeButton } from './_components/AddTradeButton'
import { TradeTableRow } from './_components/TradeTableRow'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function JournalPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { data: trades, error } = await supabase
        .from('trades')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Trade Journal</h2>
                    <p className="text-muted-foreground">Review your past trades and analyze your performance.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <AddTradeButton />
                </div>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Symbol</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Entry Price</TableHead>
                            <TableHead>Exit Price</TableHead>
                            <TableHead className="text-right">P&L</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {trades?.map((trade) => (
                            <TradeTableRow key={trade.id} trade={trade} />
                        ))}
                        {(!trades || trades.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={8} className="text-center h-24">
                                    No trades found. Add your first trade!
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
