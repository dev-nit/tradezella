
'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function ExportTradesButton() {
    const handleExport = () => {
        window.location.href = '/api/trades/export'
    }

    return (
        <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
        </Button>
    )
}
