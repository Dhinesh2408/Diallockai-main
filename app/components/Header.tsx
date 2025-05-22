"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [hoverOpen, setHoverOpen] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "AI Workflow", href: "#ai-workflow" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "/blog" },
    { label: "Explore More", href: "/services" },
  ];

  const servicesList = [
    "B2B Sales",
    "Sales Kickoff",
    "Lead Generation",
    "Client Outreach",
    "Sales Automation",
    "Personalized Sales",
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setClickOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isDropdownOpen = hoverOpen || clickOpen;

  // Handler to open Cal.com in new tab and close mobile menu if open
  const handleBookDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.open("https://cal.com/dhinesh-valentine-flbxpp/test", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Top Announcement Banner */}
      <div
        className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white text-center py-2 shadow-md"
        role="status"
        aria-label="Live Announcement Banner"
      >
        <div
          className="flex animate-marquee whitespace-nowrap text-sm font-semibold tracking-wide font-sans"
        >
          {["MVP  is  Live  Now", "MVP  is  Live  Now", "MVP  is  Live  Now"].map(
            (text, i) => (
              <span key={i} className="mx-24">{text}</span>
            )
          )}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-8 inset-x-0 z-40 bg-gray-50 text-black border-b border-gray-200 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-bold space-x-2 select-none cursor-pointer mr-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6-6V9a6 6 0 1112 0v2m-6 0h.01"
              />
            </svg>
            <span>DIALLOCK AI</span>
          </Link>

          {/* Navigation center */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10 font-medium relative">
              {navItems.map(({ label, href }) =>
                label === "Explore More" ? (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-blue-500 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ) : label === "Services" ? (
                  <li
                    key={label}
                    className="relative"
                    onDoubleClick={() => setHoverOpen(true)}
                    onClick={() => setHoverOpen(false)}
                  >
                    <div
                      ref={dropdownRef}
                      className="flex items-center space-x-1 cursor-pointer select-none hover:text-blue-500 transition"
                    >
                      <a href={href}>Services</a>
                      <ChevronDown
                        size={16}
                        onClick={() => setClickOpen((prev) => !prev)}
                        className="mt-1"
                      />
                    </div>
                    {isDropdownOpen && (
                      <div className="absolute top-8 left-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-2 z-50 border border-gray-200">
                        {servicesList.map((service, i) => (
                          <span
                            key={i}
                            className="text-sm text-gray-800 hover:text-blue-600 cursor-pointer transition px-2 py-1 rounded-md"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-blue-500 transition"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {/* Modified Book Demo to open external link */}
            <a
              href="https://cal.com/dhinesh-valentine-flbxpp/test"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 transition cursor-pointer"
              onClick={handleBookDemoClick}
            >
              Book Demo
            </a>

            <a
              href="#login"
              className="flex items-center space-x-1 text-blue-600 font-semibold hover:underline hover:text-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H3m6 6l-6-6 6-6m9 13v1a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h6a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-blue-600 focus:outline-none ml-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-2 bg-white rounded-b-xl px-6 pb-4 shadow-md">
            <ul className="flex flex-col items-start gap-4 font-medium text-gray-900">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                {/* Modified Book Demo for mobile menu */}
                <a
                  href="https://cal.com/dhinesh-valentine-flbxpp/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    window.open("https://cal.com/dhinesh-valentine-flbxpp/test", "_blank", "noopener,noreferrer");
                  }}
                >
                  Book Demo
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="text-blue-600 hover:underline hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
