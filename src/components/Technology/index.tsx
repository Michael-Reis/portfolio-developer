import CurvedLoop from "../TextAnimations/CurvedLoop/CurvedLoop";

export default function Technology() {
    return (
        <>
            <CurvedLoop
                marqueeText="Node.js ✦ NestJS ✦ Typescript ✦ ReactJS ✦ React Native ✦ Next.js ✦ PHP ✦ C# ✦ AWS ✦ MySQL ✦ PostgreSQL ✦ Firebird ✦ HTML ✦ CSS ✦ Tailwind ✦ Docker ✦ Git ✦ Nginx ✦ Sentry ✦ Wazuh ✦"
                speed={1}
                curveAmount={100}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />
        </>
    )
}