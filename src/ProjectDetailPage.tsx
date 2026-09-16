import logoImg from "@/imports/Splash/85ca41263952ee362d6954d6c3b88b7120f2b048.png";
import projectsBannerImg from "@/imports/프로젝트 페이지 사진 -1 .jpg";
import useScrolled from "./useScrolled";

interface ProjectData {
  photo: string;
  alt: string;
  category: string;
  title: string;
  location: string;
  area: string;
  scale: string;
  units: string;
  sitePlan?: string;
}

interface Props {
  onNavigate: (page: string, project?: ProjectData, tab?: string) => void;
  project: ProjectData;
  activeTab: string;
}

type Tab = "재개발정비사업" | "재건축정비사업" | "소규모정비사업";

export default function ProjectDetailPage({ onNavigate, project, activeTab }: Props) {
  const isScrolled = useScrolled();

  return (
    <div
      className="w-full min-h-screen bg-white overflow-y-auto"
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-[background-color,box-shadow] duration-500 ease-out ${isScrolled ? "bg-white shadow-[0_4px_14px_rgba(0,0,0,0.10)]" : "bg-transparent shadow-none"}`}
      >
        <button onClick={() => onNavigate("main")} className="flex-shrink-0">
          <img src={logoImg} alt="YEJIN C&D" className="h-11 w-[110px] object-contain" />
        </button>
        <nav className="flex items-center gap-14">
          {[
            { label: "About us", page: "about" },
            { label: "Projects", page: "projects" },
            { label: "Contact", page: "contact" },
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
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
        className="relative w-full flex flex-col justify-between"
        style={{ height: 390, backgroundColor: "#1a2a3a" }}
      >
        <img
          src={projectsBannerImg}
          alt="프로젝트 배너"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 px-12 pt-32">
          <h1
            className="text-white font-bold"
            style={{ fontSize: "52px", letterSpacing: "-0.02em" }}
          >
            프로젝트
          </h1>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <div className="border-b border-gray-200">
        <div className="flex max-w-3xl mx-auto">
          {(["재개발정비사업", "재건축정비사업", "소규모정비사업"] as Tab[]).map((cat, i) => (
            <button
              key={cat}
              onClick={() => onNavigate("projects", undefined, cat)}
              className="relative flex-1 py-5 text-[12.5pt] text-gray-700 transition-colors hover:text-gray-900"
            >
              {i > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-gray-300" />
              )}
              <span className={cat === activeTab ? "font-bold text-gray-900" : ""}>
                {cat}
              </span>
              {cat === activeTab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── DETAIL SECTION ── */}
      <main className="max-w-4xl mx-auto px-6 py-14">
        {/* Top: photo + info */}
        <div className="flex gap-10 mb-12">
          {/* Left: project photo */}
          <div className="flex-shrink-0 bg-gray-100" style={{ width: "340px", aspectRatio: "4/3" }}>
            {project.photo ? (
              <img
                src={project.photo}
                alt={project.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                이미지 준비 중
              </div>
            )}
          </div>

          {/* Right: info */}
          <div className="flex-1 pt-2">
            <p
              className="text-gray-500 text-sm mb-1"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              {project.category}
            </p>
            <h2
              className="text-gray-900 font-bold mb-4"
              style={{ fontSize: "26px", fontFamily: "Pretendard, sans-serif" }}
            >
              {project.title}
            </h2>
            <div className="border-t border-gray-300 mb-6" />

            {/* Spec rows */}
            <dl className="space-y-3 text-sm text-gray-800 mb-8">
              {[
                { label: "위치", value: project.location },
                { label: "연면적", value: project.area },
                { label: "건축규모", value: project.scale },
                ...(project.title === "잠실 1단지"
                  ? []
                  : [{ label: "세대수", value: project.units }]),
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-6">
                  <dt className="w-16 flex-shrink-0 text-gray-500">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {/* List button */}
            <button
              onClick={() => onNavigate("projects", undefined, activeTab)}
              className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium transition-colors px-6 py-3"
              style={{ width: "240px", fontFamily: "Pretendard, sans-serif" }}
            >
              <span>≡</span>
              <span>목록보기</span>
            </button>
          </div>
        </div>

        {/* Full-width site plan */}
        <div className="w-full bg-gray-100" style={{ aspectRatio: "4/3" }}>
          <img
            src={project.sitePlan ?? "https://images.unsplash.com/photo-1776066361433-365dcfe08fa9?w=1200&h=900&fit=crop&auto=format"}
            alt={`${project.title} 세부 배치도`}
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-gray-900 text-white px-12 pt-14 pb-8">
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
            <p className="text-gray-500 text-xs">
              COPYRIGHT ㈜예진씨앤디 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
