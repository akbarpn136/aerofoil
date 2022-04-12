import {
    Box,
    Flex,
    Link,
    HStack,
    VStack,
    Heading,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

const NavLink = (props) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: "teal.600",
        }}
        href={props.href}>
        {props.children}
    </Link>
)

export default function Simple() {
    const links = ["Tools", "Datasets"]
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Box bg="teal.700" color="white" px={4} boxShadow="md">
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading as="h2" size="md" textShadow="1px 1px black">
                        ✈️ AEROFOIL
                    </Heading>

                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}>
                        {links.map((link) => (
                            <NavLink key={link} href="#">{link}</NavLink>
                        ))}
                    </HStack>

                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <VStack as={"nav"} spacing={4} align="stretch">
                            {links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </VStack>
                    </Box>
                ) : null}
            </Box>
        </div>
    );
}
