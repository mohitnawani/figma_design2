import dp1 from "../../assets/dp1.jpg";
import dp2 from "../../assets/dp2.jpg";
import dp3 from "../../assets/dp3.jpg";
import bird from "../../assets/bird.png";
import Button from "../layouts/Button";

const testimonials = [
  {
    avatar: dp1,
    name: "Helen Guo",
    handle: "@HelenGuo_",
    text: "Been using PostPilot for years. Good for retention. And you can get creative with messaging.",
  },
  {
    avatar: dp2,
    name: "Nathan Woods",
    handle: "@HeisNathan",
    text: "Have done some rad winbacks to 90 days since purchase that have converted 9.3%. PostPilot team is one of my favs.",
  },
  {
    avatar: dp3,
    name: "Chris Lander",
    handle: "@chris_basis",
    text: "+1 for PostPilot. Have only done one campaign so far, but it's been wonderful. Their support is also top notch. Super helpful every time we set something up.",
  },
];

const Section6 = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center">
          <span
            className="text-[#1A1A1A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "38px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            PostPilot is{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            for{" "}
            <span
              style={{
                fontFamily: '"Covered By Your Grace", cursive',
                fontWeight: 400,
                fontSize: "42px",
                color: "#009387",
                letterSpacing: "-0.5px",
              }}
            >
              DTC
            </span>
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.handle}
              className="bg-white border-[1.5px] border-black rounded-[12px] p-5 flex flex-col min-h-[180px] shadow-[2px_2px_0px_0px_#000]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-black/10"
                  />
                  <div>
                    <p className="text-[13px] font-[700] leading-none text-[#1A1A1A] tracking-[-0.01em]">{t.name}</p>
                    <p className="text-[11px] font-[500] leading-none text-[#6B6B6B] mt-1">{t.handle}</p>
                  </div>
                </div>
                <img src={bird} alt="Twitter" className="w-5 h-5 object-contain mt-1" />
              </div>
              <p className="mt-4 text-[13px] leading-[1.6] text-[#2B2B2B] font-[500]">
                {t.text.split("PostPilot").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="font-[700]">PostPilot</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href="#try"
            variant="primary"
            size="sm"
            className="uppercase tracking-[0.05em] text-[11px] font-[800] px-[28px] h-[44px] rounded-[8px]"
          >
            TRY IT RISK-FREE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section6;
