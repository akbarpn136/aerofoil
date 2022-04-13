import NextLink from "next/link"
import {
    Link,
    useColorModeValue
} from "@chakra-ui/react"

export default function AerofoilNavLink(props) {
    return <NextLink href={props.href} passHref>
        <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.100", "gray.800"),
            }}
        >
            {props.children}
        </Link>
    </NextLink>
}
