
const SkillsSection = () => {
    return (
        <div className="min-h-screen bg-white mt-5 text-black p-5" >
            <h1 className="text-3xl font-bold mb-1" >Skills</h1>
            <div className="flex bg-gray-300/30 max-w-fit pr-2 mb-3" >
                <div className="w-1 mr-2 bg-gray-300" >
                </div>
                <h1 className="text-gray-400" >Junior <span className="font-medium underline" >JavaScript</span> Full stack Developer</h1>
            </div>
            <div className="border border-gray-300/30 min-h-52 flex flex-wrap gap-5" >
                {skillData.map((item, i) => {
                    return <div key={i} className="rounded-sm w-full md:w-fit border group border-gray-300/80 shadow-md pr-10 hover:bg-sky-400 hover:text-white transition-colors duration-200 pb-5" >
                        <h2 className="font-bold text-xl m-2" > <span className="text-xl" >{item.icon}</span> {item.title}</h2>
                        <ul className="pl-2" >
                            {item.items.map((techSkill, idx) => {
                                return <li key={idx} className="m-1 font-medium text-gray-500 group-hover:text-white" >
                                    {"-"} {techSkill}
                                </li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SkillsSection


type SkillCategory = {
    icon: string; // Optional - for future icons if needed
    title: string;
    items: string[];
};

const skillData: SkillCategory[] = [
    {
        icon: "🧑‍💻",
        title: "Frontend Development",
        items: [
            "HTML / CSS",
            "JavaScript / TypeScript",
            "React.js (with functional components and hooks)",
            "Next.js",
            "Tailwind CSS",
            "TanStack Table (React Table)",
            "ShadCN UI",
            "Responsive UI Design (mobile-first, spacing, padding, icon sizing, etc.)",
            // "Custom Audio & Video Player UIs",
            // "SVG Work (e.g., building custom logos like Spotify)",
            // "Custom Dropdowns & Hover-based UIs",
        ],
    },
    {
        icon: "🧑‍🍳",
        title: "Backend Development",
        items: [
            "Node.js",
            "Express.js",
            "Prisma ORM",
            "PostgreSQL",
            "MongoDB",
            "Redis Caching",
            "CRON Jobs",
            "JWT Authentication",
            "OAuth 2.0 Auth"
        ],
    },
    {
        icon: "🛠️",
        title: "DevOps & System Design",
        items: [
            "Docker",
            "Linux",
            "Architecture & Wireframing",
            "Data Modeling",
            "API Optimization",
            "ElasticSearch",
            "CI/CD (basic knowledge)",
        ],
    },
    {
        icon: "🚀",
        title: "Tools & Workflow",
        items: [
            "Git (Version Control) | GitHub & GitLab",
            "Figma (basic for wireframing/UI design)",
            "Postman",
            "Jira",
            "Project Management & Team Collaboration",
            "Client Communication",
        ],
    },
    {
        icon: "✍️",
        title: "Content & Documentation",
        items: [
            "Technical Blogging",
            "API Documentation (Swagger & ReadMe)",
            "Product Documentation",
            // "Cover Letter Writing (with a human, non-buzzword tone)",
        ],
    },
    {
        icon: "🎯",
        title: "Goals & Personal Interests",
        items: [
            // "Building MVPs: Gharabhada.com, Motuitionsir.com",
            // "Creating a video streaming platform with VOD",
            // "Creating a T-shirt design web app",
            // "Working towards freelancing for international clients earning $5k/month",
            // "Consistent improvement in DSA, targeting June 2025",
            // "Interested in remote roles and Bhubaneswar-based opportunities (Mindfire, Happiest Minds)",
            "Work under a mentor who can guide me in building efficient, scalable software and help me grow as a developer.",
            "Collaborate with cross-functional teams to build meaningful products that solve real-world problems.",
            "Stay curious and continuously learn new technologies and best practices.",
            "Open to both remote and onsite opportunities across the globe.",
            // ""
        ],
    },
];
