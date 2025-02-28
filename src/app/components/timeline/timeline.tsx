import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconSchool, IconCode } from '@tabler/icons-react';

const Timeline = () => {
  const items = [
    {
      icon: <IconSchool />, 
      title: "Saint Francis High School", 
      subtitle: "High School Diploma", 
      location: "Mountain View, CA",
      date: "2019 - 2023", 
      url: "https://www.sfhs.com/"
    },
    {
      icon: <IconSchool />, 
      title: "Purdue University", 
      subtitle: "B.S. in Computer Science, Concentration in Machine Learning", 
      location: "West Lafayette, IN",
      date: "2023 - WIP", 
      url: "https://www.purdue.edu/"
    },
    {
      icon: <IconCode />, 
      title: "ThetaRho", 
      subtitle: "Software Engineer Intern", 
      location: "San Jose, CA",
      date: "Summer 2024", 
      url: "https://www.thetarho.ai/"
    },
    {
      icon: <IconCode />, 
      title: "Visa", 
      subtitle: "Software Engineer Intern", 
      location: "Austin, TX",
      date: "Summer 2025", 
      url: "https://www.visa.com/"
    },
  ];

  return (
    <VerticalTimeline lineColor="#fff" layout="2-columns">
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#252525',
            color: '#fff',
            fontFamily: "Roboto Mono",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          }}
          contentArrowStyle={{ borderRight: '7px solid #252525' }}
          date={item.date.toUpperCase()}
          iconStyle={{ background: '#252525', color: '#fff' }}
          icon={item.icon}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontSize: "18px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontSize: "14px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 'normal',
            }}
          >
            {item.subtitle}
          </h4>
          {item.location && (
            <p
              className="vertical-timeline-element-location"
              style={{
                fontSize: "12px",
                fontFamily: "'Inter', sans-serif",
                fontStyle: "italic",
                color: "#ccc",
                marginTop: "5px",
              }}
            >
              {item.location}
            </p>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
