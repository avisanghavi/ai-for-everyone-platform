const FeaturesSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "No-Code Innovation",
      description: "Transform ideas into reality without writing a single line of code. Our AI handles the technical complexity."
    },
    {
      icon: "🎯", 
      title: "Intelligent Automation",
      description: "AI assistants that learn your business and automate workflows across sales, marketing, product, and engineering."
    },
    {
      icon: "📈",
      title: "Scalable Growth",
      description: "Built for entrepreneurs and enterprises alike. Scale from MVP to million-user platforms seamlessly."
    },
    {
      icon: "🔗",
      title: "Seamless Integration", 
      description: "Connects with your existing tools and workflows. No disruption, just enhancement."
    },
    {
      icon: "🧠",
      title: "Natural Communication",
      description: "Communicate with your AI team in plain English. No technical jargon or complex commands required."
    },
    {
      icon: "⚡",
      title: "Real-Time Collaboration",
      description: "Your AI team works together 24/7, coordinating across departments to keep your business moving forward."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for <span className="text-transparent bg-clip-text bg-gradient-accent">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a solo entrepreneur or leading a growing team, our platform adapts to your needs and grows with your ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium">Trusted by 10,000+ innovators worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;