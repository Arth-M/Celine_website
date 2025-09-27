import './globals.css'

// Métadonnées principales - OUTSIDE the component
export const metadata = {
  title:
    'Céline Castronovo - Psychologue à Montpellier | Consultations et Thérapie',
  description:
    'Céline Castronovo, psychologue diplômée à Montpellier. Consultations individuelles, thérapie et accompagnement psychologique. Pratique les thérapies TCC et EMDR, spécialisée en Émotions et Cognition. La prise de rendez-vous se fait sur Doctolib. Conventionnée Santé Psy Étudiant.',
  // Auteur
  authors: [{ name: 'Céline Castronovo' }],
  creator: 'Céline Castronovo',
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Céline Castronovo - Psychologue à Montpellier',
    description:
      'Psychologue diplômée à Montpellier. Consultations individuelles et accompagnement thérapeutique personnalisé.',
    siteName: 'Céline Castronovo - Psychologue',
    url: 'https://psychologie-montpellier.fr',
    images: [
      {
        url: 'https://psychologie-montpellier.fr/images/celine_castronovo.webp',
        width: 309,
        height: 303,
        alt: 'Photographie de Céline Castronovo, Psychologue à Montpellier',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Céline Castronovo - Psychologue à Montpellier',
    description: 'Consultations et thérapie individuelle à Montpellier.',
    images: [
      'https://psychologie-montpellier.fr/images/celine_castronovo.webp',
    ],
  },
  // Lien canonique
  alternates: {
    canonical: 'https://psychologie-montpellier.fr', // à remplacer
  },
}

// JSON-LD optimisé pour le SEO local - OUTSIDE the component
export const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/Psychologist',
  name: 'Céline Castronovo',
  image: 'https://psychologie-montpellier.fr/images/celine_castronovo.webp',
  description:
    'Céline Castronovo, psychologue diplômée à Montpellier. Consultations individuelles, thérapie et accompagnement psychologique. Pratique les thérapies TCC et EMDR, spécialisée en Émotions et Cognition. La prise de rendez-vous se fait sur Doctolib. Conventionnée Santé Psy Étudiant.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 avenue de Toulouse',
    addressLocality: 'Montpellier',
    postalCode: '34070',
    addressCountry: 'FR',
    addressRegion: 'Occitanie',
  },
  // "geo": {
  //   "@type": "GeoCoordinates",
  //   "latitude": 43.60048665192196,
  //   "longitude": 3.867169968557686,
  // },
  telephone: '+33-6-15-43-51-99', // à remplacer
  email: 'c.castronovo.34@gmail.com', // à remplacer
  url: 'https://psychologie-montpellier.fr', // à remplacer
  sameAs: [
    'https://www.doctolib.fr/psychologue/montpellier/celine-castronovo',
    'https://maps.app.goo.gl/Jh3uujHr15YaRqXc6',
    'https://www.pagesjaunes.fr/pros/60702894',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Thursday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  priceRange: '50 EUR',
  offers: [
    {
      '@type': 'Offer',
      price: '50',
      priceCurrency: 'EUR',
      description: 'Consultation standard',
    },
    {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Étudiants : dispositif Santé Psy Étudiants',
    },
  ],
  paymentAccepted: ['Cash', 'Check', 'Wero', 'Revolut'],
  currenciesAccepted: 'EUR',
}

// Component function - AFTER the exports
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body className="m-0 p-0 w-screen h-screen relative bg-gray-100">
        {children}
      </body>
    </html>
  )
}
