import { Poppins } from 'next/font/google'
import './globals.css'
import Cursor from './components/Cursor'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata = {
  title: 'Carlos Morais',
  description: 'Desenvolvedor Front-End',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background text-text overflow-x-hidden`}>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
