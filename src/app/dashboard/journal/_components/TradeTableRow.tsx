
'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { EditTradeModal } from './EditTradeModal'

interface Trade {
    id: string
    symbol: string
    direction: string
    entry_price: number
    exit_price: number | null
    quantity: number
    pnl: number | null
    status: string
    created_at: string
    notes: string | null
}

export function TradeTableRow({ trade }: { trade: Trade }) {
    const [isEditOpen, setIsEditOpen] = useState(false)

    return (
        <>
            <TableRow key={trade.id}>
                <TableCell>{new Date(trade.created_at).toLocaleDateString()}</TableCell>
                <TableCell className="font-medium">{trade.symbol}</TableCell>
                <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${trade.direction === 'LONG' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {trade.direction}
                    </span>
                </TableCell>
                <TableCell>{trade.quantity}</TableCell>
                <TableCell>${trade.entry_price}</TableCell>
                <TableCell>{trade.exit_price ? `$${trade.exit_price}` : '-'}</TableCell>
                <TableCell className={`text-right font-bold ${trade.pnl !== null && trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {trade.pnl !== null ? (trade.pnl >= 0 ? '+' : '') + `$${trade.pnl.toFixed(2)}` : '-'}
                </TableCell>
                <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => setIsEditOpen(true)}>
                        <Pencil className="h-4 w-4" />
                    </Button>
                </TableCell>
            </TableRow>

            <EditTradeModal open={isEditOpen} onOpenChange={setIsEditOpen} trade={trade} />
        </>
    )
}
