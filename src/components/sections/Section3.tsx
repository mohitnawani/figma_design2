import Button from "../layouts/Button";
import bear from "../../assets/bear.png"
const Section3 = () => {
  return (
    <section className="bg-[#FFF7F0] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <h2 className="text-center max-w-[900px] mx-auto">
          <span
            className="block text-[#1A1A1A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "70px",
              lineHeight: "1.15",
              letterSpacing: "-2px",
            }}
          >
            PostPilot makes it a{" "}
            <span
              style={{
                fontFamily: '"Covered By Your Grace", cursive',
                fontWeight: 400,
                fontSize: "90px",
                color: "#009387",
                letterSpacing: "-2px",
              }}
            >
              cinch
            </span>{" "}
            to
          </span>
          <span
            className="block text-[#1A1A1A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "70px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            send personalized, profit-
            <br />
            generating postcards.
          </span>
        </h2>

        <div className="mt-14 lg:mt-16 space-y-14 lg:space-y-16">
          {/* Block 1 - Left */}
          <div className="max-w-[800px]">
            <h3 className="leading-none">
              <span
                className="block"
                style={{
                  fontFamily: '"Covered By Your Grace", cursive',
                  fontWeight: 400,
                  fontSize: "80px",
                  lineHeight: "70px",
                  color: "#009387",
                  letterSpacing: "-4px"
                }}
              >
                Powerful
              </span>
              <span className="block text-[#1A1A1A] font-[700] text-[80px] leading-[1.1] tracking-[-4px] -mt-1">
                acquisition
                <br />& retention
              </span>
            </h3>
            <p className="mt-3 text-[20px] leading-[1.5] text-[#4A4A4A] font-[500] max-w-[485.34px]">
              Send one-off or triggered campaigns to customers
            </p>

            <p className="mt-3 text-[20px] leading-[1.5] text-[#4A4A4A] font-[500] max-w-[485.34px]">
              & prospects. Target email leads with MailMatch™.
            </p>

          <div className="mt-5 border border-black/10 rounded-[15px] p-8 shadow-sm max-w-[360px] relative">
            {/* Quote icon */}
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              className="absolute -top-3 left-6"
            >
              <path
                d="M0 22V13.2C0 8.8 1.1 5.7 3.3 3.4C5.5 1.1 8.4 0 12 0V4.4C10.1 4.4 8.6 5 7.5 6.2C6.4 7.4 5.9 9 6 11H12V22H0ZM16 22V13.2C16 8.8 17.1 5.7 19.3 3.4C21.5 1.1 24.4 0 28 0V4.4C26.1 4.4 24.6 5 23.5 6.2C22.4 7.4 21.9 9 22 11H28V22H16Z"
                fill="#FF6B1A"
              />
            </svg>

            <p className="text-[16px] leading-[28px] italic text-[#2B2B2B] font-medium pt-3">
              It&apos;s like Klaviyo for direct mail. The results are absolutely insane.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.06em] font-semibold text-[#9A9A9A] uppercase">
                Ash Melwani, CMO
              </span>
              <span
                className="text-[16px] font-extrabold text-black"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                obvi.
              </span>
            </div>
            </div>
          </div>

          {/* Block 2 - Right */}
          <div className="max-w-[700px] lg:ml-auto">
            <h3 className="leading-none">
              <span
                className="block"
                style={{
                  fontFamily: '"Covered By Your Grace", cursive',
                  fontWeight: 400,
                  fontSize: "80px",
                  lineHeight: "70px",
                  color: "#009387",
                  letterSpacing: "-4px"
                }}
              >
                Fight back
              </span>
              <span className="block text-[#1A1A1A] font-[700] text-[80px] leading-[1.1] tracking-[-4px] -mt-1">
                against iOS updates,
                <br />
                jacked-up
              </span>
              <span className="block text-[#1A1A1A] font-[800] text-[60px] leading-[1.1] tracking-[-0.02em]">
                CPCs & spam folders
              </span>
            </h3>
            <p className="mt-3 text-[20px] leading-[1.5] text-[#4A4A4A] font-[500] max-w-[485.34px]">
              Deliver your message to all of your customers — for less than the cost of a click.
            </p>

          <div className="mt-5 border border-black/10 rounded-[15px] p-8 shadow-sm max-w-[500px] relative ">
            {/* Quote icon */}
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              className="absolute -top-3 left-6"
            >
              <path
                d="M0 22V13.2C0 8.8 1.1 5.7 3.3 3.4C5.5 1.1 8.4 0 12 0V4.4C10.1 4.4 8.6 5 7.5 6.2C6.4 7.4 5.9 9 6 11H12V22H0ZM16 22V13.2C16 8.8 17.1 5.7 19.3 3.4C21.5 1.1 24.4 0 28 0V4.4C26.1 4.4 24.6 5 23.5 6.2C22.4 7.4 21.9 9 22 11H28V22H16Z"
                fill="#FF6B1A"
              />
            </svg>

            <p className="text-[16px] leading-[28px] italic text-[#2B2B2B] font-medium pt-3">
             PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.06em] font-semibold text-[#9A9A9A] uppercase">
                Leah Keith, GM
              </span>

              <img src={bear} alt="bear" className=" w-[32px] h-[24px]"></img>
            </div>
            </div>
          </div>

          {/* Block 3 - Left - spec: W293 H70 / Inter 700 58/70 -2px + Covered By Your Grace 400 58/70 -2px */}
          <div className="max-w-[420px]">
            <h3
              className="flex items-baseline gap-2"
              style={{ width: "400px", height: "70px", alignItems: "center" }}
            >
              <span className="block text-[#1A1A1A] font-[700] text-[80px] leading-[1.1] tracking-[-4px] -mt-1"> 
                Done for
              </span>
              <span
                style={{
                  fontFamily: '"Covered By Your Grace", cursive',
                  fontWeight: 400,
                  fontSize: "80px",
                  lineHeight: "70px",
                  color: "#009387",
                  letterSpacing: "-4px"
                }}
              >
                you
              </span>
            </h3>
            <p className="mt-3 text-[20px] leading-[1.5] text-[#4A4A4A] font-[500] max-w-[485.34px]">
              From design & strategy to stamp-licking, our ecom experts help you every step of the way.
            </p>

          <div className="mt-5 border border-black/10 rounded-[15px] p-8 shadow-sm max-w-[500px] relative">
            {/* Quote icon */}
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              className="absolute -top-3 left-6"
            >
              <path
                d="M0 22V13.2C0 8.8 1.1 5.7 3.3 3.4C5.5 1.1 8.4 0 12 0V4.4C10.1 4.4 8.6 5 7.5 6.2C6.4 7.4 5.9 9 6 11H12V22H0ZM16 22V13.2C16 8.8 17.1 5.7 19.3 3.4C21.5 1.1 24.4 0 28 0V4.4C26.1 4.4 24.6 5 23.5 6.2C22.4 7.4 21.9 9 22 11H28V22H16Z"
                fill="#FF6B1A"
              />
            </svg>

            <p className="text-[16px] leading-[28px] italic text-[#2B2B2B] font-medium pt-3">
              The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.06em] font-semibold text-[#9A9A9A] uppercase">
                Holly Davies, Marketing Director
              </span>
              <span
                className="text-[16px] font-extrabold text-black"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                PARAGON
              </span>
            </div>
            </div>

            <div className="mt-6">
              <Button
                href="#try"
                variant="primary"
                size="sm"
                className="uppercase tracking-[0.05em] text-[11px] font-[800] px-[22px] h-[40px] rounded-[8px]"
              >
                TRY IT RISK-FREE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
