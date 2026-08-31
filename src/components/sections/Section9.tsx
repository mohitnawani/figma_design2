import costImg from "../../assets/cost.png";
import postcardImg from "../../assets/postcard.jpg";
import thanksImg from "../../assets/thanks.jpg";

const Section9 = () => {
  return (
    <section className="bg-[#F9F9F6] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center">
          <span
            className="text-[#1A1A1A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "38px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Latest trends &{" "}
            <span
              style={{
                fontFamily: '"Covered By Your Grace", cursive',
                fontWeight: 400,
                fontSize: "42px",
                color: "#009387",
                letterSpacing: "-0.5px",
              }}
            >
              insights
            </span>
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {/* Card 1 */}
          <a href="#" className="group bg-white border border-black/5 rounded-[6px] overflow-hidden hover:shadow-[3px_3px_0px_0px_#000] hover:border-black transition-all">
            <div className="aspect-[1.5] overflow-hidden bg-[#F5F5F5]">
              <img src={costImg} alt="3 Low-Cost Campaigns" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-[15px] font-[700] leading-[1.3] tracking-[-0.02em] text-[#1A1A1A]">3 Low-Cost Campaigns You Must Run to Win BFCM</h3>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="group bg-white border border-black/5 rounded-[6px] overflow-hidden hover:shadow-[3px_3px_0px_0px_#000] hover:border-black transition-all">
            <div className="aspect-[1.5] overflow-hidden bg-[#0A0A0A]">
              <img src={postcardImg} alt="Postcard Marketing Guide" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-[15px] font-[700] leading-[1.3] tracking-[-0.02em] text-[#1A1A1A]">Postcard Marketing: The Definitive Guide to High ROI [2022]</h3>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="group bg-white border border-black/5 rounded-[6px] overflow-hidden hover:shadow-[3px_3px_0px_0px_#000] hover:border-black transition-all">
            <div className="aspect-[1.5] overflow-hidden bg-[#EFF5F3] flex items-center justify-center">
              <img src={thanksImg} alt="Thanks for your business" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-[15px] font-[700] leading-[1.3] tracking-[-0.02em] text-[#1A1A1A]">The Ultimate Guide to Thank You Notes for Ecommerce</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section9;
