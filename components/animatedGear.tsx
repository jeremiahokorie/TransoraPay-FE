import { Settings } from "lucide-react";

const AnimatedGear = () => {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

      {/* Main gear container */}
      <div className="relative">
        <Settings
          className="w-32 h-32 md:w-40 md:h-40 text-primary animate-spin-slow"
          strokeWidth={1.5}
        />

        {/* Inner gear */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Settings
            className="w-16 h-16 md:w-20 md:h-20 text-secondary animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "5s" }}
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedGear;
