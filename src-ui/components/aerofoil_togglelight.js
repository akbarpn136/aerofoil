import {
    Button,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react"
import {
    SunIcon,
    MoonIcon
} from "@chakra-ui/icons"

export default function AerofoilToggleLight() {
    const { colorMode, toggleColorMode } = useColorMode()

    return <Button
        onClick={toggleColorMode}
        bg={useColorModeValue("gray.50", "gray.700")}
        rounded="full"
    >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
}
