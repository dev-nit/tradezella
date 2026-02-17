
import { completeOnboarding } from '../actions'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function WelcomePage() {
    return (
        <div className="w-full max-w-2xl space-y-8 text-center">
            <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <Play className="w-12 h-12 text-primary fill-primary" />
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Welcome to NS Trade</h1>
                <p className="text-xl text-muted-foreground">The only tool you need to become a profitable trader.</p>
            </div>

            <form action={completeOnboarding}>
                <Button size="lg" className="w-full md:w-auto min-w-[200px] h-12 text-lg">Continue</Button>
            </form>
        </div>
    )
}
