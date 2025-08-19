/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
const reviews = [
    {
        name: "Laudir Winck",
        username: "Cliente",
        body: "Michel Reis, sua vigilância e compromisso em tornar a internet um lugar mais seguro são verdadeiramente inspiradores. Agradecemos imensamente sua contribuição ao identificar e relatar uma falha de segurança em nosso site.",
        img: "/depoiments/laudir.jpg",
    },
    {
        name: "Luciano Dexheimer",
        username: "Cliente",
        body: "O Michael demonstrou profissionalismo e grande conhecimento em segurança da informação ao identificar e reportar uma falha crítica em nossa aplicação. Sua postura proativa, ética e suporte durante a correção fo...",
        img: "/depoiments/luciano.jpg",
    },
    {
        name: "Leticia Midori",
        username: "Gestora",
        body: "Michael é um profissional incrível, tive o prazer de tê-lo como meu funcionário, dinâmico, pró-ativo, estudioso, sempre buscando evoluir e agregar, trabalha super bem em equipe e faz do ambiente de trabalho gostoso de se conviver!",
        img: "/depoiments/leticia.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
            "relative h-full w-fit sm:w-44 cursor-pointer overflow-hidden rounded-2xl border p-6",
            // glass effect styles
            "border border-white/20 bg-white/10 backdrop-blur-md shadow-xl",
            // dark styles
            "dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md",
            )}
        >
            <div className="flex flex-row items-center gap-4">
            <img className="rounded-full" width="40" height="40" alt="" src={img} />
            <div className="flex flex-col text-left">
                <figcaption className="text-sm font-semibold dark:text-white">
                {name}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
            </div>
            <blockquote className="mt-4 text-sm text-left">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemoVertical() {
    return (
        <div className="relative flex h-[800px] w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}
