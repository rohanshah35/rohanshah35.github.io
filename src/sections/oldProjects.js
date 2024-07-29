import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Projects.css';
import image2 from './project-images/image2.jpg';
import Modal from '../components/Modal';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Projects = () => {
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState([false, false, false, false, false, false]);

  const [mouseDownPosition, setMouseDownPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef(null);
  const imageRefs = useRef([]);

  const throttle = (callback, limit) => {
    let waiting = false;
    return (...args) => {
      if (!waiting) {
        callback(...args);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  };

  const handleMouseMove = useCallback(
    throttle((e) => {
      if (mouseDownAt === null) return;
  
      const mouseDelta = mouseDownAt - e.clientX;
      const maxDelta = trackRef.current.offsetWidth / 2;
      let nextPercentage = prevPercentage + (mouseDelta / maxDelta) * -100;
  
      nextPercentage = Math.max(-100, Math.min(0, nextPercentage));
  
      // Check if the mouse has moved more than 5 pixels
      if (Math.abs(mouseDownPosition - e.clientX) > 5) {
        setIsDragging(true);
      }
  
      setPercentage(nextPercentage);
      setProgress(Math.abs(nextPercentage));
    }, 16),
    [mouseDownAt, prevPercentage, mouseDownPosition]
  );

  const handleMouseUp = useCallback(() => {
    setMouseDownAt(null);
    setPrevPercentage(percentage);
    setMouseDownPosition(null);
  }, [percentage]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = useCallback(
    throttle((e) => {
      const touchDelta = touchStartX - e.touches[0].clientX;
      const maxDelta = trackRef.current.offsetWidth / 2;
      let nextPercentage = prevPercentage + (touchDelta / maxDelta) * -100;

      nextPercentage = Math.max(-100, Math.min(0, nextPercentage));

      setPercentage(nextPercentage);
      setProgress(Math.abs(nextPercentage));
    }, 16),
    [touchStartX, prevPercentage]
  );

  const handleTouchEnd = useCallback(() => {
    setTouchStartX(null);
    setPrevPercentage(percentage);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchMove, percentage]);

  useEffect(() => {
    const track = trackRef.current;
    const images = imageRefs.current;

    track.animate(
      { transform: `translate(${percentage}%, -50%)` },
      { duration: 1200, fill: 'forwards' }
    );

    images.forEach((image) => {
      image.animate(
        { objectPosition: `${100 + percentage}% center` },
        { duration: 1200, fill: 'forwards' }
      );
    });

    if (mouseDownAt !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    if (touchStartX !== null) {
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [percentage, mouseDownAt, touchStartX, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const handleImageClick = (index) => {
    if (!isDragging) {
      let newModalOpen = [...modalOpen];
      newModalOpen[index] = true;
      setModalOpen(newModalOpen);
    }
    setIsDragging(false);
  };

  const handleCloseModal = (index) => {
    let newModalOpen = [...modalOpen];
    newModalOpen[index] = false;
    setModalOpen(newModalOpen);
  };

  const handleWheel = useCallback(
    (e) => {
      const scrollDelta = e.deltaY;
      const maxPercentage = -100;
      const minPercentage = 0;

      let nextPercentage = percentage - (scrollDelta / trackRef.current.offsetWidth) * 100;
      nextPercentage = Math.max(maxPercentage, Math.min(minPercentage, nextPercentage));

      if ((nextPercentage <= maxPercentage - 1 && scrollDelta > 0) || (nextPercentage >= minPercentage + 1 && scrollDelta < 0)) {
        return;
      }

      setPercentage(nextPercentage);
      setPrevPercentage(nextPercentage);
      setProgress(Math.abs(nextPercentage));

      e.preventDefault();
    },
    [percentage]
  );

  useEffect(() => {
    const track = trackRef.current;

    track.addEventListener('wheel', handleWheel);

    return () => {
      track.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return (
    <div id="projects" className="projects">
      <div className="progress" style={{ width: 75, height: 75 }}>
        <CircularProgressbar value={Math.round(progress)} strokeWidth={2} text={`${Math.round(progress)}%`} styles={buildStyles({

        strokeLinecap: 'butt',

        textSize: '26px',

        pathTransitionDuration: 0.5,

        pathColor: 'black',
        textColor: 'black',
        trailColor: '#FAFAFA',
        backgroundColor: '#FAFAFA',
      })}/>
      </div>
      <div
        id="image-track"
        ref={trackRef}
        onMouseDown={(e) => {
          e.preventDefault();
          setMouseDownAt(e.clientX);
          setMouseDownPosition(e.clientX);
          setIsDragging(false);
        }}
        onTouchStart={handleTouchStart}
        style={{ transform: `translate(${percentage}%, -50%)` }}
      >
        {/* Render project images */}
        {[image2, image2, image2, image2, image2, image2].map((image, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="image"
            src={image}
            draggable="false"
            alt={`Project ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {modalOpen.map((isOpen, index) => (
        <Modal key={index} isOpen={isOpen} onClose={() => handleCloseModal(index)}>
          {index === 0 && <Project1 />}
          {index === 1 && <Project2 />}
          {index === 2 && <Project3 />}
          {/* Add more projects as needed */}
        </Modal>
      ))}
    </div>
  );
};

export default Projects;