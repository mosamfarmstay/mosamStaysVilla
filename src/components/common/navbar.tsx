// "use client";

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// const Navbar: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [fade, setFade] = useState(false);

//   const smoothScrollTo = (href: string) => {
//     if (href === "#" || href === "/") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const targetId = href.replace("#", "");
//       const elem = document.getElementById(targetId);
//       if (elem) {
//         elem.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   // Handler: Mobile (Waits for fade animation)
//   const handleMobileClick = (e: React.MouseEvent, href: string) => {
//     e.preventDefault();
//     setFade(true); // Start fade out

//     setTimeout(() => {
//       setOpen(false); // Close menu
//       setFade(false); // Reset fade state
//       smoothScrollTo(href); // Scroll
//     }, 350);
//   };

//   // Handler: Desktop (Scrolls immediately)
//   const handleDesktopClick = (e: React.MouseEvent, href: string) => {
//     e.preventDefault();
//     smoothScrollTo(href);
//   };

//   return (
//     <nav className="bg-[#fffdec] p-6 relative z-50">
//       <div className="flex items-center justify-between">
//         <Link
//           href="#"
//           onClick={(e) => handleDesktopClick(e, "#")}
//           className="text-[#8B542C] text-xl font-bold"
//         >
//           moSam
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex text-[#8B542C] gap-8 text-lg">
//           <Link
//             href="#"
//             onClick={(e) => handleDesktopClick(e, "#")}
//             className="hover:opacity-80 transition-opacity"
//           >
//             Home
//           </Link>
//           <Link
//             href="#features"
//             onClick={(e) => handleDesktopClick(e, "#features")}
//             className="hover:opacity-80 transition-opacity"
//           >
//             Features
//           </Link>
//           <Link
//             href="#faq"
//             onClick={(e) => handleDesktopClick(e, "#faq")}
//             className="hover:opacity-80 transition-opacity"
//           >
//             FAQs
//           </Link>
//           <Link
//             href="#contact-us"
//             onClick={(e) => handleDesktopClick(e, "#contact-us")}
//             className="hover:opacity-80 transition-opacity"
//           >
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-[#8B542C]"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`
//           fixed top-15 right-5
//           bg-[#fffdec] shadow-2xl rounded-xl border border-[#e6e2d8]
//           p-6 w-56 max-w-[85%]
//           transform transition-all duration-300
//           ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
//           ${fade ? "opacity-0 transition-opacity duration-300" : ""}
//           md:hidden
//         `}
//       >
//         <div className="flex flex-col text-[#8B542C] gap-5 text-lg">
//           <button
//             onClick={(e) => handleMobileClick(e, "#")}
//             className="text-left"
//           >
//             Home
//           </button>
//           <button
//             onClick={(e) => handleMobileClick(e, "#features")}
//             className="text-left"
//           >
//             Features
//           </button>
//           <button
//             onClick={(e) => handleMobileClick(e, "#faq")}
//             className="text-left"
//           >
//             FAQs
//           </button>
//           <button
//             onClick={(e) => handleMobileClick(e, "#contact-us")}
//             className="text-left"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (href: string) => {
    if (href === "#" || href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        // Offset for fixed header (approx 80px)
        const headerOffset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Handler: Mobile (Waits for fade animation)
  const handleMobileClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => {
      setOpen(false);
      setFade(false);
      smoothScrollTo(href);
    }, 350);
  };

  // Handler: Desktop
  const handleDesktopClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-[#fffdec]/85 backdrop-blur-md shadow-sm py-4"
            : "bg-[#fffdec] py-6"
        }
        px-6
      `}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          href="#"
          onClick={(e) => handleDesktopClick(e, "#")}
          className="text-[#8B542C] text-xl font-bold"
        >
          moSam
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-[#8B542C] gap-8 text-lg">
          {["Home", "Features", "FAQ", "Contact Us"].map((item) => {
            const href =
              item === "Home"
                ? "#"
                : `#${item.toLowerCase().replace(" ", "-")}`;
            return (
              <Link
                key={item}
                href={href}
                onClick={(e) => handleDesktopClick(e, href)}
                className="hover:opacity-80 transition-opacity"
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#8B542C]"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed top-20 right-5
          bg-[#fffdec] shadow-2xl rounded-xl border border-[#e6e2d8]
          p-6 w-56 max-w-[85%]
          transform transition-all duration-300
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          ${fade ? "opacity-0 transition-opacity duration-300" : ""}
          md:hidden
        `}
      >
        <div className="flex flex-col text-[#8B542C] gap-5 text-lg">
          <button
            onClick={(e) => handleMobileClick(e, "#")}
            className="text-left"
          >
            Home
          </button>
          <button
            onClick={(e) => handleMobileClick(e, "#features")}
            className="text-left"
          >
            Features
          </button>
          <button
            onClick={(e) => handleMobileClick(e, "#faq")}
            className="text-left"
          >
            FAQs
          </button>
          <button
            onClick={(e) => handleMobileClick(e, "#contact-us")}
            className="text-left"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
