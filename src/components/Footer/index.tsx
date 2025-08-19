import ShinyText from "../TextAnimations/ShinyText/ShinyText";

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 text-white py-8 max-w-[1300px] mx-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm mb-4 md:mb-0">© 2023 <ShinyText text="Michael Reis" disabled={false} speed={5} /> Todos os direitos reservados.</p>
                    <p className="text-sm md:text-right">Desenvolvido por <ShinyText text="Michael Reis" disabled={false} speed={5} /></p>
                </div>
            </div>
        </footer>
    );
}