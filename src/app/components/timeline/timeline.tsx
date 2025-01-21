import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconSchool, IconCode, IconCertificate } from '@tabler/icons-react';

const Timeline = () => {
  const items = [
    {
      icon: <IconSchool />,
      title: "Saint Francis High School",
      subtitle: "High School Diploma",
      date: "2019 -> 2023",
    },
    {
      icon: <IconSchool />,
      title: "Purdue University",
      subtitle: "B.S. in Computer Science",
      date: "2023 -> WIP",
    },
    {
      icon: <IconCode />,
      title: "ThetaRho.ai",
      subtitle: "Software Engineer Intern",
      date: "Summer 2024",
    },
    {
      icon: <IconCode />,
      title: "IDWR Office",
      subtitle: "Software Engineer Intern",
      date: "Summer 2024",
    },
    {
      icon: <IconCertificate />,
      title: "Coming Soon...",
      subtitle: "Coming Soon...",
      date: "Summer 2025",
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
            fontFamily: "'Inter', sans-serif",
          }}
          contentArrowStyle={{ borderRight: '7px solid #252525' }}
          date={item.date.toUpperCase()}
          iconStyle={{ background: '#252525', color: '#fff' }}
          icon={item.icon}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            {item.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 'normal',
            }}
          >
            {item.subtitle}
          </h4>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
