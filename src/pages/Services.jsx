import React from 'react';

export default function Services() {
  return (
    <div className="page">
      {/* Top Green Curved Header */}
      <div className="about-curved-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>What we do</h1>
            <p className="hero-subtext">
              Our practice is organised around the legal events that shape ownership, family wealth and business continuity.
            </p>
            <p className="hero-subtext">
              We scope each instruction to the client’s needs and explain the applicable process at the outset.
            </p>
            
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="section">
        <div className="container">
          {/* Quote Section */}
          <div className="services-quote-box">
            <h3>“The best legal advice makes room for the person behind the instruction.”</h3>
          </div>

          {/* Services 2-Column Grid */}
          <div className="services-grid-2">
            <div className="service-item">
              <h3>Property transfers</h3>
              <p>
                Residential, commercial and agricultural property transfers, including transfers involving deceased estates, trusts and business entities.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The professional team also has experience with mortgage bond registrations and cancellations.
              </p>
            </div>

            <div className="service-item">
              <h3>Notarial services</h3>
              <p>
                Antenuptial contracts, notarial deeds, servitudes, notarial ties, cessions and other instruments requiring formal execution or registration.
              </p>
            </div>

            <div className="service-item">
              <h3>Wills, estates and succession</h3>
              <p>
                Estate planning, will drafting, deceased estate administration, trust deeds and amendments, and guidance on the transfer of assets to the next generation.
              </p>
            </div>

            <div className="service-item">
              <h3>Commercial and private client matters</h3>
              <p>
                Legal support for company and trust structures, agreements and connected property or succession questions, with the scope of each engagement agreed for the particular matter.
              </p>
            </div>
          </div>

          {/* Financial Institutions Section */}
          <div className="financial-referrers-section">
            <h3 className="section-title-gold">For financial institutions and professional referrers</h3>
            <p>
              We understand that a good client experience also depends on reliable instructions, complete documentation, clear points of contact and timely updates. We welcome discussions about specific service requirements and the appropriate practitioner for each mandate.
            </p>
          </div>

          {/* Bottom Callout Card */}
          <div className="service-bottom-card">
            <h3>One matter. A clear route forward.</h3>
            <p>
              From the first consultation to registration, signature or finalisation, the work is shaped around the client’s actual objective.
            </p>
          </div>

          {/* How We Work With You Section */}
<div className="how-we-work-section">
  <h2 className="how-we-work-title">How we work with you</h2>
  
  <ul className="process-list">
    <li>
      <span className="step-title">01 Listen and define</span>
      <span className="step-desc">
        We establish the client’s objectives, the nature of the mandate and the information required to begin.
      </span>
    </li>
    
    <li>
      <span className="step-title">02 Plan the legal route</span>
      <span className="step-desc">
        We identify key documents, parties, dependencies and the practitioner responsible for the matter.
      </span>
    </li>
    
    <li>
      <span className="step-title">03 Act and communicate</span>
      <span className="step-desc">
        We progress the work, explain material developments and coordinate with other parties where the instruction requires it.
      </span>
    </li>
    
    <li>
      <span className="step-title">04 Conclude with clarity</span>
      <span className="step-desc">
        We confirm the outcome, final documentation and any practical steps that follow completion.
      </span>
    </li>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
}