import snaxImg from "../../assets/snax.png";
import graph from "../../assets/graph.png";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#E6F2EE] overflow-hidden py-[128px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center px-0 py-20px">
          {/* LEFT */}
          <div className="max-w-[900px] w-[780px] h-[288] py-4">
            <h1 className="text-[40px] sm:text-[48px] lg:text-[82px] font-[700] leading-[96px] tracking-[0] text-[#1A1A1A]">
              <span className="block">Meet your</span>
              <span className="block">
                <span
                  className="font-[700] text-[#1A8A8A] tracking-[-0.02em] mr-2"
                  style={{ fontFamily: '"Caveat", cursive' }}
                >
                  favorite
                </span>
                <span>new (old)</span>
              </span>
              <span className="block">marketing channel.</span>
            </h1>

            <p className="mt-5 text-[15px] lg:text-[16px] leading-[1.5] text-[#2B2B2B] max-w-[460px]">
              Remarkable results. Easier than email. Postcard marketing
              reinvented for modern ecommerce.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button
                href="#try"
                variant="primary"
                size="lg"
                className="uppercase tracking-[0.04em] text-[13px] font-[800] px-[26px] h-[46px] rounded-[10px]"
              >
                TRY IT RISK-FREE
              </Button>

              <div className="flex flex-col">
                <div className="flex items-center gap-[2px] text-[#FFB400]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2.5l2.47 5.01 5.53.8-4 3.9.94 5.49L12 15.2l-4.94 2.6.94-5.49-4-3.9 5.53-.8L12 2.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-[600] tracking-[-0.01em] text-[#1A1A1A] mt-[2px]">
                  5.0 Shopify Rating
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          
            <div className="relative">
                <img src={snaxImg} alt="snax" className="z-2 absolute w-200 h-auto right-0 top-[1px]"/>
                <img src={graph} alt="graph" className="z-4 absolute  w- h-auto right-0 top-[1px]" />

            </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
