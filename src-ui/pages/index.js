import Head from "next/head"
import {
  Flex,
  Container,
  useColorModeValue
} from "@chakra-ui/react"

import AerofoilFormGeom from "../components/index/aerofoil_formgeom"

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>AEROFOIL</title>
        <meta name="description" content="AEROFOIL Simple prediction for aerodynamic coefficient of airfoil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        h="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue("gray.100", "gray.800")}
      >
        <Container w="md">
          <AerofoilFormGeom backend={props.backend_url} />
        </Container>
      </Flex>
    </div>
  )
}

export async function getStaticProps() {
  return {props: {
    backend_url: process.env.BACKEND_URL
  }}
}
