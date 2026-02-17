
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  BarChart3,
  LineChart,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  RotateCcw,
  UploadCloud,
  Layers,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Metric Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10" />

        {/* Hero Section */}
        <section className="w-full pt-12 pb-20 md:pt-24 md:pb-32">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start space-y-6 text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  Understand your trading <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    beyond profit and loss...
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-[600px] leading-relaxed">
                  NS Trade reveals the metrics and behavioral patterns that actually drive your results. Stop guessing, start improving.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/signup">
                    <Button size="lg" className="h-14 px-10 rounded-full text-lg bg-pink-600 hover:bg-pink-700 shadow-xl shadow-pink-200">
                      Get Started Now
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 space-y-3">
                  {['Analyze performance. Know exactly what drives your edge.',
                    'Backtest strategies. Validate before you size up.',
                    'Journal with structure. Turn discipline into consistency.',
                    'Replay every trade. Catch mistakes before they compound.'].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-blue-100 text-blue-600">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Dashboard Mockup - Right Side */}
              <div className="relative transform lg:translate-x-12">
                <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden aspect-[16/10] relative rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Abstract UI Representation */}
                  <div className="absolute inset-0 bg-slate-50 flex flex-col p-4 gap-4">
                    <div className="h-12 border-b flex items-center justify-between px-4 bg-white rounded-lg shadow-sm">
                      <div className="w-1/3 h-4 bg-slate-100 rounded" />
                      <div className="w-8 h-8 rounded-full bg-purple-100" />
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <div className="col-span-2 bg-white rounded-lg shadow-sm p-4 space-y-2">
                        <div className="h-40 bg-blue-50/50 rounded flex items-end pb-2 px-2 gap-1 justify-between">
                          {[40, 60, 30, 80, 50, 70, 45, 90].map((h, i) => (
                            <div key={i} className="bg-blue-400 w-full rounded-t" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
                        <div className="h-8 bg-green-100 rounded w-full" />
                        <div className="h-8 bg-red-50 rounded w-3/4" />
                        <div className="h-8 bg-purple-50 rounded w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="w-full pb-20">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard label="Trades Journaled" value="20.2B+" />
              <StatCard label="Backtested Sessions" value="205K+" />
              <StatCard label="Trades Shared" value="1M+" />
              <StatCard label="Traders on board" value="50K+" />
            </div>
          </div>
        </section>

        {/* Feature 1: Automated Journaling */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-bold text-slate-50 select-none -z-10">
            1
          </div>
          <div className="mx-auto container px-4 md:px-6 text-center">
            <div className="mb-16 space-y-4">
              <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Automated Journaling</h3>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">
                Powerful and Automated <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Trade Journaling</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                You focus on trading while we focus on helping you get better. With automated journaling, we do the heavy lifting for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
              <GradientCard
                title="Automated Journaling"
                description="Easy methods like broker sync, file upload, or even manual trade adds. Everything is automated."
                icon={<Zap className="w-8 h-8 text-white" />}
                gradient="bg-gradient-to-b from-[#240b36] to-[#c31432]"
              />
              <GradientCard
                title="Unlimited Accounts"
                description="Stay on top of your progress with unlimited trading accounts, seamlessly connected in one place."
                icon={<Layers className="w-8 h-8 text-white" />}
                gradient="bg-gradient-to-b from-[#515ada] to-[#efd5ff]"
                textColor="text-slate-900"
                descColor="text-slate-700"
                iconColor="text-blue-600"
              />
              <GradientCard
                title="Automated Statistics"
                description="No more manual calculations. We'll automatically present your trading stats in an easy way."
                icon={<BarChart3 className="w-8 h-8 text-white" />}
                gradient="bg-gradient-to-b from-[#0f0c29] to-[#302b63]"
              />
            </div>
          </div>
        </section>

        {/* Feature 2: Analysis */}
        <section className="w-full py-24 relative overflow-hidden bg-slate-50/50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-bold text-white select-none -z-10">
            2
          </div>
          <div className="mx-auto container px-4 md:px-6 text-center">
            <div className="mb-12 space-y-4">
              <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Trade Analysis</h3>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">
                Analyze your trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">stats</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Take a moment to understand what mistakes you made, if you risked more than planned, and more trade-specific stats.
              </p>
            </div>

            {/* Big Analytics Image */}
            <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-2 md:p-8">
              <div className="bg-white rounded-xl shadow-lg aspect-[16/9] flex items-center justify-center border">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-medium">Analytics Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Replay / Backtesting */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-bold text-slate-50 select-none -z-10">
            3
          </div>
          <div className="mx-auto container px-4 md:px-6 text-center">
            <div className="mb-12 space-y-4">
              <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Replay & Improve</h3>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">
                Replay. Backtest. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Master.</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Don't just look at static charts. Replay the market candle-by-candle to relive the session.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 text-white rounded-2xl p-8 text-left space-y-4 shadow-xl">
                <RotateCcw className="w-10 h-10 text-cyan-400" />
                <h3 className="text-2xl font-bold">Session Replay</h3>
                <p className="text-slate-400">Rewind any day in the market and trade it again. Perfect your execution without risking capital.</p>
              </div>
              <div className="bg-white border rounded-2xl p-8 text-left space-y-4 shadow-xl">
                <UploadCloud className="w-10 h-10 text-purple-600" />
                <h3 className="text-2xl font-bold text-slate-900">Upload History</h3>
                <p className="text-slate-600">Import your past trades from over 50+ brokers and let us build your performance profile instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 bg-slate-900 text-white">
          <div className="mx-auto container px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Ready to become a profitable trader?
            </h2>
            <Link href="/signup">
              <Button size="lg" className="h-16 px-12 rounded-full text-xl bg-pink-600 hover:bg-pink-700 text-white shadow-2xl shadow-pink-900/20">
                Start Your 14-Day Free Trial
              </Button>
            </Link>
            <p className="mt-6 text-slate-400">No credit card required for trial.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center hover:-translate-y-1 transition-transform">
      <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{value}</div>
      <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{label}</div>
    </div>
  )
}

function GradientCard({ title, description, gradient, icon, textColor = 'text-white', descColor = 'text-slate-200', iconColor }: { title: string, description: string, gradient: string, icon: React.ReactNode, textColor?: string, descColor?: string, iconColor?: string }) {
  return (
    <div className={cn("rounded-3xl p-8 relative overflow-hidden shadow-2xl", gradient)}>
      {/* Abstract Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20", iconColor || "text-white")}>
          {icon}
        </div>
        <div className="space-y-4">
          <h3 className={cn("text-2xl font-bold", textColor)}>{title}</h3>
          <p className={cn("leading-relaxed", descColor)}>{description}</p>
        </div>
      </div>
    </div>
  )
}
