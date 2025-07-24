import React from 'react';
import * as motion from "motion/react-client";
import './Portfolio.css';
import image1 from '../assets/1.JPG';
import image2 from '../assets/2.jpeg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Growth Campaign',
      category: 'Digital Marketing',
      description: 'Increased online sales by 300% through targeted social media advertising and email marketing automation.',
      results: '+300% Sales Growth',
      image: '🛒',
      hue: '#094237',
      bgImage: image1
    },
    {
      id: 2,
      title: 'Brand Relaunch Strategy',
      category: 'Brand Development',
      description: 'Complete brand overhaul including logo design, messaging, and multi-channel campaign launch.',
      results: '+150% Brand Awareness',
      image: '🎨',
      hue: 20,
      bgImage: image2
    },
    {
      id: 3,
      title: 'Content Marketing Program',
      category: 'Content Strategy',
      description: 'Developed comprehensive content strategy resulting in 500% increase in organic traffic.',
      results: '+500% Organic Traffic',
      image: '📝',
      hue: 60,
      bgImage: image1
    },
    {
      id: 4,
      title: 'Social Media Transformation',
      category: 'Social Media',
      description: 'Transformed social media presence with engaging content and community management.',
      results: '+250% Engagement',
      image: '📱',
      hue: 120,
      bgImage: image2
    },
    {
      id: 5,
      title: 'Lead Generation Campaign',
      category: 'Performance Marketing',
      description: 'Multi-channel lead generation campaign using PPC, content marketing, and marketing automation.',
      results: '+400% Lead Quality',
      image: '🎯',
      hue: 205,
      bgImage: image1
    },
    {
      id: 6,
      title: 'Email Marketing Optimization',
      category: 'Email Marketing',
      description: 'Redesigned email campaigns with personalization and automation workflows.',
      results: '+180% Open Rate',
      image: '📧',
      hue: 260,
      bgImage: image2
    }
  ];

  const hue = (h) => {
    // If it's already a hex code, return it as is
    if (typeof h === 'string' && h.startsWith('#')) {
      return h;
    }
    // Otherwise, convert HSL number to HSL string
    return `hsl(${h}, 100%, 50%)`;
  };

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const PortfolioCard = ({ project, index }) => {
    const background = hue(project.hue);

    return (
      <motion.div
        className={`portfolio-card-container-${index}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          paddingTop: 20,
          marginBottom: 250,
        }}
      >
        <div 
          className="portfolio-splash"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background,
            clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
          }}
        />
        <motion.div 
          className="portfolio-card-animated" 
          variants={cardVariants}
          style={{
            width: 350,
            height: 450,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundImage: `url(${project.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transformOrigin: "10% 60%",
            padding: "30px 20px",
          }}
        >
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">My Portfolio</h2>
        </div>
        <div style={{
          margin: "50px auto",
          maxWidth: 600,
          paddingBottom: 100,
          width: "100%",
        }}>
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
