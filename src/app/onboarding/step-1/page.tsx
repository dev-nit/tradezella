
import { saveStep1 } from '../actions'
import { Button } from '@/components/ui/button'
import { SelectionCard } from '../_components/SelectionCard'
import { TrendingUp, Activity, DollarSign, Bitcoin, Zap, MoreHorizontal } from 'lucide-react'

export default function Step1Page() {
    return (
        <div className="w-full max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">What are you currently trading?</h1>
                <p className="text-muted-foreground">Select all that apply</p>
            </div>

            <form action={saveStep1} className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                    <SelectionCard id="stocks" name="trading_type" value="Stocks" label="Stocks" multiSelect icon={<TrendingUp className="w-5 h-5" />} />
                    <SelectionCard id="options" name="trading_type" value="Options" label="Options" multiSelect icon={<Activity className="w-5 h-5" />} />
                    <SelectionCard id="forex" name="trading_type" value="Forex" label="Forex" multiSelect icon={<DollarSign className="w-5 h-5" />} />
                    <SelectionCard id="crypto" name="trading_type" value="Crypto" label="Crypto" multiSelect icon={<Bitcoin className="w-5 h-5" />} />
                    <SelectionCard id="futures" name="trading_type" value="Futures" label="Futures" multiSelect icon={<Zap className="w-5 h-5" />} />
                    <SelectionCard id="cfd" name="trading_type" value="CFD" label="CFD" multiSelect icon={<TrendingUp className="w-5 h-5" />} />
                    <SelectionCard id="other" name="trading_type" value="Other" label="Other" multiSelect icon={<MoreHorizontal className="w-5 h-5" />} />
                </div>

                <Button size="lg" className="w-full md:w-auto min-w-[200px]">Continue</Button>
            </form>
        </div>
    )
}
