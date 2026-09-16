import { useEffect, useState } from "react";
import logoImg from "@/imports/Splash/85ca41263952ee362d6954d6c3b88b7120f2b048.png";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ProjectDetailPage from "./ProjectDetailPage";
import ContactPage from "./ContactPage";

type Phase = "enter" | "hold" | "exit" | "done";
type Page = "main" | "about" | "projects" | "project-detail" | "contact";

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

export default function App() {
  const [phase, setPhase] = useState<Phase>("enter");
  const [page, setPage] = useState<Page>("main");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [projectsTab, setProjectsTab] = useState("전체");

  useEffect(() => {
    const enterDur = 600;
    const holdDur = 4000;
    const exitDur = 600;

    const t1 = setTimeout(() => setPhase("hold"), enterDur);
    const t2 = setTimeout(() => setPhase("exit"), enterDur + holdDur);
    const t3 = setTimeout(() => setPhase("done"), enterDur + holdDur + exitDur);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const navigate = (target: string, project?: ProjectData, tab?: string) => {
    if (target === "about") setPage("about");
    else if (target === "projects") {
      setProjectsTab(tab ?? "전체");
      setPage("projects");
    }
    else if (target === "contact") setPage("contact");
    else if (target === "main") setPage("main");
    else if (target === "project-detail" && project) {
      setSelectedProject(project);
      if (tab) setProjectsTab(tab);
      setPage("project-detail");
    }
  };

  if (phase === "done") {
    if (page === "about") return <AboutPage onNavigate={navigate} />;
    if (page === "projects") return <ProjectsPage onNavigate={navigate} activeTab={projectsTab} onTabChange={setProjectsTab} />;
    if (page === "project-detail" && selectedProject)
      return <ProjectDetailPage onNavigate={navigate} project={selectedProject} activeTab={projectsTab} />;
    if (page === "contact") return <ContactPage onNavigate={navigate} />;
    return <MainPage onNavigate={navigate} />;
  }

  const opacity = phase === "enter" ? 0 : phase === "hold" ? 1 : 0;
  const scale = phase === "enter" ? 0.88 : phase === "hold" ? 1 : 1.04;

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          transition:
            phase === "enter"
              ? "opacity 0.6s ease-out, transform 0.6s ease-out"
              : phase === "exit"
              ? "opacity 0.6s ease-in, transform 0.6s ease-in"
              : "none",
        }}
      >
        <img
          src={logoImg}
          alt="YEJIN Construction & Development"
          className="w-[364px] h-[161px] object-contain pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
