import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGithub, 
  FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaLinux, FaDatabase 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, 
  SiMongodb, SiFirebase 
} from "react-icons/si";
import { playKeySound } from "../utils/playKeySound";

export interface TechItem {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export const techStackItems: TechItem[] = [
  { id: 'nextjs', name: 'Next.js', description: 'React\'in en güçlü framework\'ü, SSR ve SSG destekli', icon: SiNextdotjs, color: '#ffffff' },
  { id: 'react', name: 'React', description: 'A JavaScript library for building user interfaces', icon: FaReact, color: '#61DAFB' },
  { id: 'ts', name: 'TypeScript', description: 'Typed JavaScript at Any Scale.', icon: SiTypescript, color: '#3178C6' },
  { id: 'js', name: 'JavaScript', description: 'The language of the web', icon: FaJsSquare, color: '#F7DF1E' },
  { id: 'html', name: 'HTML5', description: 'Markup Language for the Web', icon: FaHtml5, color: '#E34F26' },
  { id: 'css', name: 'CSS3', description: 'Style sheet language', icon: FaCss3Alt, color: '#1572B6' },
  { id: 'tailwind', name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: SiTailwindcss, color: '#38B2AC' },
  { id: 'node', name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 engine', icon: FaNodeJs, color: '#339933' },
  { id: 'python', name: 'Python', description: 'Programming language that lets you work quickly', icon: FaPython, color: '#3776AB' },
  { id: 'php', name: 'PHP', description: 'A popular general-purpose scripting language', icon: FaPhp, color: '#777BB4' },
  { id: 'postgres', name: 'PostgreSQL', description: 'The world\'s most advanced open source database', icon: SiPostgresql, color: '#4169E1' },
  { id: 'mongo', name: 'MongoDB', description: 'The developer data platform', icon: SiMongodb, color: '#47A248' },
  { id: 'firebase', name: 'Firebase', description: 'App development platform backed by Google', icon: SiFirebase, color: '#FFCA28' },
  { id: 'docker', name: 'Docker', description: 'Empowering App Development for Developers', icon: FaDocker, color: '#2496ED' },
  { id: 'aws', name: 'AWS', description: 'Amazon Web Services Cloud Computing', icon: FaAws, color: '#FF9900' },
  { id: 'github', name: 'GitHub', description: 'Where the world builds software', icon: FaGithub, color: '#ffffff' },
  { id: 'linux', name: 'Linux', description: 'Open source operating system', icon: FaLinux, color: '#FCC624' },
  { id: 'sql', name: 'SQL', description: 'Standard language for storing, manipulating and retrieving data', icon: FaDatabase, color: '#003B57' },
];

interface KeyProps {
  tech: TechItem;
  position: [number, number, number];
  onHover: (tech: TechItem | null) => void;
}

const KeyboardKey: React.FC<KeyProps> = ({ tech, position, onHover }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const targetY = hovered ? position[1] - 0.2 : position[1];

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 15);
    }
  });

  const Icon = tech.icon;
  
  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[1.8, 1, 1.8]} // width, height, depth
        radius={0.2}
        smoothness={4}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (!hovered) playKeySound();
          setHover(true);
          onHover(tech);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHover(false);
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
      >
        <meshStandardMaterial 
          color={tech.color} 
          emissive={hovered ? tech.color : '#000000'}
          emissiveIntensity={hovered ? 0.6 : 0}
          roughness={0.3} 
          metalness={0.1} 
        />
        
        {/* Render Icon on Top of the keycap */}
        <Html 
          transform 
          position={[0, 0.51, 0]} 
          rotation={[-Math.PI / 2, 0, 0]} 
          distanceFactor={5}
          pointerEvents="none"
          occlude
        >
          <div style={{ 
            color: tech.color === '#ffffff' ? '#111' : '#fff', 
            fontSize: '32px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            filter: hovered ? 'drop-shadow(0 0 10px rgba(255,255,255,0.8))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}>
            <Icon />
          </div>
        </Html>
      </RoundedBox>
    </group>
  );
};

interface TechKeyboardProps {
  onHover: (tech: TechItem | null) => void;
}

const TechKeyboard: React.FC<TechKeyboardProps> = ({ onHover }) => {
  // Generate a grid for the 18 items. E.g. 3 rows of 6 keys.
  const rows = 3;
  const cols = 6;
  const spacingX = 2.0;
  const spacingZ = 2.0;
  
  // Calculate offset to center the grid
  const offsetX = -((cols - 1) * spacingX) / 2;
  const offsetZ = -((rows - 1) * spacingZ) / 2;

  const keyPositions = useMemo(() => {
    return techStackItems.map((tech, i) => {
      const r = Math.floor(i / cols);
      const c = i % cols;
      return {
        tech,
        position: [offsetX + c * spacingX, 0.5, offsetZ + r * spacingZ] as [number, number, number]
      };
    });
  }, [offsetX, offsetZ]);

  return (
    <group rotation={[0.4, -0.4, 0]}>
      {/* Base of the keyboard */}
      <RoundedBox 
        args={[cols * spacingX + 0.8, 0.8, rows * spacingZ + 0.8]} 
        position={[0, -0.4, 0]}
        radius={0.3}
        smoothness={4}
      >
        <meshStandardMaterial color="#0a070e" roughness={0.9} metalness={0.1} />
      </RoundedBox>

      {/* Keys */}
      {keyPositions.map((item) => (
        <KeyboardKey 
          key={item.tech.id} 
          tech={item.tech} 
          position={item.position} 
          onHover={onHover} 
        />
      ))}
    </group>
  );
};

export default TechKeyboard;
