import React from 'react';

export default function About() {
  return (
    <div className="page section">
      <div className="container grid-2">
        <div className="about-text">
          <span className="section-subtitle">WHO IS SCHWIM ATTORNEYS?</span>
          <h2>Legal counsel for the decisions that shape your property, business and family legacy.</h2>
          <p>
            Schwim Attorneys is an independent legal practice led by Seugnette Schwim[cite: 2]. We work with people at defining moments: acquiring property, building a business, planning for a family's future or settling an estate after a loss[cite: 2].
          </p>
          <p>
            Based at 60 Breë Street in Parys, with satellite offices in Pretoria, our manner of practice is accessible and exacting: understand the client first, explain the route ahead and take responsibility for the detail[cite: 2].
          </p>
        </div>
        <div className="about-card">
          <h3>Personal matters deserve personal attention</h3>
          <p className="quote">"What matters to you — matters to us."</p>
          <ul className="about-pillars">
            <li><strong>Individual Attention:</strong> You are never just a file number[cite: 2]. We take the time to understand your circumstances[cite: 2].</li>
            <li><strong>Professional Expertise:</strong> Specialist knowledge and sound judgment for complex decisions[cite: 2].</li>
            <li><strong>Responsive Service:</strong> Clear answers and dependable support[cite: 2].</li>
            <li><strong>Holistic Outlook:</strong> Considering how estate planning, tax, investments, and structures interact[cite: 2].</li>
          </ul>
        </div>
      </div>
    </div>
  );
}