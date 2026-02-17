
export type Trade = {
    id: string
    created_at: string
    user_id: string
    symbol: string
    direction: 'LONG' | 'SHORT'
    entry_price: number
    exit_price: number
    quantity: number
    pnl: number
    status: 'OPEN' | 'CLOSED'
    entry_date: string
    exit_date?: string
    notes?: string
}
