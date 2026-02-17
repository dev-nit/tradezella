
'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function saveStep1(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    const tradingTypes = formData.getAll('trading_type') as string[]

    await supabase.from('profiles').update({
        trading_types: tradingTypes
    }).eq('id', user.id)

    redirect('/onboarding/step-2')
}

export async function saveStep2(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    const goals = formData.getAll('goal') as string[]

    await supabase.from('profiles').update({
        goals: goals
    }).eq('id', user.id)

    redirect('/onboarding/step-3')
}

export async function saveStep3(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    const source = formData.get('source') as string

    await supabase.from('profiles').update({
        referral_source: source
    }).eq('id', user.id)

    redirect('/onboarding/welcome')
}

export async function completeOnboarding() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    await supabase.from('profiles').update({
        onboarding_completed: true
    }).eq('id', user.id)

    redirect('/dashboard')
}
