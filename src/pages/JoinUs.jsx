import React from 'react';
import JobListing from '../components/JobListing';

const JoinUs = () => {
  const jobListings = [
    // {
    //   id: 1,
    //   title: 'Senior Research Scientist - Robotics',
    //   location: 'Bangalore, KA ',
    //   description: 'We are looking for experienced researchers with a strong background in machine learning and robotics to work on our foundation models for robotic control.'
    // },
    // {
    //   id: 2,
    //   title: 'Software Engineer - Robotics Frameworks',
    //   location: 'Bangalore, KA ',
    //   description: 'Help us build the software infrastructure that powers our robotic systems and enables rapid experimentation and deployment.'
    // },
    // {
    //   id: 3,
    //   title: 'Robotics Hardware Engineer',
    //   location: 'Bangalore, KA',
    //   description: 'Design and develop the next generation of robotic hardware platforms that will serve as the physical embodiment of our AI systems.'
    // },
    // {
    //   id: 4,
    //   title: 'ML Engineering Intern',
    //   location: 'Bangalore, KA / Remote',
    //   description: 'Join our team for a 12-week internship working on cutting-edge machine learning for robotics applications.'
    // },
    // {
    //   id: 5,
    //   title: 'Research Engineer - Reinforcement Learning',
    //   location: 'Bangalore, KA ',
    //   description: 'Work on reinforcement learning algorithms that enable robots to learn complex skills from limited data and human feedback.'
    // }
  ];

  return (
    <div className="join-us-page">
      <div className="container">
        <h1 className="section-title">Join Us</h1>
        <div className="join-us-intro">
          {/* <p>
            We're building a team of extraordinary researchers, engineers, and company-builders who are passionate about creating general-purpose AI systems for the physical world. If you're excited about pushing the boundaries of what's possible in robotics and AI, we'd love to hear from you.
          </p> */}
          <p>
            We will let you know when we have open positions. In the meantime, feel free to send us your resume and a brief note about why you're interested in TAU Intelligence.
          </p>
          
          {/* <h2 className="values-title">Our Values</h2>
          <ul className="values-list">
            <li><strong>Scientific Excellence:</strong> We pursue groundbreaking research and hold ourselves to the highest standards.</li>
            <li><strong>Practical Impact:</strong> We're focused on building technology that solves real-world problems.</li>
            <li><strong>Open Collaboration:</strong> We believe in open science and the power of diverse perspectives.</li>
            <li><strong>Long-term Thinking:</strong> We're tackling fundamental challenges with the potential for lasting impact.</li>
          </ul> */}
        </div>
        
        {/* <h2 className="openings-title">Current Openings</h2>
        <div className="job-listings">
          {jobListings.map(job => (
            <JobListing 
              key={job.id}
              title={job.title}
              location={job.location}
              description={job.description}
            />
          ))}
        </div> */}
        
        {/* <div className="general-application">
          <h3>Don't see the right role?</h3>
          <p>We're always interested in meeting exceptional people. Send us your resume and a brief note about why you're interested in TAU Intelligence.</p>
          <button className="general-apply-button">Submit General Application</button>
        </div> */}
      </div>
      <style jsx>{`
        .join-us-page {
          padding: 2rem 0;
        }
        
        .join-us-intro {
          margin-bottom: 3rem;
        }
        
        .join-us-intro p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .values-title {
          font-size: 1.8rem;
          margin: 2rem 0 1rem;
          color: var(--orange);
        }
        
        .values-list {
          list-style-position: inside;
          margin-bottom: 2rem;
        }
        
        .values-list li {
          margin-bottom: 0.5rem;
        }
        
        .openings-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--orange);
        }
        
        .general-application {
          margin-top: 3rem;
          background-color: rgba(230, 116, 23, 0.1);
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }
        
        .general-application h3 {
          margin-bottom: 1rem;
        }
        
        .general-application p {
          margin-bottom: 1.5rem;
        }
        
        .general-apply-button {
          background-color: var(--orange);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 4px;
          font-family: 'Roboto Mono', monospace;
          transition: background-color 0.3s ease;
        }
        
        .general-apply-button:hover {
          background-color: #c05e12;
        }
      `}</style>
    </div>
  );
};

export default JoinUs;