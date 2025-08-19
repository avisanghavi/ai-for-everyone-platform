import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center relative overflow-hidden pt-24">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,126,234,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-8 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-up">
              <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 shadow-premium">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold text-sm tracking-wide">AI FOR THE REST OF US</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
                  From{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-text">
                    Idea
                  </span>
                  <br />
                  to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-text">
                    Enterprise
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                  The platform that allows ANYONE to leverage the power of AI. 
                  No coding, no complexity – just pure innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Button variant="premium" size="lg" className="text-lg px-12 py-4 h-auto">
                  Start Building
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="glass" size="lg" className="text-lg px-12 py-4 h-auto">
                  Watch Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </div>
              
              <div className="flex items-center space-x-12 text-muted-foreground pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">10K+</div>
                  <div className="text-sm font-medium">Ideas Realized</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm font-medium">Success Rate</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-sm font-medium">AI Support</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-premium rounded-full opacity-20 blur-2xl"></div>
                <div className="relative w-96 h-96 glass rounded-3xl shadow-premium-hero p-8 flex items-center justify-center">
                  <img 
                    src={heroCharacter} 
                    alt="AI Assistant" 
                    className="w-80 h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;