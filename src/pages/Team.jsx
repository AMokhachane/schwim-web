import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Seugnette Schwim',
      role: 'PRINCIPAL ATTORNEY',
      degree: 'LLB, LLM Estate Law (NWU)',
      image: '/seugnette.png',
      bio: 'Leads the firm with more than 12 years of experience in fiduciary law, specialising in generational wealth structuring for high-net-worth families, estate planning, wills, and trusts.'
    },
    {
      name: 'Rialize Stavast',
      role: 'ATTORNEY | CONVEYANCER | NOTARY',
      degree: 'LLB (NWU)',
      image: '/Rialize.png',
      bio: 'Brings experience in property transfers, trust and estate transfers, and notarial work, with a particular passion for commercial property transfers.'
    },
    {
      name: 'Madeli Visser',
      role: 'ATTORNEY | CONVEYANCER | NOTARY',
      degree: 'LLB (UNISA)',
      image: '/Madeli.png',
      bio: 'Works with transfers, bonds, servitudes, and notarial instruments. Known for her persistence and practical approach to bringing complex matters to a successful conclusion.'
    }
  ];

  return (
    <div className="page section">
      <div className="container">
        {/* Editorial Team Container */}
        <div className="editorial-team-card">
          {/* Header */}
          <div className="editorial-header">
            <h2>
              Meet the <span className="script-font">Team</span>
            </h2>
          </div>

          {/* Member Rows */}
          <div className="editorial-list">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="editorial-row">
                <div className="editorial-photo-col">
                  <div className="editorial-photo-box">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
                <div className="editorial-info-col">
                  <h3>{member.name}</h3>
                  <p className="editorial-role">{member.role}</p>
                  <p className="editorial-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="editorial-footer">
            <span>schwimattorneys.co.za</span>
          </div>
        </div>
      </div>
    </div>
  );
}