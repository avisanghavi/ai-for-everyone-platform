import teamCharacters from "@/assets/team-characters.png";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex",
      role: "Sales AI",
      specialty: "Lead Generation & Customer Relations",
      description: "Transforms prospects into loyal customers with personalized outreach and data-driven insights.",
      stats: { metric: "37+", label: "High-potential leads identified" }
    },
    {
      name: "Maya", 
      role: "Marketing AI",
      specialty: "Content & Strategy",
      description: "Creates compelling campaigns and go-to-market strategies with 12 content pieces ready.",
      stats: { metric: "12+", label: "Content pieces created" }
    },
    {
      name: "Sam",
      role: "Product AI", 
      specialty: "Feature Development & UX",
      description: "Coordinates with engineering to finalize feature specs with 87% code completion.",
      stats: { metric: "87%", label: "Code completion rate" }
    },
    {
      name: "Jordan",
      role: "Engineering AI",
      specialty: "Development & Architecture", 
      description: "Builds scalable solutions with intelligent analysis, ensuring 99.99% system uptime.",
      stats: { metric: "99.99%", label: "System uptime" }
    }
  ];

  return (
    <section id="team" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Meet Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-text">
              AI Team
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Four specialized AI assistants that work together seamlessly to transform your ideas into thriving businesses.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="glass rounded-3xl p-12 shadow-premium-lg animate-scale-in">
            <div className="mb-12">
              <img 
                src={teamCharacters} 
                alt="AI Team Characters" 
                className="w-full h-80 object-cover rounded-2xl shadow-premium"
              />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-all duration-300 hover:shadow-premium group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">{member.name}</h3>
                    <div className="text-sm text-primary font-semibold tracking-wide">{member.role}</div>
                    <div className="text-sm text-muted-foreground font-medium">{member.specialty}</div>
                    
                    <div className="bg-primary/10 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-primary">{member.stats.metric}</div>
                      <div className="text-xs text-muted-foreground font-medium">{member.stats.label}</div>
                    </div>
                    
                    <p className="text-sm text-foreground/80 leading-relaxed font-light">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="premium" size="lg" className="px-12 py-4 h-auto text-lg">
                Connect with the Team
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center glass rounded-3xl p-12 shadow-premium animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight">
            See AI Assistants in Action
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Experience how our AI assistants communicate naturally to solve real business challenges across all departments.
          </p>
          <Button variant="glow" size="lg" className="px-12 py-4 h-auto text-lg">
            Watch Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;