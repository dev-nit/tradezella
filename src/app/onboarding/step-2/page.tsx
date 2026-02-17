
import { saveStep2 } from '../actions'
import { Button } from '@/components/ui/button'
import { SelectionCard } from '../_components/SelectionCard'
import { FileText, BarChart2, History, GraduationCap } from 'lucide-react'

export default function Step2Page() {
    return (
        <div className="w-full max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">What are you looking to do with NS Trade?</h1>
                <p className="text-muted-foreground">Select all that apply</p>
            </div>

            <form action={saveStep2} className="space-y-8">
                <div className="flex flex-col gap-4 text-left">
                    <SelectionCard
                        id="journal"
                        name="goal"
                        value="Journal activities"
                        label="Journal activities"
                        description="Track and document every trade"
                        multiSelect
                        icon={<FileText className="w-6 h-6" />}
                    />
                    <SelectionCard
                        id="analyze"
                        name="goal"
                        value="Analyze performance"
                        label="Analyze performance"
                        description="Dive deep into stats and metrics"
                        multiSelect
                        icon={<BarChart2 className="w-6 h-6" />}
                    />
                    <SelectionCard
                        id="backtest"
                        name="goal"
                        value="Backtest strategies"
                        label="Backtest strategies"
                        description="Test ideas with historical data"
                        multiSelect
                        icon={<History className="w-6 h-6" />}
                    />
                    <SelectionCard
                        id="learn"
                        name="goal"
                        value="Learn with Zella University"
                        label="Learn with Zella University"
                        description="Access courses, bootcamps & resources"
                        multiSelect
                        icon={<GraduationCap className="w-6 h-6" />}
                    />
                </div>

                <Button size="lg" className="w-full md:w-auto min-w-[200px]">Continue</Button>
            </form>
        </div>
    )
}
