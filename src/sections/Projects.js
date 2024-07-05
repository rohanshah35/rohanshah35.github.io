import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Projects.css';
import image1 from './project-images/image1.jpg';
import image2 from './project-images/image2.jpg';
import { ChevronDown } from 'react-bootstrap-icons';

const Projects = () => {
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);

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

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = useCallback(throttle((e) => {
    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = trackRef.current.offsetWidth / 2;
    let nextPercentage = prevPercentage + (mouseDelta / maxDelta) * -100;

    nextPercentage = Math.max(-100, Math.min(0, nextPercentage));

    setPercentage(nextPercentage);
    setProgress(Math.abs(nextPercentage));
  }, 16), [mouseDownAt, prevPercentage]);

  const handleMouseUp = useCallback(() => {
    setMouseDownAt(null);
    setPrevPercentage(percentage);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove, percentage]);

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [percentage, mouseDownAt, handleMouseMove, handleMouseUp]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setMouseDownAt(e.clientX);
  };

  return (
    <div id="projects" className="projects">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-text"> {Math.round(progress)}% </div>
      <div
        id="image-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        style={{ transform: `translate(${percentage}%, -50%)` }}
      >
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          className="image"
          src={image2}
          draggable="false"
          alt="Project 1"
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          className="image"
          src={image2}
          draggable="false"
          alt="Project 2"
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          className="image"
          src={image2}
          draggable="false"
          alt="Project 3"
        />
        <img
          ref={(el) => (imageRefs.current[3] = el)}
          className="image"
          src={image2}
          draggable="false"
          alt="Project 4"
        />
        <img
          ref={(el) => (imageRefs.current[4] = el)}
          className="image"
          src={image2}
          draggable="false"
          alt="Project 5"
        />
        <img
          ref={(el) => (imageRefs.current[5] = el)}
          className="image"
          src={image2}
          draggable="false"
          alt="Project 6"
        />
      </div>

      <div className="down-contact-container">
        <button className="down-contacts" onClick={scrollToContact}>
          <ChevronDown />
        </button>
      </div>

    </div>
  );
};

export default Projects;
