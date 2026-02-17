
'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState, useEffect } from "react"
import { updateTrade } from '../actions'
import { RichTextEditor } from "@/components/ui/rich-text-editor";

interface Trade {
    id: string
    symbol: string
    direction: string
    entry_price: number
    exit_price: number | null
    quantity: number
    notes: string | null
    created_at: string
}

export function EditTradeModal({ open, onOpenChange, trade }: { open: boolean, onOpenChange: (open: boolean) => void, trade: Trade }) {
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState(trade.notes || '')

    // Sync notes when trade changes (e.g. valid when modal opens with new trade)
    useEffect(() => {
        if (open) {
            setNotes(trade.notes || '')
        }
    }, [open, trade])


    const handleSubmit = async (formData: FormData) => {
        setLoading(true)
        await updateTrade(formData)
        setLoading(false)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Edit Trade</DialogTitle>
                    <DialogDescription>
                        Update details for {trade.symbol}.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit}>
                    <input type="hidden" name="id" value={trade.id} />
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="symbol" className="text-right">Symbol</Label>
                            <Input id="symbol" name="symbol" className="col-span-3" defaultValue={trade.symbol} placeholder="e.g. TSLA" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">Type</Label>
                            <div className="col-span-3">
                                <Select name="type" defaultValue={trade.direction || "LONG"}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="LONG">Long</SelectItem>
                                        <SelectItem value="SHORT">Short</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="entry" className="text-right">Entry Price</Label>
                            <Input id="entry" name="entry" type="number" step="any" className="col-span-3" defaultValue={trade.entry_price} placeholder="0.00" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="exit" className="text-right">Exit Price</Label>
                            <Input id="exit" name="exit" type="number" step="any" className="col-span-3" defaultValue={trade.exit_price || ''} placeholder="0.00" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="qty" className="text-right">Quantity</Label>
                            <Input id="qty" name="qty" type="number" step="any" className="col-span-3" defaultValue={trade.quantity} placeholder="1" required />
                        </div>


                        {/* Rich Text Notes */}
                        <div className="grid grid-cols-4 gap-4">
                            <Label className="text-right pt-2">Notes</Label>
                            <div className="col-span-3">
                                <RichTextEditor
                                    value={notes}
                                    onChange={setNotes}
                                    placeholder="Add trade analysis, setups, or emotions..."
                                />
                                <input type="hidden" name="notes" value={notes} />
                            </div>
                        </div>

                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Updating...' : 'Update Trade'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
