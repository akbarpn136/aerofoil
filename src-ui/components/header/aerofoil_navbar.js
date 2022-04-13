import {
    Box,
    Flex,
    HStack,
    VStack,
    Heading,
    IconButton,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react"
import {
    CloseIcon,
    HamburgerIcon,
} from "@chakra-ui/icons"

import AerofoilNavLink from "./aerofoil_navlink"
import AerofoilToggleLight from "./aerofoil_togglelight"

export default function AerofoilNavbar() {
    const links = [
        { text: "Tools", href: "/" },
        { text: "Datasets", href: "/" },
    ]
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Box
                bg={useColorModeValue("gray.50", "gray.700")}
                px={4} boxShadow="md" position="fixed" w="full"
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading as="h1" size="lg">
                        ✈️ AEROFOIL
                    </Heading>

                    <HStack
                        as="nav"
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {links.map((link) => (
                            <AerofoilNavLink key={link.text} href={link.href}>
                                {link.text}
                            </AerofoilNavLink>
                        ))}

                        <AerofoilToggleLight />
                    </HStack>

                    <HStack as="nav" display={{ md: "none" }} spacing={4}>
                        <AerofoilToggleLight />
                        <IconButton
                            size={"md"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            bg={useColorModeValue("gray.100", "gray.800")}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <VStack as={"nav"} spacing={4} align="stretch">
                            {links.map((link) => (
                                <AerofoilNavLink key={link.text} href={link.href}>
                                    {link.text}
                                </AerofoilNavLink>
                            ))}
                        </VStack>
                    </Box>
                ) : null}
            </Box>
        </div>
    );
}
