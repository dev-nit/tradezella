
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
import { useState } from "react"


import { addTrade } from '../actions'


import { RichTextEditor } from "@/components/ui/rich-text-editor";

// ... existing code ...

export function AddTradeModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState('')

    const handleSubmit = async (formData: FormData) => {
        setLoading(true)
        // Manually append notes if needed, but since we have a hidden input, it should be in formData automatically.
        // However, if the editor state isn't synced to input value in time for form submission, we might need to append it.
        // The hidden input approach handles this well if we use value={notes}.

        await addTrade(formData)
        setLoading(false)
        setNotes('') // Reset notes
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Add Trade</DialogTitle>
                    <DialogDescription>
                        Manually log a trade entry here.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        {/* ... Existing Fields ... */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="symbol" className="text-right">Symbol</Label>
                            <Input id="symbol" name="symbol" className="col-span-3" placeholder="e.g. TSLA" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">Type</Label>
                            <div className="col-span-3">
                                <Select name="type" defaultValue="LONG">
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
                            <Input id="entry" name="entry" type="number" step="any" className="col-span-3" placeholder="0.00" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="exit" className="text-right">Exit Price</Label>
                            <Input id="exit" name="exit" type="number" step="any" className="col-span-3" placeholder="0.00" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="qty" className="text-right">Quantity</Label>
                            <Input id="qty" name="qty" type="number" step="any" className="col-span-3" placeholder="1" required />
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
                            {loading ? 'Saving...' : 'Save Trade'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

