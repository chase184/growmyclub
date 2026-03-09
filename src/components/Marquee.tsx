"use client";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
