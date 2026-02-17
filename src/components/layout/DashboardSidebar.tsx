
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
    LayoutDashboard,
    BookOpen,
    LineChart,
    Settings,
    LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const sidebarItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard
    },
    {
        title: 'Journal',
        href: '/dashboard/journal',
        icon: BookOpen
    },
    {
        title: 'Reports',
        href: '/dashboard/reports',
        icon: LineChart
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: Settings
    }
]


interface DashboardSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    onNavigate?: () => void
}

export function DashboardSidebar({ className, onNavigate, ...props }: DashboardSidebarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("flex flex-col h-full bg-card", className)} {...props}>
            <div className="p-6 border-b">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl" onClick={onNavigate}>
                    <LayoutDashboard className="h-6 w-6 text-primary" />
                    <span>TradeZella</span>
                </Link>
            </div>

            <div className="flex-1 overflow-auto py-6 px-4">
                <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={onNavigate}>
                            <Button
                                variant={pathname === item.href ? 'secondary' : 'ghost'}
                                className={cn(
                                    "w-full justify-start gap-3",
                                    pathname === item.href && "bg-muted font-medium"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t">
                <form action="/auth/signout" method="post">
                    <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </Button>
                </form>
            </div>
        </div>
    )
}

