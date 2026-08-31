import { useState } from "react";
import logo from "../../assets/postpilot.png";
import Button from "./Button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-black/5 sticky top-0 z-50">
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="PostPilot"
            className="h-[30px] w-auto object-contain"
            style={{ width: "162px" }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8 flex-1 justify-center">
          <a
            href="#resources"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-[500] text-[#1A1A1A] hover:opacity-70 transition-opacity tracking-[-0.01em]"
          >
            Resources
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="mt-[1px]"
              aria-hidden="true"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#success-stories"
            className="text-[13.5px] font-[500] text-[#1A1A1A] hover:opacity-70 transition-opacity tracking-[-0.01em]"
          >
            Success stories
          </a>

          <a
            href="#company"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-[500] text-[#1A1A1A] hover:opacity-70 transition-opacity tracking-[-0.01em]"
          >
            Company
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="mt-[1px]"
              aria-hidden="true"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#pricing"
            className="text-[13.5px] font-[500] text-[#1A1A1A] hover:opacity-70 transition-opacity tracking-[-0.01em]"
          >
            Pricing
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button href="#login" variant="secondary" size="sm" className="px-[22px]">
            Login
          </Button>
          <Button href="#signup" variant="primary" size="sm">
            Create free account
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-black bg-white shadow-[2px_2px_0px_0px_#000]"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t-[1.5px] border-black bg-[#EFF5F3] px-4 py-5 space-y-4">
          <div className="flex flex-col gap-4">
            <a
              href="#resources"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-black"
            >
              Resources
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#success-stories" className="text-[15px] font-semibold text-black">
              Success stories
            </a>
            <a href="#company" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-black">
              Company
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#pricing" className="text-[15px] font-semibold text-black">
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-black/10">
            <Button href="#login" variant="secondary" size="md" fullWidth>
              Login
            </Button>
            <Button href="#signup" variant="primary" size="md" fullWidth>
              Create free account
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
