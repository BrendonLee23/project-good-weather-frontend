import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

// Keyframes
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const fallAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(60px);
    opacity: 0;
  }
`

// Styled components
const CloudContainer = styled.div`
  position: relative;
  width: 20rem; /* Dobrei o tamanho do container (era 10rem) */
  height: 20rem; /* Dobrei o tamanho do container (era 10rem) */
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloudSVG = styled.svg`
  animation: ${pulseAnimation} 2s infinite ease-in-out;
  transform-origin: center;
`

const Raindrop = styled.div`
  position: absolute;
  top: 65%;
  width: 2.5px;
  height: 5px;
  background-color: #38bdf8;
  border-radius: 9999px;
  animation: ${fallAnimation} 1s ease-in forwards;
  left: ${props => props.left};
  animation-delay: ${props => props.delay}s;
`

export default function AnimatedCloud() {
  const [raindrops, setRaindrops] = useState([])
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop = {
        id: Math.random(),
        delay: Math.random() * 0.5,
        left: `${Math.random() * 80 + 10}%`
      }
      
      setRaindrops(prev => [...prev.slice(-8), newDrop])
      
      setTimeout(() => {
        setRaindrops(prev => prev.filter(d => d.id !== newDrop.id))
      }, 1000)
      
    }, 600)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <CloudContainer>
      <CloudSVG 
        viewBox="0 0 200 120" 
        width="240" /* Dobrei o tamanho da nuvem (era 120) */
        height="160" /* Dobrei o tamanho da nuvem (era 80) */
      >
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f5f5" />
            <stop offset="100%" stopColor="#d4d4d4" />
          </linearGradient>
        </defs>
        <path
          d="M173.5,69.3c0.3-1.5,0.5-3,0.5-4.6c0-12.8-10.4-23.2-23.2-23.2c-2.8,0-5.5,0.5-8,1.4c-4.5-17.1-20.1-29.8-38.8-29.8
          c-22.1,0-40,17.9-40,40c0,0.4,0,0.9,0,1.3c-0.5,0-1-0.1-1.5-0.1c-18.6,0-33.7,15.1-33.7,33.7c0,18.6,15.1,33.7,33.7,33.7h104.8
          c15.8,0,28.6-12.8,28.6-28.6C196,81.5,186.5,71.2,173.5,69.3z"
          fill="url(#cloudGradient)"
          stroke="#444"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </CloudSVG>
      
      {raindrops.map((drop) => (
        <Raindrop
          key={drop.id}
          left={drop.left}
          delay={drop.delay}
        />
      ))}
    </CloudContainer>
  )
}