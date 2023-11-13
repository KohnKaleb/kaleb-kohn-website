import React, { useRef, useEffect, useState } from "react";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Layout from "../components/layout";

const JetModel = ({ onVisibilityChange }) => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  const jetRef = useRef();

  const scale = 0.1;
  const initialPosition = { x: -5, y: 2, z: 0 };

  useFrame((state, delta) => {
    if (jetRef.current.position.x === 0 && jetRef.current.position.z === 0) {
      jetRef.current.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
    }

    jetRef.current.position.x += 1.0 * delta;
    jetRef.current.position.z -= 10.0 * delta;
    jetRef.current.rotation.x += 0.0 * delta;
    jetRef.current.rotation.z += 0.0 * delta;

    jetRef.current.scale.set(-scale, scale, scale);

    if (jetRef.current.position.z < -10) {
      onVisibilityChange(false);
    }
  });

  return <primitive object={gltf.scene} ref={jetRef} />;
};

// SmokeTrail component
const SmokeTrail = () => {
  const smokeParticles = useRef();

  // Use the useFrame hook for smoke animation
  useFrame((state, delta) => {
    if (smokeParticles.current) {
      // Update smoke particle positions or any other animation logic
    }
  });

  // Placeholder for the smoke particles
  return <mesh ref={smokeParticles}>{/* Your smoke particles logic here */}</mesh>;
};

const IndexPage = () => {
  const [isJetVisible, setIsJetVisible] = useState(true);

  const handleJetVisibility = (visibility) => {
    setIsJetVisible(visibility);
  };

  return (
    <>
      <Layout />
      <div id="f35"></div>
      <div className="outerContainer">
        <div className="container">
          <p className="my-4">
            Hello, my name is Kaleb Kohn, and I am a Computer Science Major at UW-Madison.
          </p>
          <p>
            I am passionate about computer science and mostly interested in
            backend development, but I like to try and learn all aspects of
            software development.
          </p>
        </div>
      </div>
      <Canvas style={{ position: "absolute", top: 0, zIndex: 999 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        {isJetVisible && <JetModel onVisibilityChange={handleJetVisibility} />}
        <SmokeTrail />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
};

export const Head = () => <title>Kaleb's Website</title>;

export default IndexPage;
