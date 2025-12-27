import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Fingerprint, Layers, Zap, Globe, Lock, Terminal, Download, Send, Bitcoin, Copy, Heart, Database, Github, FileText, Filter, FolderOpen } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
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
            <Shield className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-xl font-bold font-mono tracking-tighter">NULL<span className="text-primary">SHADE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#identityforge" className="hover:text-primary transition-colors">IDENTITYFORGE</a>
            <a href="#datascrub" className="hover:text-primary transition-colors">DATASCRUB PRO</a>
            <a href="#donate" className="hover:text-primary transition-colors">DONATE</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero-bg.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              FREE TOOLS FOR POWER USERS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 leading-tight">
              PROFESSIONAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SECURITY TOOLS</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              High-performance utilities built with Rust and Tauri. Privacy-focused, offline-capable, and completely free.
            </p>
          </div>
        </div>
      </section>

      {/* IdentityForge Section */}
      <section id="identityforge" className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-card border border-border rounded-lg p-2">
                  <img src="/images/feature-isolation.png" alt="IdentityForge Interface" className="rounded w-full shadow-2xl" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold font-mono">IDENTITY<span className="text-primary">FORGE</span></h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IdentityForge is an advanced anti-detect browser manager designed for professionals who require complete browser isolation and fingerprint management. Built on Tauri 2.0 with a Rust backend, it delivers exceptional performance while maintaining the smallest possible memory footprint.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each browser profile operates in a fully isolated environment with unique fingerprints, cookies, and local storage. Native proxy support enables seamless IP rotation across HTTP, HTTPS, and SOCKS5 protocols with authentication.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open("/downloads/IdentityForge.dmg", "_blank")}>
                  <Download className="w-5 h-5 mr-2" />
                  MAC
                </Button>
                <Button size="lg" variant="outline" className="font-mono" onClick={() => window.open("/downloads/IdentityForge.exe", "_blank")}>
                  <Download className="w-5 h-5 mr-2" />
                  WINDOWS
                </Button>
                <Button size="lg" variant="outline" className="font-mono" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-app", "_blank")}>
                  <Github className="w-5 h-5 mr-2" />
                  SOURCE CODE
                </Button>
              </div>
              {/* macOS Installation Instructions */}
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⚠️</span>
                  <div>
                    <h4 className="font-mono font-bold text-yellow-500 mb-2">macOS INSTALLATION</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      After downloading, drag the app to Applications folder, then open Terminal and run:
                    </p>
                    <code className="block bg-background p-2 rounded text-xs font-mono text-primary">
                      xattr -cr /Applications/IdentityForge.app
                    </code>
                    <p className="text-xs text-muted-foreground mt-2">
                      This removes the quarantine flag so macOS allows the app to run.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IdentityForge Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Fingerprint className="w-10 h-10 text-primary" />}
              title="Fingerprint Spoofing"
              description="Advanced Canvas, WebGL, Audio, and Font fingerprint randomization. Hardware concurrency noise injection passes all major detection services."
            />
            <FeatureCard 
              icon={<Layers className="w-10 h-10 text-accent" />}
              title="Complete Isolation"
              description="Each profile runs in a sandboxed WebView instance with dedicated data directories, ensuring zero cross-contamination between sessions."
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-primary" />}
              title="Proxy Integration"
              description="Native support for HTTP, HTTPS, and SOCKS5 proxies with full authentication. Assign unique IP addresses to every browser profile."
            />
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-accent" />}
              title="Bulk Operations"
              description="Create, launch, and manage hundreds of profiles simultaneously. Mass import/export capabilities for enterprise-scale deployments."
            />
            <FeatureCard 
              icon={<Lock className="w-10 h-10 text-primary" />}
              title="Cookie Management"
              description="Import and export cookies in JSON and Netscape formats. Maintain persistent sessions across application restarts."
            />
            <FeatureCard 
              icon={<Terminal className="w-10 h-10 text-accent" />}
              title="No Restrictions"
              description="No HWID locks, no subscription fees, no usage limits. Complete freedom to deploy across unlimited devices and configurations."
            />
          </div>
        </div>
      </section>

      {/* DataScrub Pro Section */}
      <section id="datascrub" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-card border border-border rounded-lg p-8 text-center">
                  <Database className="w-32 h-32 text-cyan-500 mx-auto mb-4" />
                  <div className="text-6xl font-bold font-mono text-cyan-500">50GB+</div>
                  <div className="text-muted-foreground font-mono">FILE PROCESSING</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <Database className="w-12 h-12 text-cyan-500" />
                <h2 className="text-4xl md:text-5xl font-bold font-mono">DATA<span className="text-cyan-500">SCRUB</span> PRO</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DataScrub Pro is a high-performance data extraction and organization utility engineered for processing massive text datasets. The multi-threaded Rust engine handles files exceeding 50GB while maintaining a responsive interface through intelligent streaming architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Supporting multiple extraction formats including URL:Login:Pass, Email:Pass, User:Pass, and custom regex patterns, DataScrub Pro automatically groups results by target domain or email provider. Export functionality generates individual files per target for seamless workflow integration.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" className="font-mono bg-cyan-500 text-white hover:bg-cyan-600" onClick={() => window.open("/downloads/DataScrubPro.dmg", "_blank")}>
                  <Download className="w-5 h-5 mr-2" />
                  DOWNLOAD FOR MAC
                </Button>
                <Button size="lg" variant="outline" className="font-mono" onClick={() => window.open("/downloads/DataScrubPro.exe", "_blank")}>
                  <Download className="w-5 h-5 mr-2" />
                  DOWNLOAD FOR WINDOWS
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-mono">
                macOS 11.0+ • Apple Silicon & Intel • 100% Offline • Closed Source
              </p>
              {/* macOS Installation Instructions */}
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⚠️</span>
                  <div>
                    <h4 className="font-mono font-bold text-yellow-500 mb-2">macOS INSTALLATION</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      After downloading, drag the app to Applications folder, then open Terminal and run:
                    </p>
                    <code className="block bg-background p-2 rounded text-xs font-mono text-primary">
                      xattr -cr /Applications/DataScrubPro.app
                    </code>
                    <p className="text-xs text-muted-foreground mt-2">
                      This removes the quarantine flag so macOS allows the app to run.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DataScrub Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-cyan-500" />}
              title="Multi-Threaded Engine"
              description="Configurable thread pool processes millions of lines per minute. Adjust thread count and chunk size for optimal performance on your hardware."
              color="cyan"
            />
            <FeatureCard 
              icon={<Database className="w-10 h-10 text-blue-500" />}
              title="Streaming Architecture"
              description="Memory-efficient design never loads entire files into RAM. Process datasets of any size without system resource constraints."
              color="cyan"
            />
            <FeatureCard 
              icon={<Filter className="w-10 h-10 text-cyan-500" />}
              title="Smart Target Filtering"
              description="Filter results by specific domains like facebook.com or netflix.com. Intelligent grouping by URL target or email domain based on extraction mode."
              color="cyan"
            />
            <FeatureCard 
              icon={<FileText className="w-10 h-10 text-blue-500" />}
              title="Organized Export"
              description="Generate individual output files per target domain. Export facebook.txt, gmail.txt, and netflix.txt in a single operation."
              color="cyan"
            />
            <FeatureCard 
              icon={<FolderOpen className="w-10 h-10 text-cyan-500" />}
              title="Batch Processing"
              description="Load multiple files simultaneously or process entire directories. Recursive scanning supports .txt, .log, .csv, and .dat formats."
              color="cyan"
            />
            <FeatureCard 
              icon={<Lock className="w-10 h-10 text-blue-500" />}
              title="Complete Privacy"
              description="100% offline operation ensures data never leaves your machine. No telemetry, no cloud connectivity, no external dependencies."
              color="cyan"
            />
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">SUPPORT DEVELOPMENT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            All tools are provided free of charge. If these utilities contribute to your success, consider supporting ongoing development and maintenance.
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
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-card border border-border p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-mono mb-4">GET IN TOUCH</h2>
            <p className="text-muted-foreground mb-8">
              Questions, bug reports, or feature requests? Connect directly via Telegram for the fastest response.
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
          <p>&copy; 2025 NULLSHADExXx. All tools provided as-is for educational purposes.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color = "primary" }: { icon: React.ReactNode, title: string, description: string, color?: string }) {
  const borderColor = color === "cyan" ? "hover:border-cyan-500/50" : "hover:border-primary/50";
  return (
    <Card className={`bg-card/50 border-border ${borderColor} transition-all duration-300 hover:-translate-y-1`}>
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
