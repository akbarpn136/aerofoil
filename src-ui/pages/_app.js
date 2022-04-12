import {ChakraProvider, extendTheme} from "@chakra-ui/react"

import DefaultTheme from "../themes/default"
import AerofoilNavbar from "../components/aerofoil_navbar"


const defaultTheme = extendTheme(DefaultTheme)

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={defaultTheme}>
    <AerofoilNavbar />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
