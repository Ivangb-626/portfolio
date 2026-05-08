export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Iván González Blázquez",
    "url": "https://ivangonzalezblazquez.vercel.app",
    "jobTitle": "Software Engineer & Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "UPV/EHU - Universidad del País Vasco",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Sebastián",
        "addressCountry": "ES"
      }
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Full-Stack Development",
      "Software Architecture",
      "Web Development"
    ],
    "birthPlace": {
      "@type": "Place",
      "name": "Spain"
    },
    "homeLocation": {
      "@type": "Place",
      "name": "Madrid, Spain"
    },
    "sameAs": [
      "https://linkedin.com/in/ivangonzalezblazquez",
      "https://github.com/ivangb",
      "https://twitter.com/ivangb"
    ]
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Iván González Blázquez Portfolio",
    "url": "https://ivangonzalezblazquez.vercel.app",
    "description": "Professional portfolio of Iván González Blázquez - Software Engineer specializing in Full-Stack Development",
    "founded": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Iván González Blázquez"
      }
    ],
    "sameAs": [
      "https://linkedin.com/in/ivangonzalezblazquez",
      "https://github.com/ivangb"
    ]
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ivangonzalezblazquez.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://ivangonzalezblazquez.vercel.app#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Experience",
        "item": "https://ivangonzalezblazquez.vercel.app#experience"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://ivangonzalezblazquez.vercel.app#projects"
      }
    ]
  };
}
