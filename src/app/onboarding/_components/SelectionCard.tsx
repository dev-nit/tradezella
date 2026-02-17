
'use client'

import { cn } from '@/lib/utils'

interface SelectionCardProps {
    id: string
    name: string
    value: string
    label: string
    icon?: React.ReactNode
    description?: string
    multiSelect?: boolean
    selected?: boolean
    onChange?: () => void
}

export function SelectionCard({ id, name, value, label, icon, description, multiSelect, selected, onChange }: SelectionCardProps) {
    return (
        <div className="relative">
            <input
                type={multiSelect ? "checkbox" : "radio"}
                id={id}
                name={name}
                value={value}
                className="peer sr-only"
                onChange={onChange}
                defaultChecked={selected}
            />
            <label
                htmlFor={id}
                className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50",
                    "peer-checked:border-primary peer-checked:bg-primary/5",
                    description ? "items-start" : "items-center"
                )}
            >
                {icon && <div className={cn("p-2 rounded-lg bg-muted text-muted-foreground peer-checked:text-primary peer-checked:bg-primary/10")}>{icon}</div>}
                <div className="flex-1">
                    <div className="font-semibold">{label}</div>
                    {description && <div className="text-sm text-muted-foreground mt-1">{description}</div>}
                </div>
            </label>
        </div>
    )
}
