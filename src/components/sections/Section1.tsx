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
        {/* Heading - exact spec: Inter 700 63/76 -2px + Covered By Your Grace 400 63/76 -2px */}
        <h2 className="text-center">
          <span
            className="block text-[#1A1A1A]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '63px',
              lineHeight: '76px',
              letterSpacing: '-2px',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            Trusted by thousands
          </span>
          <span
            className="block text-[#1A1A1A]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '63px',
              lineHeight: '76px',
              letterSpacing: '-2px',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            of top DTC{" "}
            <span
              style={{
                fontFamily: '"Covered By Your Grace", cursive',
                fontWeight: 400,
                fontSize: '63px',
                lineHeight: '76px',
                letterSpacing: '-2px',
                color: '#009387',
              }}
            >
              brands.
            </span>
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {brands.map((b) => (
            <div key={b.logo} className="flex flex-col items-center">
              <div className="w-full h-full overflow-hidden  border border-black/5 rounded-[2px] shadow-sm">
                <img
                  src={b.img}
                  alt={b.alt}
                  className="w-full h-full object-cover object-center"
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
