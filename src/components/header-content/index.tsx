import BlurText from "../TextAnimations/BlurText/BlurText";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import "./HeaderContent.css";

export default function HeaderContent() {
    return (
        <div className="box-content">

            <div className="badge-header">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l4 -4"></path><path d="M14 4l-10 10"></path><path d="M4 20l16 -16"></path><path d="M20 10l-10 10"></path><path d="M20 16l-4 4"></path></svg>
                <p className="css-e2kesm">Michael Reis</p>

            </div>

            <BlurText
                text="Seja encorajado pela chama da ambição"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl mb-8 message-content flex items-center justify-center"
            />

            <BlurText
                text="Sou apaixonado por tecnologia, pós graduado em Arquitetura de Software, com experiência em desenvolvimento de software, segurança cibernética e gestão de projetos. Busco ajudar empresas a crescer com soluções digitais seguras e eficientes."
                delay={150}
                animateBy="words"
                direction="top"
                className="mb-8 message-content-secondary  flex items-center justify-center "
            />

            <div className="buttons-header">
                <button>Sobre mim</button>
                <button>  <ShinyText text="Entrar em contato" disabled={false} speed={5} className='custom-class' /></button>
            </div>
        </div >
    )

}