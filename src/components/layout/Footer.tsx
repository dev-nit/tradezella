
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t bg-muted/40 py-12 md:py-16 mt-auto">
            <div className="container mx-auto flex flex-col gap-6 px-4 md:px-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">TradeZella Clone</h3>
                    <p className="text-sm text-muted-foreground w-full md:w-[300px]">
                        The #1 Trading Journal to help you understand your trading beyond profit and loss.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} TradeZella Clone. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">Terms</Link>
                        <Link href="#" className="hover:underline">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
