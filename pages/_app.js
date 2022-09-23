import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyles'
import { theme } from '../components/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
