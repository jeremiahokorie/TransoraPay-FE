import {
  Mail,
} from "lucide-react";

import AnimatedGear from "../../components/animatedGear";
import ServiceCard from "../../components/serviceCard";
import Image from "next/image";
import { Services } from "../../lib/data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--transora-cyan)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--transora-burgundy)/0.08)_0%,transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-1">
        {/* Header with Logo */}
        <header className="flex justify-center mb-8 md:mb-1">
          <Image
            src="/transora.png"
            alt="Logo"
            width={200}
            height={30}
            className="mb-6  md:mb-1"
          />
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto text-center">
          {/* Animated Gear */}
          <div className="flex justify-center mb-8 md:mb-12">
            <AnimatedGear />
          </div>

          {/* Maintenance Message */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              We're <span className="text-primary">Upgrading</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              We're currently performing scheduled maintenance to improve your
              experience. We'll be back shortly with faster and more reliable
              services.
            </p>

            {/* Estimated time */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Estimated downtime:{" "}
                <span className="text-foreground font-medium">2-4 hours</span>
              </span>
            </div> */}
          </div>

          {/* Services Section */}
          <section className="mb-12 md:mb-16">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              Our Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Fast, Secure & Reliable payment solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">
                    Need urgent assistance?
                  </p>
                  <a
                    href="mailto:jeremiah.imo@transoragroup.com"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    jeremiah.imo@transoragroup.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    +2348121461142, +2348131827513
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-auto pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <span className="font-semibold text-foreground">
              Transora Limited
            </span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Transora Limited. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
