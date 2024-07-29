import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Projects.css';
import image2 from './project-images/image2.jpg';
import Modal from '../components/Modal';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Add projects
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';

const Projects = () => {
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(Array(4).fill(false));
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef(null);
  const imageRefs = useRef([]);

  const handleMove = useCallback((clientX) => {
    if (mouseDownAt === null) return;

    const delta = mouseDownAt - clientX;
    const maxDelta = trackRef.current.offsetWidth;
    const nextPercentage = Math.max(-100, Math.min(0, prevPercentage + (delta / maxDelta) * -100));

    if (Math.abs(mouseDownAt - clientX) > 5) {
      setIsDragging(true);
    }

    setPercentage(nextPercentage);
    setProgress(Math.abs(nextPercentage));
  }, [mouseDownAt, prevPercentage]);

  const handleEnd = useCallback(() => {
    setMouseDownAt(null);
    setTouchStartX(null);
    setPrevPercentage(percentage);
  }, [percentage]);

  useEffect(() => {
    const track = trackRef.current;
    const images = imageRefs.current;

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    if (mouseDownAt !== null || touchStartX !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    const animation = { duration: 1200, fill: 'forwards' };
    track.animate({ transform: `translate(${percentage}%, -50%)` }, animation);
    images.forEach((image, index) => {
      if (image) {
        image.animate({ objectPosition: `${100 + percentage}% center` }, animation);
      }
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [percentage, mouseDownAt, touchStartX, handleMove, handleEnd]);

  const handleImageClick = (index) => {
    if (!isDragging) {
      setModalOpen(prev => prev.map((_, i) => i === index ? true : false));
    }
    setIsDragging(false);
  };

  const handleWheel = useCallback((e) => {
    const scrollDelta = e.deltaY;
    const maxDelta = trackRef.current.offsetWidth;
    let nextPercentage = percentage - (scrollDelta / maxDelta) * 100;
    nextPercentage = Math.max(-100, Math.min(0, nextPercentage));

    setPercentage(nextPercentage);
    setPrevPercentage(nextPercentage);
    setProgress(Math.abs(nextPercentage));

    e.preventDefault();
  }, [percentage]);

  useEffect(() => {
    const track = trackRef.current;
    track.addEventListener('wheel', handleWheel);
    return () => track.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Change project images here
  const images = [image2, image2, image2, image2];
  if (imageRefs.current.length !== images.length) {
    imageRefs.current = Array(images.length).fill(null);
  }

  return (
    <div id="projects" className="projects">
      <div className="progress" style={{ width: 80, height: 80 }}>
        <CircularProgressbar 
          value={Math.round(progress)} 
          strokeWidth={2} 
          text={`${Math.round(progress)}%`} 
          styles={buildStyles({
            // strokeLinecap: 'butt',
            textSize: '26px',
            pathTransitionDuration: 0.5,
            pathColor: 'black',
            textColor: 'black',
            trailColor: '#FAFAFA',
            backgroundColor: '#FAFAFA',
          })}
        />
      </div>
      <div
        id="image-track"
        ref={trackRef}
        onMouseDown={(e) => {
          e.preventDefault();
          setMouseDownAt(e.clientX);
          setIsDragging(false);
        }}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        style={{ transform: `translate(${percentage}%, -50%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
              console.log(`Image ref ${index}:`, el);
            }}
            className="image"
            src={image}
            draggable="false"
            alt={`Project ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {modalOpen.map((isOpen, index) => (
        isOpen && (
          <Modal key={index} isOpen={isOpen} onClose={() => setModalOpen(prev => prev.map((_, i) => i === index ? false : _))}>
            {index === 0 && <Project1 />}
            {index === 1 && <Project2 />}
            {index === 2 && <Project3 />}
            {index === 3 && <Project4 />}
          </Modal>
        )
      ))}
    </div>
  );
};

export default Projects;
