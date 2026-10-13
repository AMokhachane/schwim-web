import React from 'react';

export default function About() {
  return (
    <div className="page">
      {/* Top Green Curved Header */}
      <div className="about-curved-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Who is<br />Schwim Attorneys?</h1>
            <p className="hero-subtext">
              Legal counsel for the decisions that shape your property, business and family legacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area Below (Light Background) */}
      <div className="section">
  <div className="container">
    {/* Full-width free writing paragraph section */}
    <div className="about-narrative">
      <p>
        Schwim Attorneys is an independent legal practice led by Seugnette Schwim. We work with people at defining moments: acquiring property, building a business, planning for a family's future or settling an estate after a loss.
      </p>
      <p>
        Each matter has legal requirements. Each also has a human story, a timetable and decisions that deserve careful attention. The firm began with a particular strength in estate and succession work. Today, its professional team brings that perspective alongside conveyancing and notarial expertise, with particular experience in commercial property transfers, negotiations and due diligence.
      </p>
      
    </div>

    {/* Vision and Mission 2-Column Grid */}
          <div className="vision-mission-grid">
            <div className="vm-item">
              <h3 className="vm-title">Vision</h3>
              <p>
                To be a trusted legal partner to individuals, families and businesses, known for combining exceptional professional judgment with genuine personal care.
              </p>
            </div>
            <div className="vm-item">
              <h3 className="vm-title">Mission</h3>
              <p>
                We provide clear, considered legal advice tailored to each client's circumstances. Through specialist expertise, responsive service and lasting relationships, we help our clients make confident decisions, protect what matters to them and plan for the future.
              </p>
            </div>
          </div>

   
  </div>
</div>
    </div>
  );
}