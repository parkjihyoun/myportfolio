import { create } from "zustand";

const initialProjects = [
    {
        image: "project1.png",
        title: "Ring-Us",
        description: "현직자와 대학생 연결, 멘토링 서비스",
        techStack: ["React", "Typescript", "TailwindCSS", "Zustand"],
        link: "https://github.com/Ring-Us/ring-us.github.io",
    },
    {
        image: "project2.png",
        title: "Dookong",
        description: "쓰레기 분리수거 활성화 플랫폼",
        techStack: ["React", "JavaScript", "Css", "Zustand"],
        link: "https://github.com/parkjihyoun/dookong_fe",
    },
    // 필요시 프로젝트 추가
];

export const useProjectsStore = create((set, get) => ({
    projects: initialProjects,
    search: "",
    setSearch: (search) => set({ search }),
    getFilteredProjects: () => {
        const { projects, search } = get();
        return projects.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );
    },
}));
