import './globals.css'

// Métadonnées principales - OUTSIDE the component
export const metadata = {
  title:
    'Céline Castronovo - Psychologue à Montpellier | Consultations et Thérapie',
  description:
    'Céline Castronovo, psychologue diplômée à Montpellier. Consultations individuelles, thérapie et accompagnement psychologique. Pratique les thérapies TCC et EMDR, spécialisée en Émotions et Cognition. La prise de rendez-vous se fait sur Doctolib. Conventionnée Santé Psy Étudiant.',
  // Auteur
  authors: [{ name: 'Céline Castronovo' }],
  creator: 'ATU-Web',
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Consultations et thérapies individuelles à Montpellier.',
    description:
      "Céline Castronovo s'appuie sur la Psychologie cognitive, la TCC et l'EMDR pour accompagner ses patients face aux difficultés de la vie et dans le traitement des traumas.",
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
    title: 'Céline Castronovo - Psychologue diplômée',
    description: 'Céline Castronovo - Consultations et thérapies individuelles à Montpellier.',
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
    'Céline Castronovo est une Psychologue diplômée installée à Montpellier. Consultations individuelles, thérapie et accompagnement psychologique. Pratique les thérapies TCC et EMDR, spécialisée en Émotions et Cognition. La prise de rendez-vous se fait sur Doctolib. Conventionnée Santé Psy Étudiant.',
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
        <link rel="icon" type="image/svg" href="./images/care2.svg"></link>
        <style>
         @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
        </style>
      </head>
      <body className="m-0 p-0 w-screen h-screen relative bg-teal-50 nunito">
        {children}
      </body>
    </html>
  )
}
