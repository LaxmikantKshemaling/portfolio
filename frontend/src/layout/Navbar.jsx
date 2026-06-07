import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-black tracking-tight text-white"
        >
          L<span className="text-primary"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <div className="glass rounded-full px-3 py-2 flex items-center gap-2 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                px-5 py-2
                text-sm
                rounded-full
                text-muted-foreground
                hover:text-white
                hover:bg-white/5
                transition-all
                duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button
              size="sm"
              className="
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              border-0
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Contact Me
            </Button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-t border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                text-lg
                text-muted-foreground
                hover:text-primary
                transition-all
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full">
                Contact Me
              </Button>
            </a>

          </div>
        </div>
      )}
    </header>
  );
};