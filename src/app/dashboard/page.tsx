
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Percent, Activity, TrendingUp } from 'lucide-react'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { data: trades } = await supabase
        .from('trades')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

    // Calculations
    const totalTrades = trades?.length || 0
    const closedTrades = trades?.filter(t => t.status === 'CLOSED') || []
    const totalPnl = trades?.reduce((acc, t) => acc + (t.pnl || 0), 0) || 0

    const winningTrades = closedTrades.filter(t => (t.pnl || 0) > 0)
    const losingTrades = closedTrades.filter(t => (t.pnl || 0) < 0)

    const winRate = closedTrades.length > 0
        ? (winningTrades.length / closedTrades.length) * 100
        : 0

    const grossProfit = winningTrades.reduce((acc, t) => acc + (t.pnl || 0), 0)
    const grossLoss = Math.abs(losingTrades.reduce((acc, t) => acc + (t.pnl || 0), 0))
    const profitFactor = grossLoss > 0 ? grossProfit / grossLoss : (grossProfit > 0 ? 100 : 0)

    const recentTrades = trades?.slice(0, 5) || []

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">Start tracking your performance and become a better trader.</p>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total P&L"
                    value={`$${totalPnl.toFixed(2)}`}
                    icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                    description={totalPnl >= 0 ? " profitable" : " in loss"}
                />
                <StatCard
                    title="Win Rate"
                    value={`${winRate.toFixed(1)}%`}
                    icon={<Percent className="h-4 w-4 text-muted-foreground" />}
                    description={`Over ${closedTrades.length} closed trades`}
                />
                <StatCard
                    title="Total Trades"
                    value={totalTrades.toString()}
                    icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                    description="All time trades"
                />
                <StatCard
                    title="Profit Factor"
                    value={profitFactor.toFixed(2)}
                    icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
                    description={profitFactor > 1.5 ? "Healthy Strategy" : "Needs Improvement"}
                />
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
                <Card className="col-span-1 lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground bg-muted/20 rounded-md">
                            {/* Simplified placeholder visual for now */}
                            <div className="flex items-end gap-2 h-32">
                                {recentTrades.slice(0, 10).reverse().map((t, i) => (
                                    <div
                                        key={t.id}
                                        className={`w-4 rounded-t ${t.pnl >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                                        style={{ height: `${Math.min(Math.abs(t.pnl || 0) / 10, 100)}%` }}
                                    />
                                ))}
                                {recentTrades.length === 0 && <span>No data for chart</span>}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-1 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Trades</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentTrades.map((trade) => (
                                <div key={trade.id} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-10 rounded-full ${trade.direction === 'LONG' ? 'bg-blue-500' : 'bg-orange-500'}`} />
                                        <div>
                                            <p className="font-medium">{trade.symbol} <span className="text-xs text-muted-foreground">({trade.direction})</span></p>
                                            <p className="text-sm text-muted-foreground">{new Date(trade.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className={`font-bold ${(trade.pnl || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {(trade.pnl || 0) >= 0 ? '+' : ''}${trade.pnl?.toFixed(2)}
                                    </div>
                                </div>
                            ))}
                            {recentTrades.length === 0 && (
                                <p className="text-sm text-muted-foreground text-center py-4">No trades yet.</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

function StatCard({ title, value, icon, description }: { title: string, value: string, icon: React.ReactNode, description: string }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

