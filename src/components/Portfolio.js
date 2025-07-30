import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
import image1 from '../assets/1.JPG';
import image2 from '../assets/2.jpeg';

const projects = [
	{
		id: 1,
		title: 'E-commerce Growth Campaign',
		category: 'Digital Marketing',
		description:
			'Increased online sales by 300% through targeted social media advertising and email marketing automation.',
		results: '+300% Sales Growth',
		image: '🛒',
		hue: '#094237',
		bgImage: image1,
	},
	{
		id: 2,
		title: 'Brand Relaunch Strategy',
		category: 'Brand Development',
		description:
			'Complete brand overhaul including logo design, messaging, and multi-channel campaign launch.',
		results: '+150% Brand Awareness',
		image: '🎨',
		hue: 20,
		bgImage: image2,
	},
	{
		id: 3,
		title: 'Content Marketing Program',
		category: 'Content Strategy',
		description:
			'Developed comprehensive content strategy resulting in 500% increase in organic traffic.',
		results: '+500% Organic Traffic',
		image: '📝',
		hue: 60,
		bgImage: image1,
	},
	{
		id: 4,
		title: 'Social Media Transformation',
		category: 'Social Media',
		description:
			'Transformed social media presence with engaging content and community management.',
		results: '+250% Engagement',
		image: '📱',
		hue: 120,
		bgImage: image2,
	},
	{
		id: 5,
		title: 'Lead Generation Campaign',
		category: 'Performance Marketing',
		description:
			'Multi-channel lead generation campaign using PPC, content marketing, and marketing automation.',
		results: '+400% Lead Quality',
		image: '🎯',
		hue: 205,
		bgImage: image1,
	},
	{
		id: 6,
		title: 'Email Marketing Optimization',
		category: 'Email Marketing',
		description:
			'Redesigned email campaigns with personalization and automation workflows.',
		results: '+180% Open Rate',
		image: '📧',
		hue: 260,
		bgImage: image2,
	},
];

const hue = (h) => {
	if (typeof h === 'string' && h.startsWith('#')) {
		return h;
	}
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
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const PortfolioCard = ({ project, index }) => {
	const background = hue(project.hue);

	return (
		<motion.div
			className={`portfolio-card portfolio-card-container-${index}`}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ amount: 0.8 }}
			style={{
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'stretch',
				position: 'relative',
				paddingTop: 0,
				marginBottom: 0,
			}}
			variants={cardVariants}
		>
			<div
				className="portfolio-splash"
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background,
					zIndex: 0,
					opacity: 0.15,
				}}
			/>
			<div
				className="portfolio-image"
				style={{
					backgroundImage: `url(${project.bgImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					height: 200,
					position: 'relative',
					zIndex: 1,
				}}
			>
				<span className="portfolio-icon">{project.image}</span>
			</div>
			<div
				className="portfolio-content"
				style={{ position: 'relative', zIndex: 1 }}
			>
				<span className="portfolio-category">{project.category}</span>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<div className="portfolio-result">
					<strong>{project.results}</strong>
				</div>
			</div>
		</motion.div>
	);
};

const Portfolio = () => (
	<section id="portfolio" className="portfolio">
		<div className="container">
			<div className="text-center mb-4">
				<h2 className="section-title">My Portfolio</h2>
			</div>
			<div className="portfolio-grid">
				{projects.map((project, index) => (
					<PortfolioCard key={project.id} project={project} index={index} />
				))}
			</div>
		</div>
	</section>
);

export default Portfolio;
