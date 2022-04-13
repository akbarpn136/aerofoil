import Head from "next/head"
import {
  Box,
  Container,
  useColorModeValue
} from "@chakra-ui/react"

import AerofoilFormGeom from "../components/index/aerofoil_formgeom"

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
        py={16}
        minH="100vh"
        bg={useColorModeValue("gray.100", "gray.800")}
      >
        <Container maxW="md" mt={25}>
          <AerofoilFormGeom />
        </Container>
      </Box>
    </div>
  )
}
