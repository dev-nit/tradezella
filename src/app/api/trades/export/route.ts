
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return new NextResponse('Unauthorized', { status: 401 })
    }

    const { data: trades } = await supabase
        .from('trades')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

    if (!trades || trades.length === 0) {
        return new NextResponse('No trades found', { status: 404 })
    }

    const csvHeaders = [
        'Date',
        'Symbol',
        'Type',
        'Quantity',
        'Entry Price',
        'Exit Price',
        'P&L',
        'Status',
        'Notes'
    ].join(',')

    const csvRows = trades.map(trade => {
        const date = new Date(trade.open_date).toLocaleDateString()
        const symbol = trade.symbol
        const type = trade.type
        const quantity = trade.quantity
        const entryPrice = trade.entry_price
        const exitPrice = trade.exit_price || ''
        const pnl = trade.pnl || ''
        const status = trade.status
        // Escape quotes in notes and wrap in quotes
        const notes = trade.notes ? `"${trade.notes.replace(/"/g, '""')}"` : ''

        return [
            date,
            symbol,
            type,
            quantity,
            entryPrice,
            exitPrice,
            pnl,
            status,
            notes
        ].join(',')
    })

    const csvContent = [csvHeaders, ...csvRows].join('\n')

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `trades_${timestamp}.csv`

    return new NextResponse(csvContent, {
        headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="${filename}"`,
        },
    })
}
