import obviImg from "../../assets/obv_img.png";
import obviLogo from "../../assets/obvi_logo.png";
import bulletproofLogo from "../../assets/bulletproof.png";
import boomLogo from "../../assets/boom.png";
import orbitLogo from "../../assets/orbit_baby.png";

const Section7 = () => {
  return (
    <section className="bg-[#F3F1FF] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left - Images */}
          <div className="relative flex justify-center lg:justify-start py-6 lg:py-8">
            <img
              src={obviImg}
              alt="Obvi postcards - 20% OFF campaigns"
              className="w-[340px] sm:w-[420px] lg:w-[520px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Right - Content */}
          <div className="max-w-[560px]">
            <h2 className="text-[#1A1A1A] leading-[1.05] tracking-[-0.02em]">
              <span
                className="block"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "38px",
                  lineHeight: "1.1",
                }}
              >
                How{" "}
                <span
                  style={{
                    fontFamily: '"Covered By Your Grace", cursive',
                    fontWeight: 400,
                    fontSize: "42px",
                    color: "#009387",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Obvi
                </span>{" "}
                Drives
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "38px",
                  lineHeight: "1.1",
                }}
              >
                Profits with Hands-
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "38px",
                  lineHeight: "1.1",
                }}
              >
                Off Postcard
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "38px",
                  lineHeight: "1.1",
                }}
              >
                Campaigns
              </span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.6] text-[#5A5A5A] font-[500] max-w-[460px]">
              The <span className="inline-flex items-center">🚀</span> supplements brand wanted to offset high ad costs
              and reach dormant customers. They scored 1000%+ ROIs.
            </p>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-3 gap-6">
              <div>
                <p className="text-[22px] font-[800] tracking-[-0.02em] text-[#1A1A1A] leading-none">1468%</p>
                <p className="text-[10px] font-[600] tracking-[0.04em] text-[#6B6B6B] uppercase mt-1">ROI</p>
              </div>
              <div>
                <p className="text-[22px] font-[800] tracking-[-0.02em] text-[#1A1A1A] leading-none">8.59%</p>
                <p className="text-[10px] font-[600] tracking-[0.04em] text-[#6B6B6B] uppercase mt-1">Conversion Rate</p>
              </div>
              <div>
                <p className="text-[22px] font-[800] tracking-[-0.02em] text-[#1A1A1A] leading-none">$73,457</p>
                <p className="text-[10px] font-[600] tracking-[0.04em] text-[#6B6B6B] uppercase mt-1">Sales Generated</p>
              </div>
            </div>

            <div className="mt-7">
              <a
                href="#case-study"
                className="inline-flex items-center justify-center px-7 h-[46px] rounded-[10px] bg-white border-[1.5px] border-black text-[11px] font-[800] tracking-[0.06em] text-black shadow-[3px_3px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all uppercase"
              >
                READ CASE STUDY
              </a>
            </div>

            {/* Logos */}
            <div className="mt-10 flex items-center gap-6 lg:gap-8 flex-wrap opacity-80">
              <img src={obviLogo} alt="obvi." className="h-[22px] w-auto object-contain" />
              <img src={bulletproofLogo} alt="BULLETPROOF" className="h-[18px] w-auto object-contain opacity-60 grayscale" />
              <img src={boomLogo} alt="BOOM!" className="h-[16px] w-auto object-contain opacity-60 grayscale" />
              <img src={orbitLogo} alt="orbit baby" className="h-[20px] w-auto object-contain opacity-60 grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
