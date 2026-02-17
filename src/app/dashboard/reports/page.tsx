
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default async function ReportsPage() {
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

    const totalPnl = trades?.reduce((acc, t) => acc + (t.pnl || 0), 0) || 0

    // Calculate Avg Winner/Loser
    const winningTrades = trades?.filter(t => (t.pnl || 0) > 0) || []
    const losingTrades = trades?.filter(t => (t.pnl || 0) < 0) || []

    const avgWinner = winningTrades.length > 0
        ? winningTrades.reduce((acc, t) => acc + (t.pnl || 0), 0) / winningTrades.length
        : 0

    const avgLoser = losingTrades.length > 0
        ? losingTrades.reduce((acc, t) => acc + (t.pnl || 0), 0) / losingTrades.length
        : 0

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
                <p className="text-muted-foreground">
                    Analyze your trading performance with detailed reports.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ReportCard
                    title="Net P&L"
                    description="Total Realized P&L"
                    value={`$${totalPnl.toFixed(2)}`}
                    icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
                />
                <ReportCard
                    title="Avg Winner"
                    description="Average Profit per Winning Trade"
                    value={`$${avgWinner.toFixed(2)}`}
                    icon={<ArrowUpRight className="h-4 w-4 text-green-500" />}
                />
                <ReportCard
                    title="Avg Loser"
                    description="Average Loss per Losing Trade"
                    value={`$${avgLoser.toFixed(2)}`}
                    icon={<ArrowDownRight className="h-4 w-4 text-red-500" />}
                />
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 text-center">
                <p className="text-muted-foreground mb-4">More charts coming soon!</p>
                <div className="bg-muted/30 w-full h-64 rounded-md flex items-center justify-center border border-dashed relative overflow-hidden">
                    {/* Simple Equity Curve visualizer (CSS-only for now) */}
                    <div className="absolute inset-0 flex items-end px-4 pb-4 gap-1 opacity-50">
                        {trades?.slice(0, 30).reverse().map((t, i) => (
                            <div
                                key={i}
                                className={`flex-1 rounded-t-sm ${t.pnl && t.pnl > 0 ? 'bg-green-400' : 'bg-red-400'}`}
                                style={{ height: `${Math.min(Math.abs(t.pnl || 0) / 5, 80) + 10}%` }}
                            />
                        ))}
                    </div>
                    <span className="z-10 font-medium">Equity Curve Preview</span>
                </div>
            </div>
        </div>
    );
}

function ReportCard({ title, description, icon, value }: { title: string, description: string, icon: React.ReactNode, value?: string }) {
    return (
        <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                {value && <div className="text-2xl font-bold">{value}</div>}
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
