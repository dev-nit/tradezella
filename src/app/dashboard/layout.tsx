
'use client'

import { useState } from 'react'
import { DashboardSidebar } from '@/components/layout/DashboardSidebar'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg-muted/20">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col border-r bg-card fixed inset-y-0 z-50">
                <DashboardSidebar className="border-r-0" />
            </aside>

            {/* Main Content Content */}
            <main className="flex-1 flex flex-col md:pl-64 h-full w-full">
                {/* Mobile Header */}
                <header className="flex h-16 items-center border-b bg-background px-6 md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-4 md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64">
                            <DashboardSidebar onNavigate={() => setOpen(false)} />
                        </SheetContent>
                    </Sheet>
                    <div className="font-bold text-lg">NS Trade</div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
