import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: 'Property Transfers',
      icon: '🏛️',
      description: 'Residential, commercial and agricultural property transfers, including transfers involving deceased estates, trusts, and business entities[cite: 3]. Experience with mortgage bond registrations and cancellations[cite: 3].'
    },
    {
      title: 'Wills, Estates & Succession',
      icon: '📜',
      description: 'Estate planning, will drafting, deceased estate administration, trust deeds and amendments, and guidance on the transfer of assets to the next generation[cite: 3].'
    },
    {
      title: 'Notarial Services',
      icon: '🖋️',
      description: 'Antenuptial contracts, notarial deeds, servitudes, notarial ties, cessions, and other instruments requiring formal execution or registration[cite: 3].'
    },
    {
      title: 'Commercial & Private Client',
      icon: '💼',
      description: 'Legal support for company and trust structures, agreements, and connected property or succession questions, with the scope of each engagement agreed for the particular matter[cite: 3].'
    }
  ];

  return (
    <div className="page section bg-light">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PRACTICE AREAS</span>
          <h2>What We Do</h2>
          <p>Our practice is organised around the legal events that shape ownership, family wealth and business continuity[cite: 3].</p>
        </div>

        <div className="cards-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}