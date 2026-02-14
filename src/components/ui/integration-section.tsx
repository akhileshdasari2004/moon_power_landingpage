import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, LucideIcon, Rocket, Layers, Globe, Zap, Puzzle, Layout } from 'lucide-react'
import { ReactNode } from 'react'
import GradientBarsBackground from '@/components/ui/gradient-bars-background'

export function IntegrationSection() {
  return (
    <GradientBarsBackground
      numBars={9}
      gradientFrom="rgba(124, 58, 237, 0.2)" // Much darker/subtler purple
      gradientTo="transparent"
      backgroundColor="#0B0A12"
      className="py-16 md:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl w-full">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm text-primary mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10">Integration</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Behind <span className="text-gradient">Every Great Result</span> Is a Process That Just Works
          </h2>
        </div>

        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Rocket}
                title="10x Faster"
                description="Plug & Play Compatibility"
              />
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-muted-foreground mb-6">
                Connect with platforms like CRM, ERP, marketing tools, and more instantly.
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/5 bg-card/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 opacity-80">
                    <div className="p-3 bg-card/80 border border-white/10 rounded-lg backdrop-blur-md">
                      <Zap className="size-6 text-primary" />
                    </div>
                    <div className="p-3 bg-card/80 border border-white/10 rounded-lg backdrop-blur-md">
                      <Puzzle className="size-6 text-white" />
                    </div>
                    <div className="p-3 bg-card/80 border border-white/10 rounded-lg backdrop-blur-md">
                      <Globe className="size-6 text-primary" />
                    </div>
                    <div className="p-3 bg-card/80 border border-white/10 rounded-lg backdrop-blur-md">
                      <Layout className="size-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Layers}
                title="Scalable Architecture"
                description="Grows With You"
              />
            </CardHeader>

            <CardContent className="pb-8">
              <p className="text-muted-foreground mb-6">
                From small teams to enterprises, our systems grow with your business needs.
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/5 bg-card/50">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-purple-500/10" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-2 p-4 w-full justify-center">
                  <div className="w-8 h-12 bg-primary/30 rounded-t-md border-t border-x border-primary/50"></div>
                  <div className="w-8 h-20 bg-primary/50 rounded-t-md border-t border-x border-primary/50"></div>
                  <div className="w-8 h-32 bg-primary/70 rounded-t-lg border-t border-x border-primary/50"></div>
                  <div className="w-8 h-24 bg-primary/50 rounded-t-md border-t border-x border-primary/50"></div>
                  <div className="w-8 h-16 bg-primary/30 rounded-t-md border-t border-x border-primary/50"></div>
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="max-w-md">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Globe className="size-4" />
                  <span>Cross-Platform</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cross-Platform Integration</h3>
                <p className="text-muted-foreground text-lg">
                  Works seamlessly across cloud, hybrid, and on-premise environments to match your infrastructure.
                </p>
              </div>

              <div className="flex justify-center gap-6 overflow-hidden py-4">
                <CircularUI
                  label="Cloud"
                  circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                />

                <CircularUI
                  label="Hybrid"
                  circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                />

                <CircularUI
                  label="On-Prem"
                  circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                />
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </GradientBarsBackground>
  )
}

interface FeatureCardProps {
  children: ReactNode
  className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn('group relative rounded-2xl border-white/5 bg-card hover:bg-card/80 transition-all hover:shadow-2xl hover:shadow-primary/5', className)}>
    <CardDecorator />
    {children}
  </Card>
)

const CardDecorator = () => (
  <>
    <span className="border-primary/20 absolute -left-px -top-px block size-2 border-l-2 border-t-2 opacity-0 transition-all group-hover:opacity-100 group-hover:border-primary"></span>
    <span className="border-primary/20 absolute -right-px -top-px block size-2 border-r-2 border-t-2 opacity-0 transition-all group-hover:opacity-100 group-hover:border-primary"></span>
    <span className="border-primary/20 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 opacity-0 transition-all group-hover:opacity-100 group-hover:border-primary"></span>
    <span className="border-primary/20 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 opacity-0 transition-all group-hover:opacity-100 group-hover:border-primary"></span>
  </>
)

interface CardHeadingProps {
  icon: LucideIcon
  title: string
  description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="mt-4">
    <span className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
      <Icon className="size-4 text-primary" />
      {title}
    </span>
    <p className="mt-4 text-2xl font-semibold tracking-tight">{description}</p>
  </div>
)

interface CircleConfig {
  pattern: 'none' | 'border' | 'primary'
}

interface CircularUIProps {
  label: string
  circles: CircleConfig[]
  className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-white/10 size-fit rounded-2xl to-transparent p-px">
      <div className="bg-card backdrop-blur-md relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4 border border-white/5">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn('size-7 rounded-full border sm:size-8 transition-transform group-hover:scale-110', {
              'border-primary bg-primary/20': circle.pattern === 'none',
              'border-white/20 bg-transparent': circle.pattern === 'border',
              'border-primary bg-primary': circle.pattern === 'primary',
            })}></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-2 block text-center text-xs font-medium uppercase tracking-wider opacity-70">{label}</span>
  </div>
)
