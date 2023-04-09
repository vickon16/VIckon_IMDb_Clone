import './globals.css'
import Providers from "./providers"

export const metadata = {
  title: 'IMDB Clone',
  description: 'Creating an IMDB Clone With Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='text-black bg-bgWhite dark:bg-bgDark dark:text-textXl transition-colors duration-300 select-none pt-[4.5rem]'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
