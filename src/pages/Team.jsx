import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Seugnette Schwim',
      role: 'PRINCIPAL ATTORNEY',
      degree: 'LLB, LLM Estate Law (NWU)',
      bio: 'Leads the firm with more than 12 years of experience in fiduciary law, specialising in generational wealth structuring for high-net-worth families, estate planning, wills, and trusts[cite: 4].'
    },
    {
      name: 'Rialize Stavast',
      role: 'ATTORNEY | CONVEYANCER | NOTARY',
      degree: 'LLB (NWU)',
      bio: 'Brings experience in property transfers, trust and estate transfers, and notarial work, with a particular passion for commercial property transfers[cite: 4].'
    },
    {
      name: 'Madeli Visser',
      role: 'ATTORNEY | CONVEYANCER | NOTARY',
      degree: 'LLB (UNISA)',
      bio: 'Works with transfers, bonds, servitudes, and notarial instruments[cite: 4]. Known for her persistence and practical approach to bringing complex matters to a successful conclusion[cite: 4].'
    },
    {
      name: 'Amanda Mokhachane',
      role: 'ADMINISTRATIVE SUPPORT',
      degree: 'BSc Mathematics & Computer Science',
      bio: 'Supports the firm by coordinating information across the practice, client onboarding, records management, digital systems, and operational coordination[cite: 5].'
    }
  ];

  return (
    <div className="page section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR PEOPLE</span>
          <h2>The Team</h2>
          <p>Combining fiduciary depth with property and notarial experience[cite: 4].</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <span className="degree">{member.degree}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}