
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LayoutDashboard } from 'lucide-react'


import { ModeToggle } from '@/components/mode-toggle'

export function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <LayoutDashboard className="h-6 w-6 text-primary" />
                    <span>TradeZella Clone</span>
                </Link>
                <div className="flex gap-4 items-center">
                    <ModeToggle />
                    <Link href="/login">
                        <Button variant="ghost">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

