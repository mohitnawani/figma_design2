import { useState, useEffect } from "react";
import logo from "../../assets/postpilot.png";
import Button from "./Button";

const navLinks = [
  { label: "Resources", id: "resources", hasDropdown: true },
  { label: "Success stories", id: "success-stories", hasDropdown: false },
  { label: "Company", id: "company", hasDropdown: true },
  { label: "Pricing", id: "pricing", hasDropdown: false },
] as const;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Scroll-spy: highlight nav link whose section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveId("");
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", "/");
  };

  const linkBase =
    "relative inline-flex items-center gap-1.5 text-[13.5px] font-[500] tracking-[-0.01em] cursor-pointer transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#009387] after:transition-all after:duration-200";

  const getLinkClasses = (_id: string, isActive: boolean) =>
    `${linkBase} ${isActive ? "text-[#009387] after:w-full" : "text-[#1A1A1A] after:w-0 hover:text-[#009387] hover:after:w-full"}`;

  return (
    <header className="w-full bg-white border-b border-black/5 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
        {/* Logo with hover lift */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center shrink-0 group cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <img
            src={logo}
            alt="PostPilot"
            className="h-[30px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
            style={{ width: "162px" }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={getLinkClasses(link.id, isActive)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`mt-[1px] transition-transform duration-200 ${isActive ? "rotate-180" : "group-hover:rotate-180"} ${isActive ? "text-[#009387]" : ""}`}
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
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button
            href="#login"
            variant="secondary"
            size="sm"
            className="px-[22px] hover:bg-black hover:text-white"
            onClick={(e: any) => {
              // allow anchor fallback if #login not found -> scroll to pricing instead
              const el = document.getElementById("login");
              if (!el) {
                e.preventDefault();
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Login
          </Button>
          <Button href="#pricing" variant="primary" size="sm" onClick={(e) => handleNavClick(e as any, "pricing")}>
            Create free account
          </Button>
        </div>

        {/* Mobile Toggle - hover + active effects */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-black bg-white shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all duration-200 hover:bg-black hover:text-white hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-[1px] active:translate-y-[1px] active:shadow-none"
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

      {/* Mobile Menu - animated */}
      {mobileOpen && (
        <div className="lg:hidden border-t-[1.5px] border-black bg-[#EFF5F3] px-4 py-5 space-y-4 animate-[slideDown_0.2s_ease-out]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`inline-flex items-center gap-1.5 text-[15px] font-semibold cursor-pointer px-3 py-2.5 rounded-[10px] transition-all duration-200 ${isActive ? "bg-black text-white" : "text-black hover:bg-black hover:text-white hover:translate-x-1"}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={isActive ? "text-white" : ""}>
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-black/10">
            <Button
              href="#login"
              variant="secondary"
              size="md"
              fullWidth
              onClick={(e: any) => {
                setMobileOpen(false);
                const el = document.getElementById("login");
                if (!el) {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Login
            </Button>
            <Button href="#pricing" variant="primary" size="md" fullWidth onClick={(e) => handleNavClick(e as any, "pricing")}>
              Create free account
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
