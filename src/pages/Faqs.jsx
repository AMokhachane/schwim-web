import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "General & Engagements",
      items: [
        {
          q: "How do I schedule an initial consultation with Schwim Attorneys?",
          a: "You can reach out via our Contact page, email us directly, or call our offices. We take time during our first point of contact to listen, define your objectives, and clarify what information or documentation is required before proceeding."
        },
        {
          q: "Where are your offices located?",
          a: "Our principal practice is based at 60 Breë Street in Parys, Free State. We also service clients across Gauteng and surrounding provinces through our satellite consultations in Pretoria and remote digital channels."
        },
        {
          q: "How are legal fees structured?",
          a: "We believe in transparency from the outset. Depending on the nature of your mandate—whether standard statutory conveyancing tariffs, fixed-fee estate planning, or hourly commercial rates—we scope the work and explain all applicable costs before starting."
        }
      ]
    },
    {
      category: "Wills, Estates & Fiduciary Law",
      items: [
        {
          q: "Why should I update my Will or structure my estate plan?",
          a: "A well-considered Will and estate plan ensure your family's future is protected, tax implications are managed, and assets pass smoothly to the next generation without unnecessary delay or dispute after a loss."
        },
        {
          q: "What happens during the deceased estate administration process?",
          a: "We guide executors and beneficiaries through every step: reporting the estate to the Master of the High Court, advertising for creditors, drafting the Liquidation and Distribution Account, and executing asset or property transfers."
        },
        {
          q: "Can Schwim Attorneys assist with family trust deeds and amendments?",
          a: "Yes. We specialize in generational wealth structuring, trust creation, trust deed amendments, and advising trustees on governance and asset protection."
        }
      ]
    },
    {
      category: "Property Transfers & Conveyancing",
      items: [
        {
          q: "What types of property transfers do you handle?",
          a: "Our conveyancing practice handles residential, commercial, and agricultural property transfers, as well as complex transfers involving deceased estates, trusts, and corporate entities."
        },
        {
          q: "Do you assist with mortgage bonds?",
          a: "Yes, our team has extensive experience in both mortgage bond registrations and bond cancellations across financial institutions."
        },
        {
          q: "How long does a typical property transfer take?",
          a: "Property transfers typically take between 8 to 12 weeks from receipt of the initial instruction, depending on municipality clearance certificates, Master's approvals (if applicable), and SARS transfer duty processing."
        }
      ]
    },
    {
      category: "Notarial Services",
      items: [
        {
          q: "When do I need a Notary Public?",
          a: "Certain legal instruments—such as Antenuptial Contracts (ANCs), long-term leases, servitudes, notarial ties, and documents for legal use abroad—strictly require formal execution before an admitted Notary Public."
        },
        {
          q: "How far in advance should we draft our Antenuptial Contract (ANC)?",
          a: "We recommend initiating the ANC process at least 3 to 4 weeks prior to your wedding date to ensure clear consultation, drafting, signature, and registration at the Deeds Office."
        }
      ]
    }
  ];

  return (
    <div className="page">
      {/* Top Header */}
      <div className="about-curved-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="hero-badge">HELP & CLARITY</span>
            <h1>Frequently Asked Questions</h1>
            <p className="hero-subtext">
              Clear answers regarding our legal practice, consultations, fiduciary guidance, and property services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx} className="faq-category-block">
              <h2 className="faq-category-title">{cat.category}</h2>
              <div className="faq-accordion">
                {cat.items.map((item, itemIdx) => {
                  const uniqueIndex = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === uniqueIndex;
                  return (
                    <div key={itemIdx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button 
                        className="faq-question" 
                        onClick={() => toggleFAQ(uniqueIndex)}
                      >
                        <span>{item.q}</span>
                        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom Callout */}
          <div className="service-bottom-card" style={{ marginTop: '4rem' }}>
            <h3>Have a specific question about your legal matter?</h3>
            <p>
              Every instruction is unique. Contact our team at 60 Breë Street, Parys, to discuss your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}