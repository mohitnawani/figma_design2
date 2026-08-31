import mailImg from "../../assets/mail.png";

const Section2 = () => {
  return (
    <section className="bg-[#F3FAFA] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center">
          <span
            className="block text-[#1A1A1A] text-[32px] sm:text-[44px] lg:text-[63px] leading-[1.1] tracking-[-0.02em] lg:tracking-[-1.5px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Why use direct mail?
          </span>
          <span
            className="block text-[#1A1A1A] text-[32px] sm:text-[44px] lg:text-[63px] leading-[1.1] tracking-[-0.02em] lg:tracking-[-1.5px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            It{" "}
            <span
              className="text-[32px] sm:text-[44px] lg:text-[63px]"
              style={{
                fontFamily: '"Covered By Your Grace", cursive',
                fontWeight: 400,
                lineHeight: "1.1",
                letterSpacing: "-1px",
                color: "#009387",
              }}
            >
              works
            </span>{" "}
            like crazy.
          </span>
        </h2>

        {/* Stats row */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-end">
          {/* Left stat */}
          <div className="text-center lg:text-center flex flex-col items-center justify-end">
            <p className="text-[42px] lg:text-[63px] font-[700] leading-none tracking-[-2px] text-[#1A1A1A] spacing">
              28X
            </p>
            <p className="mt-2 text-[11px] lg:text-[14px] leading-[1.4] text-[#4A4A4A] font-[500] max-w-[180px]">
              Higher response rate than email
              <br />& digital
            </p>
          </div>

          {/* Center visual - uses mail.png only */}
          <div className="flex flex-col items-center justify-end">
            <img
              src={mailImg}
              alt="90% Direct mail vs 20% Email - Your messages get read"
              className="w-[220px] sm:w-[240px] lg:w-[228px] xl:w-[220px] h-auto object-contain"
            />
            <p className="mt-3 text-[13px] font-[500] text-[#6B6B6B] tracking-[-0.01em]">
              Your messages get read
            </p>
          </div>

          {/* Right stat */}
          <div className="text-center flex flex-col items-center justify-end">
            <p className="text-[42px] lg:text-[63px] font-[800] leading-none tracking-[-2px] text-[#1A1A1A]">
              17 Days
            </p>
            <p className="mt-2 text-[11px] lg:text-[15px] leading-[1.4] text-[#4A4A4A] font-[500] max-w-[200px]">
              Lifespan of a postcard vs.
              <br />
              seconds for email or SMS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
