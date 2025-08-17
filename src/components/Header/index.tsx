import Beams from "../Backgrounds/Beams/Beams";
import Navbar from "../Navbar";
import HeaderContent from "../Header-content";       

export default function Header() {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#9900ff"
                speed={2}
                noiseIntensity={0}
                scale={0.2}
                rotation={30}
            />
            {/* Gradiente para esmaecimento na parte inferior */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 1) 100%)',
                    pointerEvents: 'none',
                    zIndex: 10
                }}
            />
            
            <Navbar />
            <HeaderContent />


        </div >

    );
}



