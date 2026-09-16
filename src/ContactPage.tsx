import logoImg from "@/imports/Splash/85ca41263952ee362d6954d6c3b88b7120f2b048.png";
import contactBannerImg from "@/imports/contact.jpg";
import useScrolled from "./useScrolled";

interface Props {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: Props) {
  const isScrolled = useScrolled();

  return (
    <div
      className="w-full min-h-screen bg-white overflow-y-auto"
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-[background-color,box-shadow] duration-500 ease-out ${
          isScrolled
            ? "bg-white shadow-[0_4px_14px_rgba(0,0,0,0.10)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <button onClick={() => onNavigate("main")} className="flex-shrink-0">
          <img
            src={logoImg}
            alt="YEJIN C&D"
            className="h-11 w-[110px] object-contain"
          />
        </button>
        <nav className="flex items-center gap-14">
          {[
            { label: "About us", page: "about" },
            { label: "Projects", page: "projects" },
            { label: "Contact", page: "contact" },
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => {
                if (page !== "contact") onNavigate(page);
              }}
              className={`text-[19.33px] font-medium tracking-wide transition-[color,opacity] duration-500 hover:opacity-70 ${
                isScrolled ? "text-black" : "text-white"
              }`}
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
        style={{ height: 390, backgroundColor: "#9aa8b4" }}
      >
        <img
          src={contactBannerImg}
          alt="오시는 길 배너"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-10 px-12 pt-32">
          <h1
            className="text-white font-bold"
            style={{ fontSize: "52px", letterSpacing: "-0.02em" }}
          >
            오시는 길
          </h1>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <main className="max-w-4xl mx-auto px-12 py-16">
        <h2
          className="text-2xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "Pretendard, sans-serif" }}
        >
          본사
        </h2>
        <hr className="border-gray-300 mb-10" />

        <div className="flex gap-12">
          {/* Left: map placeholder */}
          <div className="flex-shrink-0" style={{ width: "440px" }}>
            <iframe
              title="YEJIN C&D 본사 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.0994!3d37.5133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5b12fc42b41%3A0x8e3a5f3a4b73a1b!2z7ISc7Jq47Yq567OE7IucIOyEseyKpOuguOq1rCDsmIHlm73roZzroZw!5e0!3m2!1sko!2skr!4v1"
              className="w-full bg-gray-200 border-0"
              style={{ height: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: contact info */}
          <div className="flex-1 space-y-8 pt-1">
            <div>
              <p className="font-bold text-gray-900 text-base mb-2">주소</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                서울특별시 송파구 올림픽로 212, 에이동 1436호
                <br />
                [잠실동,갤러리아팰리스]
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base mb-2">대표전화</p>
              <p className="text-gray-700 text-sm">02)414-1184</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base mb-2">팩스</p>
              <p className="text-gray-700 text-sm">02)414-1185</p>
            </div>
          </div>
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
                <span className="text-gray-400 text-xs">
                  [잠실동, 갤러리아팰리스]
                </span>
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
