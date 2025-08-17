import Threads from "../Backgrounds/Threads/Threads";
import InfiniteScroll from "../Components/InfiniteScroll/InfiniteScroll";
import "./About.css";

export default function About() {


    const items: any[] = [
        {
            content: (
                <div className="depoiment-card">
                    <div className="depoiment-header">
                        <img src="/depoiments/laudir.jpg" alt="laudir" className="depoiment-img" />
                        <div className="depoiment-info">
                            <p className="depoiment-name">Laudir Winck</p>
                            <span className="depoiment-role">Cliente</span>
                        </div>
                    </div>
                    <p className="depoiment-text">
                        "Quando agimos com integridade, não apenas protegemos os outros, mas também fortalecemos a confiança em toda a comunidade online. Michel Reis, sua vigilância e compromisso em tornar a internet um lugar mais seguro são verdadeiramente inspiradores. Agradecemos imensamente sua contribuição ao identificar e relatar uma falha de segurança em nosso site."
                    </p>
                    <div className="depoiment-stars">
                        ⭐⭐⭐⭐⭐
                    </div>
                </div>
            )
        },
        {
            content: <div className="depoiment-card">
                <div className="depoiment-header">
                    <img src="/depoiments/luciano.jpg" alt="Luciano" className="depoiment-img" />
                    <div className="depoiment-info">
                        <p className="depoiment-name">Luciano Dexheimer</p>
                        <span className="depoiment-role">Cliente</span>
                    </div>
                </div>
                <p className="depoiment-text">
                    "O Michael demonstrou profissionalismo e grande conhecimento em segurança da informação ao identificar e reportar uma falha crítica em nossa aplicação. Sua postura proativa, ética e suporte durante a correção foram fundamentais para garantir a segurança do sistema. Agradecemos sua contribuição e o recomendamos como um profissional altamente qualificado e confiável."
                </p>
                <div className="depoiment-stars">
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
        },
        {
            content: <div className="depoiment-card">
                <div className="depoiment-header">
                    <img src="/depoiments/leticia.jpg" alt="Luciano" className="depoiment-img" />
                    <div className="depoiment-info">
                        <p className="depoiment-name">Leticia Midori</p>
                        <span className="depoiment-role">Gestora</span>
                    </div>
                </div>
                <p className="depoiment-text">
                    "Michael é um profissional incrível, tive o prazer de tê-lo como meu funcionário, dinâmico, pró-ativo, estudioso, sempre buscando evoluir e agregar, trabalha super bem em equipe e faz do ambiente de trabalho gostoso de se conviver! "
                </p>
                <div className="depoiment-stars">
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
        },
    ];


    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
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
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
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