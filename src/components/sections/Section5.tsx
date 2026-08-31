import { useState } from "react";

type Step = {
  id: string;
  title: string;
  desc?: string;
};

const steps: Step[] = [
  { id: "01", title: "Segment" },
  { id: "02", title: "Design" },
  {
    id: "03",
    title: "Send",
    desc: "One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week.",
  },
  { id: "04", title: "Convert" },
];

const Section5 = () => {
  const [active, setActive] = useState("03");

  return (
    <section className="bg-[#EAF6F3] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center">
          <span
            className="block text-[#1A1A1A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "42px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Fast launch. Fast results.
          </span>
          <span
            className="block mt-1"
            style={{
              fontFamily: '"Covered By Your Grace", cursive',
              fontWeight: 400,
              fontSize: "42px",
              lineHeight: "1",
              color: "#009387",
            }}
          >
            Here&apos;s how.
          </span>
        </h2>

        {/* Steps */}
        <div className="mt-12 lg:mt-14 max-w-[560px]">
          <div className="space-y-6">
            {steps.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full text-left flex gap-6 lg:gap-8 group ${!isActive ? "opacity-60 hover:opacity-80" : ""} transition-opacity`}
                >
                  {/* Number + line */}
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-[22px] font-[400] leading-none w-[36px] text-left ${isActive ? "text-[#009387]" : "text-[#7EC8C0]"}`}
                      style={{ fontFamily: '"Covered By Your Grace", cursive' }}
                    >
                      {s.id}
                    </span>
                    {isActive && s.desc && (
                      <div className="mt-3 w-[1.5px] flex-1 min-h-[50px] bg-black/80 relative">
                        <div className="absolute bottom-0 w-full h-[20px] bg-[#EAF6F3] opacity-30"></div>
                      </div>
                    )}
                    {!isActive && <div className="mt-3 w-[1px] flex-1 min-h-[20px] opacity-0"></div>}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-4 ${isActive ? "" : "py-1"}`}>
                    <p
                      className={`text-[22px] lg:text-[26px] leading-none tracking-[-0.02em] ${isActive ? "font-[800] text-[#1A1A1A]" : "font-[700] text-[#6B6B6B]"}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {s.title}
                    </p>
                    {isActive && s.desc && (
                      <p className="mt-2 text-[13px] leading-[1.6] text-[#4A4A4A] font-[500] max-w-[380px]">
                        {s.desc}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
