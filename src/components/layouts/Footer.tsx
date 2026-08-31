import ecoImg from "../../assets/eco.png";
import logo from "../../assets/postpilot.png";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ECO */}
          <div className="lg:col-span-3">
            <img src={ecoImg} alt="ECO Friendly" className="w-[84px] h-[84px] object-contain" />
            <p className="mt-4 text-[11px] leading-[1.6] text-[#5A5A5A] font-[500] max-w-[260px]">
              Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
            </p>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-6">
            <p className="text-[10px] font-[700] tracking-[0.14em] text-black uppercase">COMPANY</p>
            <div className="mt-4 grid grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">About us</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Partner program</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Career</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Contact us</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Privacy Policy</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Pricing</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Reviews</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Direct Mail Academy</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Success stories</a></li>
                <li><a href="#" className="text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">Terms & conditions</a></li>
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-[700] tracking-[0.14em] text-black uppercase">CONTACT</p>
            <a href="mailto:support@postpilot.com" className="mt-4 inline-flex items-center gap-2 text-[13px] font-[500] text-[#1A1A1A] hover:opacity-70">
              <span className="w-5 h-5 border border-black rounded-[3px] flex items-center justify-center text-[10px] leading-none">✉</span>
              support@postpilot.com
            </a>
            <p className="mt-4 text-[11px] leading-[1.6] text-[#5A5A5A] font-[500] max-w-[260px]">
              Printed with <span className="text-[#FF6B1A]">♥</span> at our facility in South Carolina.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <img src={logo} alt="PostPilot" className="h-[22px] w-auto object-contain" />
            <p className="mt-1 text-[10px] font-[500] text-[#6B6B6B]">© 2022 PostPilot, Inc. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button href="#login" variant="secondary" size="sm" className="px-[18px] h-[36px] rounded-[8px] text-[12px]">
              Login
            </Button>
            <Button href="#signup" variant="primary" size="sm" className="px-[18px] h-[36px] rounded-[8px] text-[12px]">
              Try it for free
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
