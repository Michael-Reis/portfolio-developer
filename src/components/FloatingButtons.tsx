import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave global
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/11995260673"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-all"
        style={{ width: 65, height: 65 }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} color="#fff" /> {/* Ícone branco */}
      </a>

      {/* Botão para subir ao topo - lado esquerdo */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-gray-900 hover:bg-gray-700 rounded-full shadow-lg p-3 flex items-center justify-center transition-all border border-gray-700"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={28} color="#fff" />
        </button>
      )}
    </>
  );
}
