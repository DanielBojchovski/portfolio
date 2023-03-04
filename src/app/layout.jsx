import './globals.css'

export const metadata = {
  title: 'Portfolio website',
  description: 'This is portfolio website for Daniel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
