import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Fingerprint, Layers, Zap, Globe, Lock, Terminal, Download, Send, Bitcoin, Copy, Heart, Database, ArrowRight } from "lucide-react";
import { useState } from "react";
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
            <span className="text-xl font-bold font-mono tracking-tighter">IDENTITY<span className="text-primary">FORGE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#features" className="hover:text-primary transition-colors">FEATURES</a>
            <a href="#tools" className="hover:text-primary transition-colors">TOOLS</a>
            <a href="#donate" className="hover:text-primary transition-colors">DONATE</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/IdentityForge_x64_en-US.msi", "_blank")}>
              <Download className="w-4 h-4 mr-2" />
              WIN
            </Button>
            <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/IdentityForge_aarch64.dmg", "_blank")}>
              <Download className="w-4 h-4 mr-2" />
              MAC
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
              SYSTEM ONLINE // FREE RELEASE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 leading-tight">
              FORGE YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DIGITAL IDENTITY</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              The ultimate anti-detect browser manager. Now 100% free and open for the community. 
              Isolate fingerprints, manage proxies, and scale your operations without limits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto font-mono text-lg h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/IdentityForge_x64_en-US.msi", "_blank")}>
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD FOR WINDOWS
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-mono text-lg h-14 px-8 border-muted-foreground/30 hover:bg-muted/20" onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/IdentityForge_aarch64.dmg", "_blank")}>
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD FOR MAC
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">SYSTEM CAPABILITIES</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Engineered for stealth, performance, and scale. IdentityForge provides military-grade browser isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Fingerprint className="w-10 h-10 text-primary" />}
              title="Advanced Fingerprint Spoofing"
              description="Canvas, WebGL, Audio, Fonts, and Hardware concurrency noise injection. Pass BrowserLeaks and Pixelscan checks effortlessly."
            />
            <FeatureCard 
              icon={<Layers className="w-10 h-10 text-accent" />}
              title="True Isolation"
              description="Each profile runs in a completely isolated WebView instance with separate data directories, cookies, and local storage."
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-primary" />}
              title="Proxy Management"
              description="Native support for HTTP, HTTPS, and SOCKS5 proxies with authentication. Assign unique IPs to every profile."
            />
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-accent" />}
              title="Bulk Operations"
              description="Create 100+ profiles in seconds. Mass launch, edit, and delete capabilities for high-volume operations."
            />
            <FeatureCard 
              icon={<Lock className="w-10 h-10 text-primary" />}
              title="Cookie Management"
              description="Import and export cookies in JSON/Netscape format. Maintain session persistence across restarts."
            />
            <FeatureCard 
              icon={<Terminal className="w-10 h-10 text-accent" />}
              title="No HWID Lock"
              description="Freedom to use on your devices. No intrusive hardware ID tracking or licensing restrictions."
            />
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-card border border-border rounded-lg p-2">
                  <img src="/images/feature-isolation.png" alt="App Interface" className="rounded w-full shadow-2xl" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-mono">
                ENGINEERED FOR <span className="text-primary">SCALE</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded border border-primary/20 h-fit">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-2">Unmatched Privacy</h3>
                    <p className="text-muted-foreground">
                      Stop being tracked. IdentityForge randomizes your digital footprint, making every session appear as a unique, legitimate user.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-2 rounded border border-accent/20 h-fit">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-2">Lightning Fast</h3>
                    <p className="text-muted-foreground">
                      Built with Rust and Tauri 2.0. Uses a fraction of the RAM compared to Electron-based competitors like GoLogin or Multilogin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tools Section */}
      <section id="tools" className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">MORE TOOLS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out our other free utilities designed for power users.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border hover:border-cyan-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <Database className="w-10 h-10 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-mono text-2xl mb-2">DataScrub Pro</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      High-performance data extraction tool. Process 50GB+ files, extract credentials by target, and export organized results.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-mono rounded">50GB+ FILES</span>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-mono rounded">MULTI-THREADED</span>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-mono rounded">100% OFFLINE</span>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-mono rounded">RUST POWERED</span>
                </div>
                <div className="flex gap-4">
                  <Button 
                    className="flex-1 font-mono bg-cyan-500 hover:bg-cyan-600 text-white"
                    onClick={() => window.location.href = "/datascrub-pro"}
                  >
                    LEARN MORE
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="font-mono border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
                    onClick={() => window.open("https://github.com/NULLSHADExXx/identityforge-website/releases/latest/download/DataScrubPro.dmg", "_blank")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    MAC
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">SUPPORT DEVELOPMENT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            All tools are free for everyone. If they help you succeed, consider supporting future updates and maintenance.
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
      <section id="contact" className="py-20 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-card border border-border p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-mono mb-4">JOIN THE COMMUNITY</h2>
            <p className="text-muted-foreground mb-8">
              Connect with the developer and other users. Report bugs, suggest features, or just say thanks.
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
          <p>&copy; 2025 NULLSHADExXx Tools. Open Source & Free.</p>
          <p className="mt-2 text-xs opacity-50">Designed for educational and research purposes only.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
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
