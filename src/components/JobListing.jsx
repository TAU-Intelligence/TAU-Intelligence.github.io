import React from 'react';

const JobListing = ({ title, location, description }) => {
  return (
    <div className="job-listing">
      <div className="job-content">
        <h3 className="job-title">{title}</h3>
        <span className="job-location">{location}</span>
        <p className="job-description">{description}</p>
        <button className="apply-button">Apply Now</button>
      </div>
      <style jsx>{`
        .job-listing {
          background-color: var(--light-orange);
          border-radius: 4px;
          margin-bottom: 1.5rem;
          color: #000;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .job-listing:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(230, 116, 23, 0.3);
        }
        
        .job-content {
          padding: 1.5rem;
        }
        
        .job-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .job-location {
          font-size: 1rem;
          opacity: 0.8;
          display: block;
          margin-bottom: 1rem;
        }
        
        .job-description {
          margin-bottom: 1.5rem;
        }
        
        .apply-button {
          background-color: var(--orange);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 4px;
          font-family: 'Roboto Mono', monospace;
          transition: background-color 0.3s ease;
        }
        
        .apply-button:hover {
          background-color: #c05e12;
        }
      `}</style>
    </div>
  );
};

export default JobListing;