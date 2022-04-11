import {ChakraProvider, extendTheme} from "@chakra-ui/react"

import DefaultTheme from "../themes/default"


const defaultTheme = extendTheme(DefaultTheme)

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={defaultTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
