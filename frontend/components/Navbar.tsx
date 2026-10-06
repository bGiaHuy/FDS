"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, LogOut, User } from "lucide-react";
import SearchModal from "./SearchModal";
import { getStoredUser, logout } from "../lib/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const updateUser = () => setUser(getStoredUser());
    updateUser(); window.addEventListener("fds-auth-change", updateUser);
    return () => window.removeEventListener("fds-auth-change", updateUser);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "humans",
        "achievements",
        "fields",
        "projects",
        "activities",
        "community",
        "about",
        "journey",
        "partners",
      ];

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Con người", href: "#humans", id: "humans" },
    { label: "Về FDS", href: "#about", id: "about" },
    { label: "Hoạt động", href: "#activities", id: "activities" },
    { label: "Sáng kiến", href: "#projects", id: "projects" },
    { label: "Cộng đồng", href: "#community", id: "community" },
    { label: "Đồng hành", href: "#partners", id: "partners" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fds-navbar transition-all duration-200 ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="fds-navbar-inner">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-2 flex-shrink-0" aria-label="FDS - Về đầu trang">
          <Image
            src="/fds/brand/fds-wordmark-authentic-navy-tight.png"
            alt="FDS - FPTU Data Science Club"
            width={124}
            height={46}
            priority
            draggable={false}
            className="w-[104px] sm:w-[114px] md:w-[124px] h-auto object-contain select-none fds-decorative"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7" aria-label="Điều hướng chính">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 whitespace-nowrap ${
                  isActive
                    ? "text-[#2457A6] font-semibold"
                    : "text-[#07152F] hover:text-[#2457A6]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2457A6] rounded-xs"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Search, Join CTA & Auth */}
        <div className="hidden lg:flex items-center gap-3">
          {!user && (
            <>
              <a
                href="#journey"
                className="hidden xl:inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#2457A6] text-sm font-medium px-4 py-2 rounded-[3px] hover:bg-[#E1E8F0] transition-all whitespace-nowrap"
              >
                Tham gia FDS
              </a>
              <div className="hidden xl:block w-[1px] h-5 bg-[#E1E8F0] mx-1"></div>
            </>
          )}

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="p-2 text-[#07152F] hover:text-[#2457A6] hover:bg-[#E1E8F0]/40 rounded-[3px] transition cursor-pointer"
            aria-label="Tìm kiếm nội dung"
          >
            <Search size={18} aria-hidden="true" />
          </button>

          {user ? (
            <div className="flex items-center gap-3 ml-1">
              <details className="relative"><summary className="flex cursor-pointer items-center gap-2 px-3 py-1.5 bg-[#EFF6FF] rounded-[3px] border border-[#E1E8F0]" aria-label="Tài khoản">
                <div className="w-6 h-6 bg-[#2457A6] text-white rounded-full flex items-center justify-center font-bold text-xs">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-[#07152F]">{user.name}</span><span aria-hidden="true">⌄</span>
              </summary><div className="absolute right-0 top-full mt-2 w-52 border border-[#E1E8F0] bg-white p-3 shadow-sm"><Link href="/account/profile" className="block py-2 text-sm">Chỉnh sửa hồ sơ</Link>{user.role === "ADMIN" && <Link href="/account/members" className="block py-2 text-sm">Gắn tài khoản thành viên</Link>}</div></details>
              <button
                onClick={handleLogout}
                className="p-2 text-[#64748B] hover:text-[#EF4444] hover:bg-red-50 rounded-[3px] transition"
                title="Đăng xuất"
              >
                <LogOut size={18} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/auth"
                className="inline-flex items-center text-sm font-medium text-[#07152F] hover:text-[#2457A6] px-2 py-2 transition whitespace-nowrap"
              >
                Sign in
              </Link>
              <Link
                href="/auth?mode=register"
                className="inline-flex items-center bg-[#07152F] text-white text-sm font-medium px-4 py-2 rounded-[3px] hover:bg-[#1E293B] active:bg-[#07152F] transition-all shadow-xs whitespace-nowrap"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger & Search Button */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="p-1.5 text-[#07152F] hover:text-[#2457A6] rounded-[3px] transition"
            aria-label="Tìm kiếm nội dung"
          >
            <Search size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-[#07152F] hover:text-[#2457A6] focus:outline-hidden focus:ring-2 focus:ring-[#2457A6] rounded-[3px] transition"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-[#E1E8F0] bg-[#F5F7FB] px-6 py-5 shadow-lg transition-all"
        >
          <nav className="flex flex-col gap-3" aria-label="Điều hướng trên điện thoại">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`py-2 px-3 text-base font-medium rounded-[3px] transition ${
                    isActive
                      ? "text-[#2457A6] bg-[#EFF6FF] font-semibold"
                      : "text-[#07152F] hover:bg-[#E1E8F0]/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#E1E8F0] mt-2 flex flex-col gap-2">
              {!user && (
                <a
                  href="#journey"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#EFF6FF] text-[#2457A6] text-sm font-medium py-2.5 rounded-[3px] hover:bg-[#E1E8F0] transition"
                >
                  Tham gia FDS
                </a>
              )}
              
              <div className="mt-1">
                {user ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 p-3 bg-white border border-[#E1E8F0] rounded-[3px]">
                      <div className="w-8 h-8 bg-[#2457A6] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#07152F]">{user.name}</span>
                        <span className="text-xs text-[#64748B]">{user.role}</span>
                      </div>
                    </div>
                    <Link href="/account/profile" onClick={handleLinkClick} className="p-3 text-sm text-[#2457A6]">Chỉnh sửa hồ sơ</Link>
                    {user.role === "ADMIN" && <Link href="/account/members" onClick={handleLinkClick} className="p-3 text-sm text-[#2457A6]">Gắn tài khoản thành viên</Link>}
                    <button
                      onClick={() => { handleLogout(); handleLinkClick(); }}
                      className="w-full inline-flex items-center justify-center gap-2 text-[#EF4444] border border-[#EF4444]/30 bg-red-50 text-sm font-medium py-2.5 rounded-[3px] hover:bg-red-100 transition"
                    >
                      <LogOut size={16} />
                      Đăng xuất
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/auth"
                      onClick={handleLinkClick}
                      className="w-full inline-flex items-center justify-center text-[#07152F] border border-[#E1E8F0] text-sm font-medium py-2.5 rounded-[3px] hover:bg-[#F5F7FB] transition"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth?mode=register"
                      onClick={handleLinkClick}
                      className="w-full inline-flex items-center justify-center bg-[#07152F] text-white text-sm font-medium py-2.5 rounded-[3px] hover:bg-[#1E293B] transition"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
