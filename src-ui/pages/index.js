import Head from "next/head"
import {
  Box,
  Text,
  Container,
  useColorModeValue
} from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>AEROFOIL</title>
        <meta name="description" content="AEROFOIL Simple prediction for aerodynamic coefficient of airfoil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        pt={16}
        minH="100vh"
        bg={useColorModeValue("gray.100", "gray.800")}
      >
        <Container maxW="98%" mt={25}>
          <Text as="h2" fontSize="2xl">
            Airfoil Prediction
          </Text>

          <p>
            Web-based applications to help users in predicting aerodynamic coefficients of airfoils
          </p>
        </Container>
      </Box>
    </div>
  )
}
