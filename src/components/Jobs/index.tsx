"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { RainbowButton } from "../magicui/rainbow-button";

export function Jobs() {
    const images = [
    
        "/projects/synix.png",
        "/projects/camara.png",
        "/projects/colmeia-do-saber.png",
        "/projects/marvel.jpg",
        "/projects/mavidey.png",
        "/projects/ouro-minas.png",
        "/projects/pediakinder.png",
        "/projects/spider-man.jpg",
        "/projects/spider-man.png",
        "/projects/starwars.jpg",
        "/projects/synix.png",
        "/projects/bbtbrasil.png",
        "/projects/cleancar.png",
        "/projects/isabel.png",
        "/projects/synix.png",
        "/projects/camara.png",
        "/projects/colmeia-do-saber.png",
        "/projects/marvel.jpg",
        "/projects/mavidey.png",
        "/projects/ouro-minas.png",
        "/projects/pediakinder.png",
        "/projects/spider-man.jpg",
        "/projects/spider-man.png",
        "/projects/starwars.jpg",
        "/projects/synix.png",
        "/projects/bbtbrasil.png",
        "/projects/cleancar.png",
        "/projects/isabel.png",
        "/projects/synix.png",
        "/projects/camara.png",
        "/projects/colmeia-do-saber.png",
        "/projects/marvel.jpg",
        "/projects/mavidey.png",
        "/projects/ouro-minas.png",
        "/projects/pediakinder.png",
        "/projects/spider-man.jpg",
        "/projects/spider-man.png",
        "/projects/starwars.jpg",
        "/projects/synix.png",
        "/projects/bbtbrasil.png",
        "/projects/cleancar.png",
        "/projects/isabel.png",
    
    ];
    return (
        <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
            <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
                Desenvolvimento de Software{" "}
                <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                    sob medida
                </span>{" "}
                para o seu negócio.
            </h2>
            <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
                Transforme ideias em soluções digitais! Crio sistemas, sites e aplicativos personalizados para empresas e profissionais. Entre em contato e vamos conversar sobre seu projeto.
            </p>

            <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">

                <RainbowButton>Entrar em contato</RainbowButton>

            </div>

            {/* overlay */}
            <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
            <ThreeDMarquee
                className="pointer-events-none absolute inset-0 h-full w-full"
                images={images}
            />
        </div>
    );
}
