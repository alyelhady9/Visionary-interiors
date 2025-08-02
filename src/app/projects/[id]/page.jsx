import { projects } from "../../data/projectsData";

import ProjectClientPage from "../../components/ProjectClientPage";


// This tells Next.js which project pages to build statically
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}


export default function Page({ params }) {
    const project = projects.find(p => p.id === parseInt(params.id));

    if (!project) {
        return (
            <div className="w-full font-sans text-center mt-10">
                <p>Project not found!</p>
            </div>
        );
    }

    return <ProjectClientPage project={project} />;
}