import React from 'react';
import type { StaticImageData } from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconSchool, IconCode } from '@tabler/icons-react';
import visa from "@/app/components/assets/visa.png";
import thetarho from "@/app/components/assets/thetarho.png";
import francis from "@/app/components/assets/francis.png";
import purdue from "@/app/components/assets/purdue.png";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  url: string;
  image: string | StaticImageData;
}

const Timeline: React.FC = () => {
  const items: TimelineItem[] = [
    {
      icon: <IconSchool />,
      title: "Saint Francis High School",
      subtitle: "High School Diploma",
      location: "Mountain View, CA",
      date: "2019 - 2023",
      url: "https://www.sfhs.com/",
      image: francis,
    },
    {
      icon: <IconSchool />,
      title: "Purdue University",
      subtitle: "B.S. in Computer Science, Concentration in Machine Learning",
      location: "West Lafayette, IN",
      date: "2023 - WIP",
      url: "https://www.purdue.edu/",
      image: purdue,
    },
    {
      icon: <IconCode />,
      title: "ThetaRho",
      subtitle: "Software Engineer Intern",
      location: "San Jose, CA",
      date: "Summer 2024",
      url: "https://www.thetarho.ai/",
      image: thetarho,
    },
    {
      icon: <IconCode />,
      title: "Visa",
      subtitle: "Software Engineer Intern",
      location: "Austin, TX",
      date: "Summer 2025",
      url: "https://www.visa.com/",
      image: visa,
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
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img
              src={typeof item.image === 'string' ? item.image : item.image.src}
              alt={item.title}
              style={{
                width: '64px',
                height: '64px',
                marginRight: '1rem',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
            <div>
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
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
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
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
