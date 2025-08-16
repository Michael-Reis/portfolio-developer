import "../../styles/HeaderContent.css";

export default function HeaderContent() {
    return (
        <div style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none',
        }}>

            <div className="badge-header">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l4 -4"></path><path d="M14 4l-10 10"></path><path d="M4 20l16 -16"></path><path d="M20 10l-10 10"></path><path d="M20 16l-4 4"></path></svg>
                <p className="css-e2kesm">Michael Reis</p>
            </div>
            <p style={{
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 16px',
                marginTop: '1rem',
                fontSize: '35px',
                lineHeight: 1.2,
                textAlign: 'center',
                letterSpacing: '-2px',
                fontWeight: 500,
                marginBottom: '0px',

            }}>Seja encorajado pela chama da ambição</p>
            <div className="buttons-header">
                <button>Sobre mim</button>
                <button>Entrar em contato</button>
            </div>
        </div >
    )

}