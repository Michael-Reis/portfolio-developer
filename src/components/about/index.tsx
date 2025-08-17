import Threads from "../Backgrounds/Threads/Threads";
import "./About.css";

export default function About() {

    return (
        <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
            <Threads
                amplitude={2}
                distance={1.3}
                enableMouseInteraction={false}
                color={[1, 1, 3]} // Azul Escuro (Dark Blue in RGB)
            />
            <div className="about">
                <div className="about-content">
                    <div className="about-me">
                        <h2>Sobre mim</h2>
                        <h3>Serviços Oferecidos</h3>
                        <p>
                            Ofereço uma ampla variedade de serviços digitais para atender às necessidades do seu negócio. Meu objetivo é entregar soluções de alta qualidade, incluindo desenvolvimento de sites, lojas virtuais, sistemas personalizados, aplicativos para Android e iOS, além de consultoria especializada em segurança digital.
                        </p>
                        <h3>Ei, olha eu aqui</h3>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt nam quam non laudantium et atque, eaque, cum fugiat, dolor sequi! Accusantium non ab voluptatibus repellat rerum ut blanditiis doloribus.</p>
                    </div>

                    
                </div>


            </div>
        </div >
    )
}