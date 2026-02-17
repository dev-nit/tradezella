
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { AddTradeModal } from './AddTradeModal'

export function AddTradeButton() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsAddModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Trade
            </Button>
            <AddTradeModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />
        </>
    )
}
