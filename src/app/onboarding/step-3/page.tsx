
import { saveStep3 } from '../actions'
import { Button } from '@/components/ui/button'
import { SelectionCard } from '../_components/SelectionCard'

import { Twitter, Instagram, Youtube, User, Users, Globe, MessageCircle, MoreHorizontal } from 'lucide-react'


export default function Step3Page() {
    return (
        <div className="w-full max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">How did you hear about us?</h1>
            </div>

            <form action={saveStep3} className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                    <SelectionCard id="twitter" name="source" value="Twitter" label="Twitter (X)" icon={<Twitter className="w-5 h-5" />} />
                    <SelectionCard id="instagram" name="source" value="Instagram" label="Instagram" icon={<Instagram className="w-5 h-5" />} />
                    <SelectionCard id="youtube" name="source" value="YouTube" label="YouTube" icon={<Youtube className="w-5 h-5" />} />
                    <SelectionCard id="tiktok" name="source" value="TikTok" label="TikTok" icon={<MessageCircle className="w-5 h-5" />} />
                    <SelectionCard id="discord" name="source" value="Discord" label="Discord" icon={<MessageCircle className="w-5 h-5" />} />
                    <SelectionCard id="reddit" name="source" value="Reddit" label="Reddit" icon={<Globe className="w-5 h-5" />} />
                    <SelectionCard id="google" name="source" value="Google" label="Google" icon={<Globe className="w-5 h-5" />} />
                    <SelectionCard id="community" name="source" value="Community" label="Community / Mentorship" icon={<Users className="w-5 h-5" />} />
                    <SelectionCard id="friend" name="source" value="Friend" label="From a friend" icon={<User className="w-5 h-5" />} />
                    <SelectionCard id="other" name="source" value="Other" label="Other" icon={<MoreHorizontal className="w-5 h-5" />} />
                </div>

                <Button size="lg" className="w-full md:w-auto min-w-[200px]">Continue</Button>
            </form>
        </div>
    )
}
