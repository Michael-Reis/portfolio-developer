import "./HeaderContent.css";

export default function HeaderContent() {
    return (
        <div className="box-content">

            <div className="badge-header">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l4 -4"></path><path d="M14 4l-10 10"></path><path d="M4 20l16 -16"></path><path d="M20 10l-10 10"></path><path d="M20 16l-4 4"></path></svg>
                <p className="css-e2kesm">Michael Reis</p>
            </div>
            <p className="message-content">Seja encorajado pela chama da ambição</p>
            <div className="buttons-header">
                <button>Sobre mim</button>
                <button>Entrar em contato</button>
            </div>
        </div >
    )

}