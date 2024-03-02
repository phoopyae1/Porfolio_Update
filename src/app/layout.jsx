import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        {/* <div className="p-8 lg:pt-0 lg:pl-10 lg:pr-10 m-auto "> */}
        <div>
          {children}

        </div>
        {/* </ClientSideProviderTest> */}

      </body>
    </html>
  )
}