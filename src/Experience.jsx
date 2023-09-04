import { OrbitControls, useTexture, Trail } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const Experience = () => {
    const { width, height } = useThree(state => state.viewport)
    
    const boxRef = useRef(), torusRef = useRef(), coneRef = useRef(), sphereRef = useRef();

    const boxColorMap = useTexture("tiles_0064_color_1k.jpg");
    const coneColorMap = useTexture("decals_0003_1k_F6fzPK.jpg");
    const sphereColorMap = useTexture("Tiles060_1K-JPG_Color.jpg");
    const torusColorMap = useTexture("Candy001_1K-JPG_Color.jpg");

    const movementDirection = useRef(1);
    const cosinus = useRef(0);
    const sinus = useRef(0);

    useFrame((state, delta) => {
        boxRef.current.position.x += delta * movementDirection.current;
        torusRef.current.position.x += delta * movementDirection.current;
        coneRef.current.position.x += delta * movementDirection.current;
        sphereRef.current.position.x += delta * movementDirection.current;

        boxRef.current.position.y += Math.cos(cosinus.current) * delta;
        torusRef.current.position.y += Math.cos(cosinus.current) * delta;
        coneRef.current.position.y += Math.sin(sinus.current) * delta;
        sphereRef.current.position.y += Math.sin(sinus.current) * delta;
        cosinus.current += 0.01;
        sinus.current += 0.01;

        if(torusRef.current.position.x > width/2 || boxRef.current.position.x < -width/2){
            movementDirection.current *= -1;
        }
    });

    return (
        <>       
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={4} />

            <Trail
                color={"#D8D8D8"}
                width={0.5}
                length={16}
                interval={6}
                decay={4}
                opacity={0.1}
            >
                <mesh position={[-width/2, 1, 0]} ref={boxRef}> 
                    <boxGeometry args={[1, 1, 1]} />
                    <meshToonMaterial map={boxColorMap} />
                </mesh>    
            </Trail>
            <Trail
                color={"#D8D8D8"}
                width={0.5}
                length={16}
                interval={6}
                decay={4}
                opacity={0.1}
            >
                <mesh position={[-width/2 + 2, 0, 0]} ref={sphereRef}> 
                    <sphereGeometry args={[0.55, 32]} />
                    <meshToonMaterial map={sphereColorMap}/>
                </mesh>
            </Trail>
            <Trail
                color={"#D8D8D8"}
                width={0.5}
                length={16}
                interval={6}
                decay={4}
                opacity={0.1}
            >
                <mesh position={[-width/2 + 4, 0, 0]} ref={coneRef}> 
                    <coneGeometry args={[0.55, 1, 32]} />
                    <meshToonMaterial map={coneColorMap} />
                </mesh>            
            </Trail>
             <Trail
                color={"#D8D8D8"}
                width={0.5}
                length={16}
                interval={6}
                decay={4}
                opacity={0.1}
            >
                <mesh position={[-width/2 + 6, 1, 0]} ref={torusRef}> 
                    <torusGeometry args={[0.35, 0.20, 12, 48]}/>
                    <meshToonMaterial map={torusColorMap} />
                </mesh>
            </Trail>
        </>
    );
}

export default Experience;