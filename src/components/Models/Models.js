import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Mouse from "./Mouse";
import Laptop from "./Laptop";
import "./Models.css";
import Keyboard from "./Keyboard";
import Phone from "./Phone";
function Models() {
  const ref = useRef();

  return (
    <>
      <div className="object1">
        <Canvas>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              contactShadow={false}
              shadows={false}
              environment="sunset"
            >
              <Mouse />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate autoRotateSpeed={10}/>
        </Canvas>
        <Canvas>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              contactShadow={false}
              shadows={false}
              environment="sunset"
            >
              <Laptop />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate autoRotateSpeed={20}/>
        </Canvas>{" "}
      </div>

      <div className="object2">
        <Canvas>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              contactShadow={false}
              shadows={false}
              environment="sunset"
            >
              <Keyboard />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate autoRotateSpeed={30} />
        </Canvas>
        <Canvas>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              contactShadow={false}
              shadows={false}
              environment="sunset"
            >
              <Phone />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate autoRotateSpeed={40} />
        </Canvas>
      </div>
    </>
  );
}
export default Models;
