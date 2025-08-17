import Threads from "../Backgrounds/Threads/Threads";
import InfiniteScroll from "../Components/InfiniteScroll/InfiniteScroll";
import "./About.css";

export default function About() {


    const items: any[] = [
        { content: "Text Item 1" },
        { content: <p>Paragraph Item 2</p> },
        { content: "Text Item 3" },
        { content: <p>Paragraph Item 4</p> },
        { content: "Text Item 5" },
        { content: <p>Paragraph Item 6</p> },
        { content: "Text Item 7" },
        { content: <p>Paragraph Item 8</p> },
        { content: "Text Item 9" },
        { content: <p>Paragraph Item 10</p> },
        { content: "Text Item 11" },
        { content: <p>Paragraph Item 12</p> },
        { content: "Text Item 13" },
        { content: <p>Paragraph Item 14</p> },
    ];

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Threads
                    amplitude={2}
                    distance={1.3}
                    enableMouseInteraction={false}
                    color={[1, 1, 3]} // Azul Escuro (Dark Blue in RGB)
                />
            </div>
            <div className="about">
                <div className="about-content">
                    <div className="about-me">
                        <h2>Sobre mim</h2>
                        <h3>Serviços Oferecidos</h3>
                        <p>
                            Ofereço uma ampla variedade de serviços digitais para atender às necessidades do seu negócio. Meu objetivo é entregar soluções de alta qualidade, incluindo desenvolvimento de sites, lojas virtuais, sistemas personalizados, aplicativos para Android e iOS, além de consultoria especializada em segurança digital.
                        </p>
                        <div className="profile-container">
                            <img src="/me/michael.png" alt="Michael Reis" className="profile-picture" />
                            <div className="profile-info">
                                <h1>Michael Reis</h1>
                                <h4>Gerente de TI</h4>
                            </div>
                        </div>
                        <p>
                            Apaixonado por tecnologia e regras de negócios. Pós-graduado em Arquitetura de Software pela FIAP e formado em Análise e Desenvolvimento de Sistemas, fascinado por leitura, design e segurança. Com mais de 09 anos de experiência em analise e desenvolvimento de soluções escaláveis, integrações, projetos end-to-end, desde o levantamento de requisitos até a entrega e sustentação, aplicando Clean Code, Clean Architecture, Hexagonal Architecture, Design Patterns e práticas de segurança
                        </p>

                    </div>
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                        <InfiniteScroll
                            items={items}
                            isTilted={true}
                            tiltDirection='right'
                            autoplay={true}
                            autoplaySpeed={0.1}
                        />
                    </div>


                </div>


            </div>
        </div >
    )
}