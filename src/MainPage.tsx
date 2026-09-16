import { useEffect, useRef, useState } from "react";
import logoImg from "@/imports/Splash/85ca41263952ee362d6954d6c3b88b7120f2b048.png";
import daeguSlide from "@/imports/Splash/대구 재건축 2-1-1-1.png";
import chuncheonSlide from "@/imports/춘천 재건축 1-1-1.png";
import wonjuSlide from "@/imports/원주 재건축 10-1-1.png";
import daeguDonginProjectImg from "@/imports/대구 재개발 3-1-1-1.png";
import jamsilProjectImg from "@/imports/잠실 상가통합 8-1.png";
import useScrolled from "./useScrolled";

const HERO_SLIDES = [
  { src: chuncheonSlide, alt: "춘천 재건축 아파트 조감도" },
  { src: wonjuSlide, alt: "원주 재건축 아파트 조감도" },
  { src: daeguSlide, alt: "대구 재건축 아파트 조감도" },
];

function useScrollReveal() {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}

interface Props {
  onNavigate: (page: string, project?: undefined, tab?: string) => void;
}

export default function MainPage({ onNavigate }: Props) {
  const isScrolled = useScrolled();
  const [activeSlide, setActiveSlide] = useState(0);
  const aboutReveal = useScrollReveal();
  const projectsReveal = useScrollReveal();
  const isScrollSnapping = useRef(false);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => window.clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    let unlockTimer: number | undefined;

    const handleWheel = (event: WheelEvent) => {
      const hero = document.getElementById("hero");
      const about = document.getElementById("about");
      if (!hero || !about || event.deltaY <= 0 || isScrollSnapping.current) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < window.innerHeight * 0.75) return;

      event.preventDefault();
      isScrollSnapping.current = true;
      about.scrollIntoView({ behavior: "smooth", block: "start" });
      unlockTimer = window.setTimeout(() => {
        isScrollSnapping.current = false;
      }, 1200);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (unlockTimer) window.clearTimeout(unlockTimer);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full min-h-screen overflow-y-auto"
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-[background-color,box-shadow] duration-500 ease-out ${isScrolled ? "bg-white shadow-[0_4px_14px_rgba(0,0,0,0.10)]" : "bg-transparent shadow-none"}`}
      >
        <button onClick={() => scrollTo("hero")} className="flex-shrink-0">
          <img
            src={logoImg}
            alt="YEJIN C&D"
            className="h-11 w-[110px] object-contain"
          />
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-14">
          {[
            { label: "About us", target: "about" },
            { label: "Projects", target: "projects" },
            { label: "Contact", target: "contact" },
          ].map(({ label, target }) => (
            <button
              key={target}
              onClick={() => {
                if (target === "about") onNavigate("about");
                else if (target === "projects") onNavigate("projects");
                else scrollTo(target);
              }}
              className={`text-[19.33px] font-medium tracking-wide transition-[color,opacity] duration-500 hover:opacity-70 ${isScrolled ? "text-black" : "text-white"}`}
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative w-full h-screen min-h-[560px] flex items-end"
        style={{ backgroundColor: "#1a2a3a" }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gray-700/30" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Hero copy */}
        <div className="relative z-10 flex max-w-3xl flex-col items-start px-12 pb-20 text-left">
          <p
            className="m-0 mb-3 w-full text-[22px] font-light text-white/80"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            신뢰를 바탕으로
          </p>
          <h1
            className="m-0 w-full text-4xl font-bold leading-tight text-white md:text-5xl"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            도시의 미래를 함께 만들어갑니다.
          </h1>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section
        ref={aboutReveal.elementRef}
        id="about"
        className={"mx-auto w-full max-w-6xl bg-white px-6 pb-24 pt-32 transition-all duration-[2000ms] ease-out md:px-8 " + (aboutReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}
      >
        <div className="mb-16 flex items-start justify-between">
          <h2
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            About Us
          </h2>
          <button className="group mt-2 flex cursor-pointer items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900">
            <span>View more</span>
            <span className="w-8 h-px bg-gray-400 group-hover:bg-gray-900 transition-colors" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-xs transition-all duration-300 ease-out group-hover:scale-125 group-hover:border-black group-hover:bg-black group-hover:text-white">
              →
            </span>
          </button>
        </div>

        <div className="mx-auto w-fit max-w-full space-y-6 text-left text-[15px] leading-relaxed text-gray-700">
          <p className="break-keep text-left text-[14pt]" style={{ fontFamily: "Pretendard, sans-serif" }}>
            ㈜예진씨앤디는 전문성과 신뢰를 바탕으로 정비사업의 새로운 가치를 만들어가는 정비사업 전문관리 기업입니다.
            <br />
            변화하는 부동산 시장에 발맞춰 체계적인 사업 관리와 신속한 대응을 제공하며,
            <br />
            풍부한 경험과 노하우를 통해 고객과 조합원의 자산가치를 높이는 성공적인 정비사업을 실현하고 있습니다.
          </p>
          <p
            className="break-keep text-left text-[17pt] font-bold text-gray-900"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            최고의 전문가, 최고의 노하우와 정보력을 바탕으로 조합원님 여러분께 꼭 필요한 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        ref={projectsReveal.elementRef}
        id="projects"
        className={"mx-auto w-full max-w-6xl bg-white px-6 pb-28 pt-8 transition-all duration-[2000ms] ease-out md:px-8 " + (projectsReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}
      >
        <h2
          className="text-4xl font-bold text-gray-900 mb-14"
          style={{ fontFamily: "Pretendard, sans-serif" }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              num: "01",
              label: "재개발정비사업",
              img: daeguDonginProjectImg,
              alt: "대구 동인 재개발 프로젝트",
            },
            {
              num: "02",
              label: "재건축정비사업",
              img: chuncheonSlide,
              alt: "춘천 후평 재건축 프로젝트",
            },
            {
              num: "03",
              label: "소규모정비사업",
              img: jamsilProjectImg,
              alt: "잠실 소규모정비 프로젝트",
            },
          ].map(({ num, label, img, alt }) => (
            <div
              key={num}
              className="group relative overflow-hidden"
              style={{ aspectRatio: "4/3", backgroundColor: "#1a2a3a" }}
            >
              <img
                src={img}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[rgba(18,101,166,0.64)] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-center text-[17pt] font-medium tracking-wide">
                  {label}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate("projects", undefined, label)}
                  className="cursor-pointer border-b border-white pb-1 text-sm transition-transform duration-300 hover:scale-110"
                >
                  View more
                </button>
              </div>
              <span
                className="absolute left-4 top-4 text-[18.5pt] font-bold text-white transition-opacity duration-300 group-hover:opacity-0"
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                {num}
              </span>
              <span
                className="absolute bottom-4 right-4 text-right text-[17pt] font-medium tracking-wide text-white transition-opacity duration-300 group-hover:opacity-0"
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        id="contact"
        className="w-full bg-gray-900 text-white px-12 pt-14 pb-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-sm">
            <div>
              <p className="text-gray-400 text-xs mb-1">대표자명</p>
              <p>차혁진</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">주소</p>
              <p className="leading-relaxed">
                서울특별시 송파구 올림픽로 212, 에이동 1436호
                <br />
                <span className="text-gray-400 text-xs">[잠실동, 갤러리아팰리스]</span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">대표전화</p>
              <p>02)414-1184</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">팩스</p>
              <p>02)414-1185</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">사업자등록번호</p>
              <p>215-86-73507</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p
              className="text-gray-500 text-xs"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              COPYRIGHT ㈜예진씨앤디 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
