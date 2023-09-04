import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Info from "./Info";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Info name="Brayan Sanchez" bio="This is my portafolio."></Info>
        <Canvas camera={{ fov:100, position: [0, 0, 6] }}>
            <Experience>

            </Experience>
        </Canvas>  
    </>
);