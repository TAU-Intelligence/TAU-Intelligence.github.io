import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1>From Trusted Autonomy to Safe Intelligence</h1>
          <p className="subtitle">
            For real world uncertain systems
          </p>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Our Focus Areas</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image bg-img-1">
                {/* GIF added here */}
                <img
                  src="/img/stoch-safety-critical.gif"
                  alt="Safety Critical Systems"
                  className="feature-gif"
                />
              </div>
              <h3>Safety Critical Systems</h3>
              <p>Developing robust controllers for safety critical applications tailored for robotic perception, planning, and control.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image bg-img-2">
                {/* GIF added here */}
                <img
                  src="/img/demo_1_sv.gif"
                  alt="Optimal Manipulation"
                  className="feature-gif"
                />
              </div>
              <h3>Optimal Manipulation Task</h3>
              <p>Robust algorithms for precise, efficient robot manipulation in uncertain settings—covering grasp planning, trajectory optimization, and adaptive feedback control.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image bg-img-3">
                {/* GIF added here */}
                <img
                  src="/img/multi-agent.gif"
                  alt="Multi-Robot Systems"
                  className="feature-gif"
                />
              </div>
              <h3>Multi-Robot Systems</h3>
              <p>Designing scalable approaches for coordinating multiple robots working together.</p>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2 className="section-title">About Us</h2>
          <p>
          <b>TAU Intelligence</b> stands for <b>Trusted Autonomy in Uncertain Environments</b>. We build safe, intelligent systems that operate reliably in the real world—where unpredictability isn't a bug, it's the default.</p>
            
          <p>Founded by researchers and engineers with deep roots in robotics, AI, and control theory, TAU Intelligence bridges the gap between academic innovation and industry-grade deployment. From custom safety-critical controllers to intelligent simulation environments, we help companies design, verify, and deploy autonomous systems that don't just work in theory—they work in reality.</p>
            
          <p>Whether you're a robotics startup building the next generation of autonomous machines, or an industrial automation team tackling high-risk, high-complexity tasks, our mission is the same:</p>
          <p><b> To make your autonomy smarter, safer, and shockproof. </b></p>
          <p><b> Safe intelligence is not a luxury. It's the future. And we're building it. </b></p>
        </div>
      </div>
      <style jsx>{`
        .home-page {
          padding: 2rem 0;
        }
        
        .hero-section {
          text-align: center;
          padding: 4rem 0;
        }
        
        .hero-section h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .subtitle {
          font-size: 1.2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .features-section {
          padding: 2rem 0;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background-color: rgba(230, 116, 23, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(230, 116, 23, 0.3);
        }
        
        .feature-image {
          position: relative;
          height: 200px;
          border-radius: 4px;
          margin-bottom: 1rem;
          background-size: cover;
          background-position: center;
        }
        
        .bg-img-1 {
          background-image: url('/api/placeholder/600/400');
        }
        
        .bg-img-2 {
          background-image: url('/api/placeholder/600/400');
        }
        
        .bg-img-3 {
          background-image: url('/api/placeholder/600/400');
        }

        /* GIF styling */
        .feature-gif {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .feature-card h3 {
          margin-bottom: 0.5rem;
        }
        
        .about-section {
          padding: 2rem 0;
        }
        
        .about-section p {
          margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;