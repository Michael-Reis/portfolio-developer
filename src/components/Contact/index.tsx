import { BorderBeam } from "@/components/magicui/border-beam";
import { OrbitingCirclesDemo } from "../OrbContact";
import BlurText from "../TextAnimations/BlurText/BlurText";

export function Contact() {
    return (
        <div className="flex justify-center items-center w-full px-4 mt-60">
            <div className="relative w-full max-w-[1300px] overflow-hidden rounded-3xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Coluna esquerda - Informações */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div>
                            <BlurText
                                text="Vamos trabalhar juntos!"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-4xl font-bold text-white mb-4 text-left"
                            />
                            <BlurText
                                text="Tenho paixão por criar soluções digitais incríveis. Se você tem um projeto em mente ou precisa de ajuda com desenvolvimento, consultoria, segurança,  ficarei feliz em conversar."
                                delay={200}
                                animateBy="words"
                                direction="top"
                                className="text-white/80 text-lg leading-relaxed text-left"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xl">📧</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-left">Email</h4>
                                    <p className="text-white/70">michael.f.r@hotmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xl">🌐</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-left">LinkedIn</h4>
                                    <p className="text-white/70">@MichaelReis</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-green-500 text-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.197.297-.767.967-.94 1.166-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.207-.242-.579-.487-.5-.666-.51-.171-.008-.368-.01-.564-.01-.197 0-.52.075-.792.373-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.348.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.413-.074-.123-.271-.198-.568-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.437-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.453-4.438 9.888-9.895 9.888zm8.413-18.303a11.815 11.815 0 00-8.413-3.488c-6.533 0-11.858 5.326-11.86 11.859a11.82 11.82 0 001.711 6.19l-1.81 6.591a1.001 1.001 0 00.991 1.263c.101 0 .2-.015.297-.044l6.576-1.726a11.82 11.82 0 005.104 1.188h.005c6.532 0 11.858-5.326 11.86-11.859a11.82 11.82 0 00-3.487-8.474z" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-left">WhatsApp</h4>
                                    <p className="text-white/70">+55 11 9 9526-0673</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Coluna direita - Formulário */}
                    <div className="relative ">
                        <OrbitingCirclesDemo />
                    </div>
                </div>
            </div>
        </div >
    );
}