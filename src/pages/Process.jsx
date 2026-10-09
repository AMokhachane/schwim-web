import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Listen and Define',
      desc: "We establish the client's objectives, the nature of the mandate and the information required to begin[cite: 5]."
    },
    {
      num: '02',
      title: 'Plan the Legal Route',
      desc: 'We identify key documents, parties, dependencies and the practitioner responsible for the matter[cite: 5].'
    },
    {
      num: '03',
      title: 'Act and Communicate',
      desc: 'We progress the work, explain material developments and coordinate with other parties where required[cite: 5].'
    },
    {
      num: '04',
      title: 'Conclude with Clarity',
      desc: 'We confirm the outcome, final documentation and any practical steps that follow completion[cite: 5].'
    }
  ];

  return (
    <div className="page section bg-dark">
      <div className="container">
        <div className="section-header light">
          <span className="section-subtitle">OUR METHOD</span>
          <h2>How We Work With You</h2>
          <p>One matter. A clear route forward[cite: 3].</p>
        </div>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}