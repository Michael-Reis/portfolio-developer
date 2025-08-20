import { HeroParallax } from "../ui/hero-parallax";

export default function Projects() {
    const projects = [


        {
            title: "Clean Car",
            link: "#",
            thumbnail: "/projects/cleancar.png"
        },

        {
            title: "Camara",
            link: "#",
            thumbnail: "/projects/camara.png"
        },

        {
            title: "Colmeia do Saber",
            link: "#",
            thumbnail: "/projects/colmeia-do-saber.png"
        },
        {
            title: "Isabel",
            link: "#",
            thumbnail: "/projects/isabel.png"
        },
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },

        {
            title: "Ouro Minas",
            link: "#",
            thumbnail: "/projects/ouro-minas.png"
        },

        {
            title: "Spider-Man",
            link: "#",
            thumbnail: "/projects/spider-man.png"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Synix",
            link: "#",
            thumbnail: "/projects/synix.png"
        },

        {
            title: "BBT Brasil",
            link: "#",
            thumbnail: "/projects/bbtbrasil.png"
        },
        {
            title: "Camara",
            link: "#",
            thumbnail: "/projects/camara.png"
        },

        {
            title: "Colmeia do Saber",
            link: "#",
            thumbnail: "/projects/colmeia-do-saber.png"
        },
        {
            title: "Isabel",
            link: "#",
            thumbnail: "/projects/isabel.png"
        },
        {
            title: "Marvel App",
            link: "#",
            thumbnail: "/projects/marvel.jpg"
        },

        {
            title: "Ouro Minas",
            link: "#",
            thumbnail: "/projects/ouro-minas.png"
        },

        {
            title: "Spider-Man",
            link: "#",
            thumbnail: "/projects/spider-man.png"
        },
        {
            title: "Star Wars Platform",
            link: "#",
            thumbnail: "/projects/starwars.jpg"
        },
        {
            title: "Synix",
            link: "#",
            thumbnail: "/projects/synix.png"
        },

        {
            title: "BBT Brasil",
            link: "#",
            thumbnail: "/projects/bbtbrasil.png"
        },

    ];

    return (
        <div className="relative">
            <HeroParallax products={projects} />
        </div>
    );
}