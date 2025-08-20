import { Timeline } from "@/components/ui/timeline";
import "./style.css"

export function TimelineDemo() {
    const data = [
        {
            title: "2025",
            content: (
                <div className="text-left">
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                O
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white text-left">Orit</h3>
                                <p className="text-sm text-slate-300 text-left">São Paulo, Brasil · Presencial</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="pl-4">
                                <h4 className="text-md font-semibold text-white mb-2 text-left">
                                    Gerente de TI
                                </h4>
                                <p className="text-sm text-slate-400 mb-3 text-left">
                                    Out 2023 - Presente · 1 ano 11 meses · Tempo integral
                                </p>

                            </div>

                            <div className=" pl-4">
                                <h4 className="text-md font-semibold text-white mb-2 text-left">
                                    Coordenador de TI
                                </h4>
                                <p className="text-sm text-slate-400 mb-3 text-left">
                                    Ago 2022 - Out 2023 · 1 ano 3 meses
                                </p>
                                <p className="text-sm text-slate-300 mb-4 text-left">
                                    Experiência em desenvolvimento de software e liderança técnica. Responsável por conduzir projetos de tecnologia,
                                    com foco na qualidade do código, seguindo padrões de clean code, clean architecture, segurança e design patterns
                                    para soluções escaláveis, seguras e eficientes.
                                </p>
                            
                                <div className="flex flex-wrap gap-2 justify-start mt-4">
                                    <span className="px-2 py-1 text-xs bg-blue-900 text-blue-200 rounded-md">
                                        Liderança Técnica
                                    </span>
                                    <span className="px-2 py-1 text-xs bg-green-900 text-green-200 rounded-md">
                                        Gestão de Equipes
                                    </span>
                                    <span className="px-2 py-1 text-xs bg-purple-900 text-purple-200 rounded-md">
                                        Gestão de Projetos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div className="text-left">
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                O
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white text-left">Orit</h3>
                                <p className="text-sm text-slate-300 text-left">São Paulo, Brasil · Presencial</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="pl-4">
                                <h4 className="text-md font-semibold text-white mb-2 text-left">
                                    Desenvolvedor Full Stack Sênior
                                </h4>
                                <p className="text-sm text-slate-400 mb-3 text-left">
                                    Nov 2021 - Ago 2022 · 10 meses
                                </p>

                                <p className="text-sm text-slate-300 mb-4 text-left">
                                    Atuação na análise de requisitos, arquitetura dos sistemas a serem desenvolvidos. Desenvolvimento e
                                    garantia que as aplicações construídas sigam os padrões de projetos (Design Patterns) e aos padrões
                                    de segurança constituídos pela OWASP.
                                </p>


                            </div>

                            <div className=" pl-4">
                                <h4 className="text-md font-semibold text-white mb-2 text-left">
                                    Desenvolvedor Full Stack Pleno
                                </h4>
                                <p className="text-sm text-slate-400 mb-3 text-left">
                                    Mar 2021 - Nov 2021 · 9 meses
                                </p>
                                <p className="text-sm text-slate-300 mb-4 text-left">
                                    Como desenvolvedor Full Stack Pleno, atuei no desenvolvimento de sistemas internos, automação de processos via APIs, criação de e-commerce e chatbot com IA NLP para otimizar o atendimento. Realizei integrações com APIs de terceiros, testes de usabilidade e desenvolvi uma plataforma de cartão pré-pago. Também participei da construção do Data Warehouse, integrando APIs como Facebook Marketing, TrayCorp, RDStation, E-notas e Zenvia.
                                </p>

                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="pl-4">
                                <h4 className="text-md font-semibold text-white mb-2 text-left">
                                    Desenvolvedor Full Stack Júnior
                                </h4>
                                <p className="text-sm text-slate-400 mb-3 text-left">
                                    Jan 2020 - Fev 2021 · 1 ano 2 meses
                                </p>

                                <p className="text-sm text-slate-300 mb-4 text-left">
                                    Levantamento de requisitos e modelagem de dados com o objetivo de estudar e implementar sistemas
                                    alinhados às regras de negócio. Atuação no desenvolvimento de sistemas, integrações e relatórios em SQL.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2018",
            content: (
                <div className="text-left">
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                B
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white text-left">BBT BRASIL</h3>
                                <p className="text-sm text-slate-300 text-left">São Paulo, Brasil · Presencial</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="pl-4">
                                <h4 className="text-md font-semibold text-white mb-2 text-left">
                                    Assistente de desenvolvimento de software
                                </h4>
                                <p className="text-sm text-slate-400 mb-3 text-left">
                                    jan de 2018 - dez de 2019 · 2 anos
                                </p>
                                <p className="text-sm text-slate-300 mb-4 text-left">
                                    Suporte técnico a sistemas de diversos segmentos, auxílio a colaboradores, desenvolvimento e implantação de ERP, PDV, CRM e SCM. Extração de dados, criação de procedures, triggers e functions em SQL Server.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
