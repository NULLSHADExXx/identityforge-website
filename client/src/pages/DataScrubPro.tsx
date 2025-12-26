import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Zap, Lock, Terminal, Download, Send, Bitcoin, Copy, Heart, FileText, Filter, Cpu, FolderOpen, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function DataScrubPro() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} address copied to clipboard`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-8 h-8 text-cyan-500 animate-pulse" />
            <span className="text-xl font-bold font-mono tracking-tighter">DATA<span className="text-cyan-500">SCRUB</span> PRO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#features" className="hover:text-cyan-500 transition-colors">FEATURES</a>
            <a href="#modes" className="hover:text-cyan-500 transition-colors">MODES</a>
            <a href="#donate" className="hover:text-cyan-500 transition-colors">DONATE</a>
            <a href="/" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              BACK
            </a>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="font-mono border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/DataScrubPro.dmg", "_blank")}>
              <Download className="w-4 h-4 mr-2" />
              MAC
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              v4.1.0 // HIGH PERFORMANCE DATA EXTRACTION
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 leading-tight">
              EXTRACT & CLEAN <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">MASSIVE DATASETS</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              High-performance offline utility built with Rust. Process 50GB+ files with ease. 
              Extract credentials, filter by targets, and export organized results instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto font-mono text-lg h-14 px-8 bg-cyan-500 text-white hover:bg-cyan-600" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/DataScrubPro.dmg", "_blank")}>
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD FOR MAC
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 font-mono">
              macOS 11.0+ • Apple Silicon & Intel • 100% Offline
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">CORE CAPABILITIES</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for speed and scale. DataScrub Pro handles the largest datasets while keeping your data completely private.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-cyan-500" />}
              title="Blazing Fast Processing"
              description="Multi-threaded Rust engine processes millions of lines per minute. Configurable thread count for optimal performance on your hardware."
            />
            <FeatureCard 
              icon={<Database className="w-10 h-10 text-blue-500" />}
              title="Handle 50GB+ Files"
              description="Streaming architecture never loads the full file in memory. Process massive datasets without running out of RAM."
            />
            <FeatureCard 
              icon={<Filter className="w-10 h-10 text-cyan-500" />}
              title="Smart Target Filtering"
              description="Filter by specific targets like facebook.com or netflix.com. Results automatically grouped by URL domain or email domain."
            />
            <FeatureCard 
              icon={<FileText className="w-10 h-10 text-blue-500" />}
              title="Separate File Export"
              description="Export each target to its own file. Get facebook.txt, gmail.txt, netflix.txt - perfectly organized for your workflow."
            />
            <FeatureCard 
              icon={<FolderOpen className="w-10 h-10 text-cyan-500" />}
              title="Multi-File & Directory Loading"
              description="Load multiple files at once or entire directories. Recursively process all .txt, .log, .csv, and .dat files."
            />
            <FeatureCard 
              icon={<Lock className="w-10 h-10 text-blue-500" />}
              title="100% Offline & Private"
              description="No data ever leaves your machine. No telemetry, no cloud, no tracking. Your data stays yours."
            />
          </div>
        </div>
      </section>

      {/* Extraction Modes */}
      <section id="modes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">EXTRACTION MODES</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple extraction patterns for different data formats. Smart grouping based on mode and target filters.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-mono text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-cyan-500">MODE</th>
                    <th className="text-left py-4 px-4 text-muted-foreground">NO TARGETS</th>
                    <th className="text-left py-4 px-4 text-muted-foreground">WITH TARGETS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">Email:Pass</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by email domain</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL target</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">User:Pass</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL domain</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL target</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">Number:Pass</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL domain</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL target</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">Email Only</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by email domain</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL target</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">Username Only</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL domain</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL target</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">Phone Only</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL domain</td>
                    <td className="py-4 px-4 text-muted-foreground">Group by URL target</td>
                  </tr>
                  <tr className="hover:bg-card/50">
                    <td className="py-4 px-4 font-bold">Custom Regex</td>
                    <td className="py-4 px-4 text-muted-foreground" colSpan={2}>Define your own extraction pattern</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-mono text-cyan-500 mb-2">50GB+</div>
              <div className="text-muted-foreground font-mono text-sm">MAX FILE SIZE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-mono text-blue-500 mb-2">1M+</div>
              <div className="text-muted-foreground font-mono text-sm">LINES/MINUTE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-mono text-cyan-500 mb-2">100%</div>
              <div className="text-muted-foreground font-mono text-sm">OFFLINE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-mono text-blue-500 mb-2">0</div>
              <div className="text-muted-foreground font-mono text-sm">DATA SENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-cyan-500 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">SUPPORT DEVELOPMENT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            DataScrub Pro is free for everyone. If this tool saves you time, consider supporting future updates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bitcoin */}
            <Card className="bg-card border-border hover:border-[#F7931A]/50 transition-colors relative overflow-hidden group">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-[#F7931A]/10 rounded-full">
                    <Bitcoin className="w-8 h-8 text-[#F7931A]" />
                  </div>
                </div>
                <CardTitle className="text-xl font-mono">BITCOIN (BTC)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background p-4 rounded border border-border font-mono text-xs md:text-sm break-all mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                  bc1qe5jp06tfxuqpgaxazlsngkk54zkm4jzaxc6hk0
                </div>
                <Button 
                  className="w-full font-mono hover:bg-[#F7931A] hover:text-white transition-colors" 
                  variant="outline"
                  onClick={() => copyToClipboard("bc1qe5jp06tfxuqpgaxazlsngkk54zkm4jzaxc6hk0", "Bitcoin")}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  COPY ADDRESS
                </Button>
              </CardContent>
            </Card>

            {/* USDT */}
            <Card className="bg-card border-border hover:border-[#26A17B]/50 transition-colors relative overflow-hidden group">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-[#26A17B]/10 rounded-full">
                    <div className="w-8 h-8 text-[#26A17B] font-bold flex items-center justify-center border-2 border-[#26A17B] rounded-full">T</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-mono">USDT (TRC20)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background p-4 rounded border border-border font-mono text-xs md:text-sm break-all mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                  TMVpdC7JJUDYiE7jYMKMTiMHzMYWBuxcct
                </div>
                <Button 
                  className="w-full font-mono hover:bg-[#26A17B] hover:text-white transition-colors" 
                  variant="outline"
                  onClick={() => copyToClipboard("TMVpdC7JJUDYiE7jYMKMTiMHzMYWBuxcct", "USDT")}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  COPY ADDRESS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-card border border-border p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-mono mb-4">NEED HELP?</h2>
            <p className="text-muted-foreground mb-8">
              Questions, bug reports, or feature requests? Reach out on Telegram.
            </p>
            <a 
              href="https://t.me/NULLSHADExXx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded font-bold font-mono text-lg transition-all transform hover:scale-105"
            >
              <Send className="w-6 h-6" />
              TELEGRAM: @NULLSHADExXx
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30 text-center text-sm text-muted-foreground font-mono">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 DataScrub Pro. Free & Offline.</p>
          <p className="mt-2 text-xs opacity-50">
            <a href="/" className="hover:text-cyan-500 transition-colors">← Back to IdentityForge</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-card/50 border-border hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="font-mono text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
