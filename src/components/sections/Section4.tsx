import cartImg from "../../assets/cart.png";
import longImg from "../../assets/long.png";
import postImg from "../../assets/post.png";
import shopifyImg from "../../assets/shopify.png";

const Section4 = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - spec: Inter 700 58/70 -2px + Covered By Your Grace 400 58/70 -2px */}
        <h2 className="text-center max-w-[900px] mx-auto">
          <span
            className="block text-[#1A1A1A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "58px",
              lineHeight: "70px",
              letterSpacing: "-2px",
              verticalAlign: "middle",
              textAlign: "center",
            }}
          >
            Everything your brand needs to
          </span>
          <span
            className="block"
            style={{
              fontFamily: '"Covered By Your Grace", cursive',
              fontWeight: 400,
              fontSize: "58px",
              lineHeight: "70px",
              letterSpacing: "-2px",
              verticalAlign: "middle",
              textAlign: "center",
              color: "#009387",
            }}
          >
            make your brand unforgettable
          </span>
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Card 1 - Plug-and-play */}
          <div className="bg-[#FFF2E8] rounded-[14px] p-6 lg:p-7 flex flex-col min-h-[340px]">
            <div className="flex-1 flex items-center justify-center gap-3 min-h-[110px]">
              <div className="flex flex-col gap-3">
                <div className="w-[68px] h-[68px] rounded-full bg-black flex items-center justify-center text-white text-[11px] font-[700] tracking-[0.04em]">
                  klaviyo
                  <span className="text-[7px] ml-[1px]">●</span>
                </div>
                <div className="w-[36px] h-[36px] rounded-full bg-black flex items-center justify-center ml-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="w-1.5 h-4 bg-white rounded-full ml-1"></span>
                </div>
              </div>
              <img
                src={shopifyImg}
                alt="Shopify"
                className="w-[112px] h-[112px] object-contain rounded-full"
              />
            </div>
            <h3 className="mt-6 text-center text-[16px] font-[800] leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
              Plug-and-play with
              <br />
              your stack
            </h3>
            <p className="mt-2 text-center text-[11px] leading-[1.5] text-[#5A5A5A] font-[500]">
              Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.
            </p>
          </div>

          {/* Card 2 - Run campaigns on autopilot */}
          <div className="bg-[#E6F2EE] rounded-[14px] p-6 lg:p-7 flex flex-col min-h-[340px]">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={cartImg}
                alt="Abandoned Cart Campaign"
                className="w-full max-w-[280px] h-auto object-contain rounded-[10px] border border-black/5 bg-white shadow-sm"
              />
            </div>
            <h3 className="mt-6 text-center text-[16px] font-[800] leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
              Run campaigns
              <br />
              on autopilot
            </h3>
            <p className="mt-2 text-center text-[11px] leading-[1.5] text-[#5A5A5A] font-[500]">
              Ink profits while you sleep: Just set it and forget it.
            </p>
          </div>

          {/* Card 3 - Real-time ROI dashboard */}
          <div className="bg-[#EDE8FF] rounded-[14px] p-6 lg:p-7 flex flex-col min-h-[340px]">
            <div className="flex-1 grid grid-cols-2 gap-3 content-center">
              <div className="col-span-2 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-[10px] border border-black/10 p-3 shadow-sm">
                  <p className="text-[7px] font-[600] tracking-[0.08em] text-black/50 uppercase">REVENUE</p>
                  <p className="text-[13px] font-[800] text-black mt-1">$38,941.91</p>
                  <div className="mt-2 h-[24px] flex items-end">
                    <svg viewBox="0 0 60 24" className="w-full h-full">
                      <path d="M2 18 L12 14 L22 16 L32 8 L42 10 L52 4 L58 6" fill="none" stroke="#0FB5B1" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-[10px] border border-black/10 p-3 shadow-sm">
                  <p className="text-[7px] font-[600] tracking-[0.08em] text-black/50 uppercase">CONVERSION RATE</p>
                  <p className="text-[13px] font-[800] text-black mt-1">20.9%</p>
                  <p className="text-[7px] font-[600] tracking-[0.08em] text-black/50 uppercase mt-3">ROAS</p>
                  <p className="text-[11px] font-[700] text-black">26X</p>
                </div>
              </div>
              <div className="bg-white rounded-[10px] border border-black/10 p-3 shadow-sm">
                <p className="text-[7px] font-[600] tracking-[0.08em] text-black/50 uppercase">ORDERS RECEIVED</p>
                <p className="text-[13px] font-[800] text-black mt-1">532</p>
              </div>
              <div className="bg-white rounded-[10px] border border-black/10 p-3 shadow-sm flex items-end justify-center">
                <div className="flex items-end gap-[3px] h-[32px]">
                  <div className="w-[6px] h-[10px] bg-[#0FB5B1] rounded-t-[2px]"></div>
                  <div className="w-[6px] h-[16px] bg-[#0FB5B1] rounded-t-[2px]"></div>
                  <div className="w-[6px] h-[20px] bg-[#0FB5B1] rounded-t-[2px]"></div>
                  <div className="w-[6px] h-[26px] bg-[#0FB5B1] rounded-t-[2px]"></div>
                  <div className="w-[6px] h-[28px] bg-[#0FB5B1] rounded-t-[2px]"></div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-center text-[16px] font-[800] leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
              Real-time ROI dashboard
            </h3>
            <p className="mt-2 text-center text-[11px] leading-[1.5] text-[#5A5A5A] font-[500]">
              Track performance of every postcard by customer or discount code. Your CFO will love it.
            </p>
          </div>

          {/* Card 4 - Deliver WOW */}
          <div className="bg-[#E6F7FB] rounded-[14px] p-6 lg:p-7 flex flex-col min-h-[340px]">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={longImg}
                alt="Handwritten card"
                className="w-full max-w-[300px] h-auto object-contain -rotate-[2deg] shadow-md rounded-[6px]"
              />
            </div>
            <h3 className="mt-6 text-center text-[16px] font-[800] leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
              Deliver WOW with *real*
              <br />
              handwritten cards
            </h3>
            <p className="mt-2 text-center text-[11px] leading-[1.5] text-[#5A5A5A] font-[500]">
              Our proprietary robots use real pens and ink for an unforgettable VIP touch.
            </p>
          </div>

          {/* Card 5 - Predictable pricing */}
          <div className="bg-[#FFF0F0] rounded-[14px] p-6 lg:p-7 flex flex-col min-h-[340px]">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={postImg}
                alt="Postcard with stamp"
                className="w-full max-w-[240px] h-auto object-contain"
              />
            </div>
            <h3 className="mt-6 text-center text-[16px] font-[800] leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
              Predictable pricing
            </h3>
            <p className="mt-2 text-center text-[11px] leading-[1.5] text-[#5A5A5A] font-[500]">
              Unlike CPCs, postage rates don&apos;t change based on competition or who you&apos;re targeting.
            </p>
          </div>

          {/* Card 6 - Complimentary concierge service */}
          <div className="bg-[#F5F5F5] rounded-[14px] p-6 lg:p-7 flex flex-col min-h-[340px]">
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <div className="w-full bg-white rounded-[10px] border-[1.5px] border-black px-4 py-3 flex items-center gap-3 shadow-[2px_2px_0px_0px_#000]">
                <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[12px]">🎨</span>
                <span className="text-[12px] font-[600] text-black">Design</span>
              </div>
              <div className="w-full bg-white rounded-[10px] border-[1.5px] border-black px-4 py-3 flex items-center gap-3 shadow-[2px_2px_0px_0px_#000]">
                <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[12px]">◎</span>
                <span className="text-[12px] font-[600] text-black">Strategy</span>
              </div>
              <div className="w-full bg-white rounded-[10px] border-[1.5px] border-black px-4 py-3 flex items-center gap-3 shadow-[2px_2px_0px_0px_#000]">
                <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[12px]">▥</span>
                <span className="text-[12px] font-[600] text-black">Implementation</span>
              </div>
            </div>
            <h3 className="mt-6 text-center text-[16px] font-[800] leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
              Complimentary
              <br />
              concierge service
            </h3>
            <p className="mt-2 text-center text-[11px] leading-[1.5] text-[#5A5A5A] font-[500]">
              DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
