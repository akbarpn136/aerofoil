import {
    Box,
    Flex,
    Link,
    HStack,
    Button,
    VStack,
    Heading,
    IconButton,
    useColorMode,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react"
import {
    SunIcon,
    MoonIcon,
    CloseIcon,
    HamburgerIcon,
} from "@chakra-ui/icons"

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
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>
            <Box bg={useColorModeValue("teal.500", "teal.700")} color="white" px={4} boxShadow="md">
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading as="h2" size="md" textShadow="1px 1px black">
                        ✈️ AEROFOIL
                    </Heading>

                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {links.map((link) => (
                            <NavLink key={link} href="#">{link}</NavLink>
                        ))}

                        <Button
                            onClick={toggleColorMode}
                            bg={useColorModeValue("teal.500", "teal.700")}
                            rounded="full"
                        >
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
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
