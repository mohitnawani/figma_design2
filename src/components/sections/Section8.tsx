import pawImg from "../../assets/paw.png";

const Section8 = () => {
  return (
    <section className="bg-[#FF6B1A] py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left */}
          <div className="max-w-[520px]">
            <h2 className="text-white leading-[1] tracking-[-0.02em]">
              <span className="block text-[42px] sm:text-[48px] lg:text-[56px] font-[800]" style={{ fontFamily: "Inter, sans-serif" }}>
                Try PostPilot
              </span>
              <span className="block text-[42px] sm:text-[48px] lg:text-[56px] font-[800]" style={{ fontFamily: "Inter, sans-serif" }}>
                Risk-Free
              </span>
            </h2>
            <p className="mt-4 text-[12px] sm:text-[13px] leading-[1.5] text-white/90 font-[500]">
              No contracts. No commitments. Guaranteed results.*
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-7 h-[42px] rounded-[10px] bg-white border-[1.5px] border-black text-[11px] font-[800] tracking-[0.06em] text-black shadow-[3px_3px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all uppercase"
              >
                GET STARTED
              </a>
              <div className="flex flex-col">
                <div className="flex items-center gap-[2px] text-white">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.5l2.47 5.01 5.53.8-4 3.9.94 5.49L12 15.2l-4.94 2.6.94-5.49-4-3.9 5.53-.8L12 2.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-[600] tracking-[-0.01em] text-white mt-1">5.0 Shopify Rating</span>
              </div>
            </div>

            <p className="mt-8 text-[10px] leading-[1.4] text-white/70 font-[500]">
              * for qualified brands with over $1m annual Shopify revenue.
            </p>
          </div>

          {/* Right - paw image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={pawImg}
              alt="Paw postcard - Looking for some PAWsome deals?"
              className="w-[320px] sm:w-[380px] lg:w-[440px] xl:w-[480px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] rotate-[-2deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
