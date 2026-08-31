import rungumImg from "../../assets/Run_gum.png";
import beardImg from "../../assets/beard.png";
import promixImg from "../../assets/promix.png";
import scotchImg from "../../assets/scotch.png";

const brands = [
  {
    img: rungumImg,
    alt: "Run Gum - Chew Gum Have Energy Run The Day",
    logo: "RUNGUM",
    logoStyle: "font-[900] tracking-[-0.03em] text-[20px] sm:text-[22px]",
    logoSpan: { light: "GUM", bold: "RUN" },
  },
  {
    img: beardImg,
    alt: "Beardbrand - Protect & Nourish Your Beard",
    logo: "Beardbrand",
    logoStyle: "font-[700] text-[18px] sm:text-[20px] tracking-[-0.02em]",
  },
  {
    img: promixImg,
    alt: "Promix postcard",
    logo: "PROMIX",
    logoStyle: "font-[700] tracking-[0.08em] text-[20px] sm:text-[22px]",
  },
  {
    img: scotchImg,
    alt: "Scotch Porter - We Miss You",
    logo: "SCOTCH PORTER",
    logoStyle: "font-[800] tracking-[-0.01em] text-[11px] sm:text-[12px]",
  },
];

const Section1 = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - responsive: 32px mobile -> 63px desktop */}
        <h2 className="text-center">
          <span
            className="block text-[#1A1A1A] text-[32px] sm:text-[44px] lg:text-[63px] leading-[1.1] sm:leading-[1.15] tracking-[-0.02em] sm:tracking-[-2px]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >
            Trusted by thousands
          </span>
          <span
            className="block text-[#1A1A1A] text-[32px] sm:text-[44px] lg:text-[63px] leading-[1.1] sm:leading-[1.15] tracking-[-0.02em] sm:tracking-[-2px]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >
            of top DTC{" "}
            <span
              className="text-[32px] sm:text-[44px] lg:text-[63px]"
              style={{
                fontFamily: '"Covered By Your Grace", cursive',
                fontWeight: 400,
                lineHeight: '1.1',
                letterSpacing: '-1px',
                color: '#009387',
              }}
            >
              brands.
            </span>
          </span>
        </h2>

        {/* Cards - hover: lift + shadow + border color */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {brands.map((b) => (
            <div key={b.logo} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full h-full overflow-hidden border border-black/5 rounded-[8px] shadow-sm bg-white group-hover:shadow-[6px_6px_0px_0px_#000] group-hover:border-black group-hover:-translate-y-2 transition-all duration-300">
                <img
                  src={b.img}
                  alt={b.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
