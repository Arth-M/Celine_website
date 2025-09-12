import '../src/output.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Céline Castronovo - Psychologue - Montpellier</title>
      </head>
      <body className="m-0 p-0 w-screen h-screen relative">{children}</body>
    </html>
  )
}
