import snaxImg from "../../assets/snax.png";
import graph from "../../assets/graph.png";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-[#E6F2EE] overflow-hidden scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 xl:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* LEFT */}
          <div className="max-w-[800px] w-full py-2 sm:py-4">
            <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[78px] font-[700] leading-[0.95] tracking-[-0.02em] text-[#1A1A1A]">
              <span className="block">Meet your</span>
              <span className="block">
                <span
                  className="font-[700] text-[#1A8A8A] tracking-[-0.02em] mr-2 inline-block hover:text-[#FF6B1A] transition-colors duration-300 cursor-default"
                  style={{ fontFamily: '"Caveat", cursive' }}
                >
                  favorite
                </span>
                <span>new (old)</span>
              </span>
              <span className="block">marketing channel.</span>
            </h1>

            <p className="mt-5 text-[15px] lg:text-[16px] leading-[1.5] text-[#2B2B2B] max-w-[460px]">
              Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="uppercase tracking-[0.04em] text-[13px] font-[800] px-[26px] h-[46px] rounded-[10px] hover:bg-[#E85D10]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                  history.pushState(null, "", "#pricing");
                }}
              >
                TRY IT RISK-FREE
              </Button>

              <div className="flex flex-col group cursor-default">
                <div className="flex items-center gap-[2px] text-[#FFB400] group-hover:scale-110 transition-transform duration-200 origin-left">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="hover:scale-125 transition-transform duration-150"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <path d="M12 2.5l2.47 5.01 5.53.8-4 3.9.94 5.49L12 15.2l-4.94 2.6.94-5.49-4-3.9 5.53-.8L12 2.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-[600] tracking-[-0.01em] text-[#1A1A1A] mt-[2px] group-hover:text-[#009387] transition-colors duration-200">
                  5.0 Shopify Rating
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT - fully responsive: stacked on mobile, overlapping offset on desktop with hover lift */}

           <div className="relative w-full h-[600px]">
          {/* Snax image */}
          <img
            src={snaxImg}
            alt="Snax postcard example"
            className="absolute right-[-8px] top-0 w-full max-w-[520px] h-auto object-contain z-10"
          />

          {/* Graph image */}
          <img
            src={graph}
            alt="Performance graph"
            className="absolute right-[-8px] top-0 w-full max-w-[440px] h-auto object-contain rounded-[10px] z-20"
          />
         </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
