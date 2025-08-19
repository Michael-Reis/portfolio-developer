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
            thumbnail: "/projects/spider-man.png"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Câmara de osasco",
            link: "#",
            thumbnail: "/projects/mavidey.png"
        },
        {
            title: "Ouro minas",
            link: "#",
            thumbnail: "/projects/ouro-minas.png"
        },
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },
        {
            title: "Spider-Man Project",
            link: "#",
            thumbnail: "/projects/spider-man.png"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Câmara de osasco",
            link: "#",
            thumbnail: "/projects/mavidey.png"
        },
        {
            title: "Ouro minas",
            link: "#",
            thumbnail: "/projects/ouro-minas.png"
        },
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },
        {
            title: "Spider-Man Project",
            link: "#",
            thumbnail: "/projects/spider-man.png"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Câmara de osasco",
            link: "#",
            thumbnail: "/projects/mavidey.png"
        },
        {
            title: "Ouro minas",
            link: "#",
            thumbnail: "/projects/ouro-minas.png"
        },
     


    ];

    return (
        <div className="relative">
            <HeroParallax products={projects} />
        </div>
    );
}