import ReviewComments from "../components/home/ReviewComments";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HomepageEditorial from "../components/home/HomepageEditorial";
import LandingMotion from "../components/home/LandingMotion";
import "./editorial.css";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen fds-page flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />
      <ReviewComments />
      <LandingMotion />


      {/* 00 — Hero (#home) */}
      <a className="ed-skip" href="#main-content">Đến nội dung chính</a>
      <main id="main-content" className="flex-1">
        {/* 00 — Hero Section (#home) */}
        <section
          id="home"
          className="fds-section fds-section--paper fds-hero border-b border-[#E1E8F0]/60"
        >
          {/* Left Reference Flow: clean minimalist flow rail from approved design */}
          <Image
            src="/fds/decorations/hero-left-reference-flow.svg"
            alt=""
            width={280}
            height={642}
            priority
            className="hero-left-reference-flow"
            draggable={false}
            aria-hidden="true"
          />

          {/* Right Reference Route: authentic traced route & hexagon from approved design */}
          <Image
            src="/fds/decorations/hero-right-reference-route.svg"
            alt=""
            width={223}
            height={416}
            priority
            className="hero-right-reference-route"
            draggable={false}
            aria-hidden="true"
          />

          {/* Technical label (z-4): FPTU / DATA SCIENCE / CLUB */}
          <div
            data-hero-fptu-label
            className="hero-fptu-label text-[10px] font-mono font-medium text-[#64748B] leading-tight tracking-[0.08em] uppercase select-none pointer-events-none"
            aria-hidden="true"
          >
            <span className="block">FPTU</span>
            <span className="block">Data Science</span>
            <span className="block">Club</span>
          </div>

          {/* Technical label (z-4): PEOPLE / DATA / IDEAS / IMPACT */}
          <div
            data-hero-impact-label
            className="hero-impact-label flex-col items-start gap-1.5 pointer-events-none select-none text-[9.5px] font-mono tracking-[0.20em] text-[#64748B] uppercase"
            aria-hidden="true"
          >
            <span>PEOPLE</span>
            <span>DATA</span>
            <span>IDEAS</span>
            <span>IMPACT</span>
          </div>

          {/* Left Column: Text Content */}
          <div
            data-hero-copy
            className="hero-copy flex flex-col items-start"
          >
            {/* Main Heading: Insights in our eyes per TYPOGRAPHY.md */}
            <h1 className="hero-title fds-hero-title mb-2.5">
              <span>Insights</span>
              <em>in our eyes</em>
            </h1>

            {/* Club Full Name */}
            <p className="hero-subclub text-xl sm:text-2xl font-display font-semibold text-[#07152F] mb-2 tracking-[-0.018em]">
              FPTU Data Science Club
            </p>

            {/* Description from CONTENT_BRIEF.md */}
            <p className="hero-desc fds-body mb-5 text-[15px] leading-[1.65] text-[#415777] lg:text-[16px]">
              Câu lạc bộ Khoa học Dữ liệu tại Đại học FPT Hà Nội.
              Chúng mình học AI, làm việc với dữ liệu và cùng nhau đi thi.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-[#07152F] text-white text-sm font-medium px-6 py-2.5 rounded-[3px] hover:bg-[#1E293B] active:bg-[#07152F] transition shadow-xs cursor-pointer"
              >
                Tìm hiểu FDS
                <Image
                  src="/fds/icons/arrow-right.svg"
                  alt=""
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="brightness-0 invert fds-decorative"
                  draggable={false}
                />
              </a>
              <a
                href="#about"
                className="fds-text-link inline-flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              >
                Về chúng tôi →
              </a>
            </div>
            <div className="ed-hero-proof">Competition · Career · Knowledge · Project</div>
          </div>

          {/* Right Column: Visual illustration + handwritten note */}
          <div
            data-hero-visual
            className="hero-visual"
          >
            <Image
              data-hero-hand
              src="/fds/hero/hand-network.png"
              alt=""
              width={1247}
              height={1261}
              priority
              draggable={false}
              aria-hidden="true"
              className="hero-hand fds-decorative select-none object-contain"
            />

            {/* Handwritten Note SVG */}
            <div
              data-hero-note
              className="hero-note pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/fds/lettering/hero-note.svg"
                alt=""
                width={170}
                height={80}
                className="w-full h-auto fds-decorative select-none"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <HomepageEditorial />
      </main>

      {/* 08 — Footer (#footer) */}
      <footer
        id="footer"
        className="fds-footer relative pt-5 pb-3.5 sm:pt-6 sm:pb-4 px-4 sm:px-6 overflow-hidden"
      >
        {/* Large subtle background watermark per Round 4 spec (opacity: 0.035, size 420px) */}
        <div
          className="absolute -bottom-10 -right-10 pointer-events-none opacity-[0.035] select-none z-0"
          aria-hidden="true"
        >
          <Image
            src="/fds/lettering/footer-note-white.svg"
            alt=""
            width={420}
            height={330}
            className="w-[380px] sm:w-[440px] h-auto fds-decorative"
            draggable={false}
          />
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pb-4 border-b border-[#2457A6]/25">
            {/* Column 1: Logo & Official Identity */}
            <div className="md:col-span-4">
              <div className="mb-2">
                <Image
                  src="/fds/brand/fds-wordmark-authentic-white.png"
                  alt="FDS - FPTU Data Science Club"
                  width={156}
                  height={85}
                  className="w-[156px] h-auto object-contain fds-decorative select-none"
                  draggable={false}
                />
              </div>
              <p className="fds-footer-copy max-w-sm mb-1">
                Câu lạc bộ Khoa học Dữ liệu đầu tiên tại Trường Đại học FPT cơ sở
                Hà Nội.
              </p>
              <p className="fds-footer-copy max-w-sm">
                Định hướng Data Science, Big Data và Artificial Intelligence.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3">
              <h4 className="fds-footer-heading mb-1.5">
                Liên kết nhanh
              </h4>
              <ul className="space-y-1 fds-footer-copy">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    Về FDS
                  </a>
                </li>
                <li>
                  <a href="#fields" className="hover:text-white transition">
                    Lĩnh vực hoạt động
                  </a>
                </li>
                <li>
                  <a href="#activities" className="hover:text-white transition">
                    Hoạt động nổi bật
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Các chương trình của CLB
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="hover:text-white transition">
                    Thành tích của thành viên
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-white transition">
                    Các ban của FDS
                  </a>
                </li>
                <li><a href="#partners" className="hover:text-white transition">Đơn vị đồng hành</a></li>
                <li>
                  <a href="#journey" className="hover:text-white transition">
                    Tham gia FDS
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Verified Channels from CONTENT_BRIEF.md */}
            <div className="md:col-span-3">
              <h4 className="fds-footer-heading mb-1.5">
                Kênh thông tin chính thức
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <a
                  href="https://www.facebook.com/dsclub.fu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-[3px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
                  aria-label="Facebook FPTU Data Science Club"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="https://www.instagram.com/dsclub.fptu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-[3px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
                  aria-label="Instagram FDS"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://www.tiktok.com/@fptudatascienceclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-[3px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition text-xs font-bold cursor-pointer"
                  aria-label="TikTok FDS"
                >
                  TT
                </a>
                <a
                  href="https://www.kaggle.com/competitions/fds-summer-challenge-2025-weather-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-[3px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition text-xs font-bold cursor-pointer"
                  aria-label="Kaggle FDS"
                >
                  KG
                </a>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-0.5 fds-footer-copy">
                <p className="flex items-center gap-1.5">
                  <Mail size={12} className="text-[#60A5FA]" />
                  <a
                    href="mailto:dsclub.fu@gmail.com"
                    className="hover:text-white transition"
                  >
                    dsclub.fu@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone size={12} className="text-[#60A5FA]" />
                  <a href="tel:+84782111003" className="hover:text-white transition">
                    0782 111 003
                  </a>
                </p>
              </div>
            </div>

            {/* Far Right: Handwritten Footer Note SVG (opacity: 0.85 per Round 4 spec) */}
            <div className="md:col-span-2 flex items-start justify-start md:justify-end">
              <div
                className="pointer-events-none rotate-[5deg] opacity-[0.85]"
                aria-hidden="true"
              >
                <Image
                  src="/fds/lettering/footer-note-white.svg"
                  alt=""
                  width={140}
                  height={110}
                  className="w-24 sm:w-28 h-auto fds-decorative select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Mission */}
          <div className="pt-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-[#64748B]">
            <p>© 2026 FPTU Data Science Club. All rights reserved.</p>
            <p className="font-display italic text-[#94A3B8]">
              Website của FPTU Data Science Club.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
