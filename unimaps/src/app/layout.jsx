// app/layout.jsx
import '../app/layout'

export const metadata = {
  title: 'Menú - GPS Universidad',
  description: 'Explora el campus universitario con nuestro GPS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
