import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * The main App component for the Next.js application.
 * This component wraps all pages and persists layout between page navigations.
 *
 * @param {AppProps} props - The properties passed to the App component.
 * @param {React.ComponentType} props.Component - The active page component to be rendered.
 * @param {object} props.pageProps - The initial props that were preloaded for the page.
 * @returns {JSX.Element} The rendered application component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
