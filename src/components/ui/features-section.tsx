import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cpu, Lock, Sparkles, Zap, BarChart3 } from 'lucide-react';
import { ShaderPlane } from '@/components/ui/background-paper-shaders';
import dashboardImage from '@/assets/dashboard-dark.png';

export function FeaturesSection() {
  return (
    <section className="relative py-16 md:py-32 bg-background overflow-hidden">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }}>
          <ShaderPlane position={[0, 0, 0]} color1="#0B0A12" color2="#5B21B6" />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-12 px-6">
        <div className="grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold font-display tracking-tight">
            We help businesses <span className="text-gradient">work smarter</span>, scale faster, and innovate.
          </h2>
          <p className="max-w-sm sm:ml-auto text-muted-foreground text-lg">
            Smart automation solutions designed to help high-performing teams work faster, more efficiently, and more creatively.
          </p>
        </div>

        <div className="relative rounded-3xl p-1 md:-mx-8 lg:col-span-3 bg-gradient-to-b from-white/10 to-transparent">
          <div className="relative rounded-[22px] overflow-hidden bg-card border border-white/5 backdrop-blur-sm">
            <div className="aspect-[2.4/1] relative">
              {/* Decorative gradient overlay */}
              <div className="bg-gradient-to-t z-10 from-background via-transparent to-transparent absolute inset-0"></div>

              {/* Main dashboard/platform visualization */}
              <img
                src={dashboardImage}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                alt="Platform Dashboard Interface"
              />

              {/* Floating UI Elements / Glass overlays for "tech" feel */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 bg-black/20 backdrop-blur-md rounded-xl shadow-2xl z-5 hidden md:block"></div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8">
          <div className="space-y-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Zap className="size-5" />
              </div>
              <h3 className="text-sm font-medium">Goodbye to Manual Work</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We help streamline processes with smart automation, eliminating repetitive tasks.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Cpu className="size-5" />
              </div>
              <h3 className="text-sm font-medium">AI That Fits Right In</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Custom AI integrations that grow seamlessly with your workflows and existing tools.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="size-5" />
              </div>
              <h3 className="text-sm font-medium">Live Insights</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Powerful data dashboards built for real-time decision-making and performance tracking.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Sparkles className="size-5" />
              </div>
              <h3 className="text-sm font-medium">AI Tools</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Custom AI insights that grow seamlessly into every facet of your business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
