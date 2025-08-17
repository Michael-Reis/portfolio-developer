import CardSwap, { Card } from '../Components/CardSwap/CardSwap';
export default function Projects() {
    return (
        <div style={{ height: '600px', width: "100%",position: 'relative', overflow: 'hidden' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                height: '100%',
                
                width: '50%',
            }}>

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum id vel voluptas deleniti mollitia totam suscipit maiores. Facere explicabo consectetur ipsam sed voluptate, minima amet hic distinctio iste eos?
            </div>
            <CardSwap
                cardDistance={100}
                verticalDistance={120}
                delay={5000}
                skewAmount={12}
                pauseOnHover={false}
            >
                <Card>
                    <img src="/projects/marvel.jpg" alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }}/>
                </Card>
                <Card>
                    <img src="/projects/spider-man.jpg" alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }} />
                </Card>
                <Card>
                    <img src="/projects/starwars.jpg" alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }} />
                </Card>
            </CardSwap>
        </div>
    );
}