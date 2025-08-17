import { HeroParallax } from "../ui/hero-parallax";

export default function Projects() {
    const projects = [
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },
        {
            title: "Spider-Man Project",
            link: "#",
            thumbnail: "/projects/spider-man.jpg"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },
        {
            title: "Spider-Man Project",
            link: "#",
            thumbnail: "/projects/spider-man.jpg"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },
        {
            title: "Spider-Man Project",
            link: "#",
            thumbnail: "/projects/spider-man.jpg"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
    

    ];

    return (
        <div className="relative">
            <HeroParallax products={projects} />
        </div>
    );
}