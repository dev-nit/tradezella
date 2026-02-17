
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addTrade(formData: FormData) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const symbol = formData.get('symbol') as string
    const type = formData.get('type') as string
    const entryPrice = parseFloat(formData.get('entry') as string)

    const exitPrice = formData.get('exit') ? parseFloat(formData.get('exit') as string) : null
    const quantity = parseFloat(formData.get('qty') as string)
    const notes = formData.get('notes') as string


    // Basic PnL calculation (simplified)
    let pnl = 0
    if (exitPrice) {
        if (type === 'LONG') {
            pnl = (exitPrice - entryPrice) * quantity
        } else {
            pnl = (entryPrice - exitPrice) * quantity
        }
    }

    const { error } = await supabase.from('trades').insert({
        user_id: user.id,
        symbol: symbol.toUpperCase(),
        direction: type,
        entry_price: entryPrice,
        exit_price: exitPrice,
        quantity: quantity,

        status: exitPrice ? 'CLOSED' : 'OPEN',
        pnl: pnl,
        notes: notes
    })


    if (error) {
        console.error('Error adding trade:', error)
        // In a real app, you'd execute a callback or return state to show an error
        return { error: error.message }
    }


    revalidatePath('/dashboard/journal')
    return { success: true }
}

export async function updateTrade(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const id = formData.get('id') as string
    const symbol = formData.get('symbol') as string
    const type = formData.get('type') as string
    const entryPrice = parseFloat(formData.get('entry') as string)

    const exitPrice = formData.get('exit') ? parseFloat(formData.get('exit') as string) : null
    const quantity = parseFloat(formData.get('qty') as string)
    const notes = formData.get('notes') as string


    // Basic PnL calculation (simplified)
    let pnl = 0
    if (exitPrice) {
        if (type === 'LONG') {
            pnl = (exitPrice - entryPrice) * quantity
        } else {
            pnl = (entryPrice - exitPrice) * quantity
        }
    }

    const { error } = await supabase.from('trades').update({
        symbol: symbol.toUpperCase(),
        direction: type,
        entry_price: entryPrice,
        exit_price: exitPrice,
        quantity: quantity,
        status: exitPrice ? 'CLOSED' : 'OPEN',
        pnl: pnl,
        notes: notes
    }).eq('id', id).eq('user_id', user.id)


    if (error) {
        console.error('Error updating trade:', error)
        return { error: error.message }
    }

    revalidatePath('/dashboard/journal')
    return { success: true }
}

