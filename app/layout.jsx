import './globals.css'

export const metadata = {
  title: 'DramaX Studios',
  description: 'AI-native vertical drama studio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  )
}
