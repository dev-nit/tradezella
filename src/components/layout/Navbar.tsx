
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LayoutDashboard } from 'lucide-react'



export function Navbar() {
    return (
        <nav className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
                    <LayoutDashboard className="h-6 w-6 text-blue-600" />
                    <span>NS Trade</span>
                </Link>
                <div className="flex gap-4 items-center">
                    <Link href="/login">
                        <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="bg-slate-900 text-white hover:bg-slate-800">Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

