
import { Navbar } from '@/components/layout/Navbar'

export default function OnboardingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="container max-w-4xl mx-auto py-8 px-4 flex-1 flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    )
}
