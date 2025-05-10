import React from 'react';
import ResearchBlock from '../components/ResearchBlock';

const Research = () => {
  const researchItems = [
    {
      id: 1,
      title: 'GenOSIL: Generalized Optimal and Safe Robot Control using Parameter-Conditioned Imitation Learning',
      // if you placed your PDFs in public/papers, you can reference them like this:
      pdfUrl: '/papers/GenOSIL.pdf',
      // alternatively, if you keep them under src/papers, first import the PDF:
      // import GenOSILPDF from '../papers/GenOSIL.pdf'
      // then set pdfUrl: GenOSILPDF,
      webpageUrl: 'https://mumukshtayal.github.io/GenOSIL/',
      date: 'March 16, 2025',
      Author: 'Mumuksh Tayal, Manan Tayal, Ravi Prakash',
      description: 'Ensuring safe and generalizable control remains a fundamental challenge in robotics, particularly when deploying imitation learning in dynamic environments. Traditional behavior cloning (BC) struggles to generalize beyond its training distribution, as it lacks an understanding of the safety-critical reasoning behind expert demonstrations. To address this limitation, we propose GenOSIL, a novel imitation learning framework that explicitly incorporates environment parameters into policy learning via a structured latent representation. Unlike conventional methods that treat the environment as a black box, GenOSIL employs a variational autoencoder (VAE) to encode measurable safety parameters—such as obstacle position, velocity, and geometry—into a latent space that captures intrinsic correlations between expert behavior and environmental constraints. This enables the policy to infer the rationale behind expert trajectories rather than merely replicating them. We validate our approach on two robotic platforms—an autonomous ground vehicle and a Franka Emika Panda manipulator—demonstrating superior safety and goal-reaching performance compared to baseline methods.',
      isNew: true,
      Urlgif1: 'img/demo_1_fv.gif',
      Urlgif2: 'img/demo_1_sv.gif'
    }
  ];

  return (
    <div className="research-page">
      <div className="container">
        <h1 className="section-title">Research</h1>
        <p className="research-intro">
          At TAU Intelligence, we're pushing the boundaries of what's possible in AI-powered robotics. Our research focuses on developing foundation models that can generalize across different tasks and environments, enabling robots to learn continuously from their experiences.
        </p>
        
        <div className="research-blocks">
          {researchItems.map(item => (
            <ResearchBlock 
              key={item.id}
              title={item.title}
              pdfUrl={item.pdfUrl}
              webpageUrl={item.webpageUrl}
              date={item.date}
              Author={item.Author}
              description={item.description}
              isNew={item.isNew}
              Urlgif1={item.Urlgif1}
              Urlgif2={item.Urlgif2}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .research-page {
          padding: 2rem 0;
        }
        
        .research-intro {
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        
        .research-blocks {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Research;