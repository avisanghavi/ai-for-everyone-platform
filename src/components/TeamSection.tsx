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
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-accent">AI Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized AI assistants that work together seamlessly to transform your ideas into thriving businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative bg-card rounded-2xl p-8 border border-border shadow-lg">
            <img 
              src={teamCharacters} 
              alt="AI Team Characters" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-all duration-300 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <div className="text-sm text-accent font-semibold mb-3">{member.role}</div>
                    <div className="text-sm text-muted-foreground mb-4">{member.specialty}</div>
                    
                    <div className="bg-primary/10 rounded-lg p-3 mb-4">
                      <div className="text-2xl font-bold text-primary">{member.stats.metric}</div>
                      <div className="text-xs text-muted-foreground">{member.stats.label}</div>
                    </div>
                    
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="hero" size="lg">
                Connect with the Team
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-subtle rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">See AI Assistants in Action</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Experience how our AI assistants communicate naturally to solve real business challenges across all departments.
          </p>
          <Button variant="glow" size="lg">
            Watch Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;