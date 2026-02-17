
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

export default function SettingsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>

            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Update your personal information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Display Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" disabled />
                            <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Trading Preferences</CardTitle>
                        <CardDescription>Configure how your data is displayed.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Theme Preference</Label>
                                <p className="text-xs text-muted-foreground">Select your preferred theme (Light, Dark, or System).</p>
                            </div>
                            <ModeToggle />
                        </div>
                        <Separator className="my-2" />
                        <Button variant="outline">Reset to Defaults</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

