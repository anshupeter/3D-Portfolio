import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import TechKeyboard, { TechItem } from './TechKeyboard';
import './styles/TechStack3D.css';

const TechStack3D: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  return (
    <div className="tech-stack-3d-section section-container" id="techstack">
      <div className="section-header">
        <h2 className="title">Tech <span>Stack</span></h2>
        <p className="subtitle">(hint: hover over the keys)</p>
      </div>

      <div className="canvas-container">
        {/* Holographic UI Overlay */}
        <div className={`tech-info-overlay ${hoveredTech ? 'visible' : ''}`}>
          {hoveredTech && (
            <>
              <h2 style={{ color: hoveredTech.color }}>{hoveredTech.name}</h2>
              <p>{hoveredTech.description}</p>
            </>
          )}
        </div>

        <Canvas camera={{ position: [0, 8, 12], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <Suspense fallback={null}>
            <PresentationControls 
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <group position={[0, -2, 0]}>
                <TechKeyboard onHover={setHoveredTech} />
                <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={20} blur={2} far={4} />
              </group>
            </PresentationControls>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default TechStack3D;
