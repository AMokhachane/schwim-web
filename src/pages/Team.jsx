import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Seugnette Schwim',
      role: 'PRINCIPAL ATTORNEY',
      degree: 'LLB LLM ESTATE LAW',
      image: '/seugnette.png',
      bio: 'Seugnette leads the firm and has more than 12 years of experience in fiduciary law, specialising in generational wealth structuring for high-net-worth families. Her work centres on estate planning, wills, trusts and asset structuring matters. She holds an LLB and an LLM in Estate Law from North West University.'
    },
    {
      name: 'Rialize Stavast',
      role: 'ATTORNEY',
      degree: 'CONVEYANCER | NOTARY',
      image: '/Rialize.png',
      bio: 'Rialize brings experience in property transfers, trust and estate transfers and notarial work. She is especially passionate about commercial property transfers. She holds an LLB from North West University and has worked across legal practice and conveyancing operations.'
    },
    {
      name: 'Madeli Visser',
      role: 'ATTORNEY',
      degree: 'CONVEYANCER | NOTARY',
      image: '/Madeli.png',
      bio: 'Madeli is an admitted attorney, conveyancer and notary and works with transfers, bonds, servitudes and notarial instruments. Known for her persistence and practical approach, Madeli works to bring complex matters to a successful conclusion. She holds an LLB from the University of South Africa.'
    }
  ];

  return (
    <div className="page">
      {/* Top Green Curved Header */}
      <div className="about-curved-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>The People</h1>
            <p className="hero-subtext">
              Our team combines fiduciary depth with property and notarial experience.
            </p>
           <p className="hero-subtext">
              Every instruction is considered on its own terms, with the right professional taking responsibility for the work.
            </p>
          </div>
        </div>
      </div>

      {/* Team Cards Section */}
      <div className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="team-three-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card-item">
                <div className="team-portrait-wrapper">
                  <img src={member.image} alt={member.name} className="team-portrait-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-member-name">{member.name}</h3>
                  <div className="team-member-role-group">
                    <span className="role-gold">{member.role}</span>
                    <span className="role-gold">{member.degree}</span>
                  </div>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}