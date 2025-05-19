import Script from "next/script";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Phebean Neurodiversity Support",
    "url": "https://www.phebeanneurodiversitysupport.org",
    "logo": "https://www.phebeanneurodiversitysupport.org/Logo.png",
    "description": "Supporting and celebrating neurodivergent individuals",
    "sameAs": [
      "https://x.com/phebeaneuro",
      "https://instagram.com/phebeanneuro"
    ]
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}