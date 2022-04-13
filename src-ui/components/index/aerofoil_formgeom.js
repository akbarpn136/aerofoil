import {
    Image,
    Input,
    Button,
    VStack,
    Heading,
    FormLabel,
    FormControl,
    useColorModeValue,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stat,
    StatLabel,
    StatNumber,
    StatGroup
} from "@chakra-ui/react"

export default function AerofoilFormGeom() {
    const data = {
        isNew: true,
        imageURL: "data:image/jpeg;base64,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",
        name: "Wayfarer Classic",
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    }

    return <VStack
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        spacing={5}
    >
        <Image
            alignSelf="center"
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            rounded="lg"
            w="146px"
            h="146px"
            mx={"auto"}
        />

        <Heading textAlign="center"
            lineHeight={1.1}
            fontSize={{ base: "md", md: "lg" }}
        >
            Airfoil Information
        </Heading>

        <StatGroup w="full" textAlign="center">
            <Stat>
                <StatLabel>Cl</StatLabel>
                <StatNumber>0.25</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Cd</StatLabel>
                <StatNumber>0.0023</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Cm</StatLabel>
                <StatNumber>-0.0548</StatNumber>
            </Stat>
        </StatGroup>

        <FormControl id="x" isRequired>
            <FormLabel>
                X-coordinate
            </FormLabel>

            <Input
                placeholder="0.98, 0.8, ..."
                _placeholder={{ color: useColorModeValue("gray.500", "white") }}
                type="text"
            />
        </FormControl>

        <FormControl id="y" isRequired>
            <FormLabel>
                Y-coordinate
            </FormLabel>

            <Input
                placeholder="0.0, 0.02, ..."
                _placeholder={{ color: useColorModeValue("gray.500", "white") }}
                type="text"
            />
        </FormControl>

        <FormControl id="angle" isRequired>
            <FormLabel>Angle</FormLabel>
            <NumberInput defaultValue={0} min={-20} max={20} color={useColorModeValue("gray.500", "white")}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>

        <Button
            w="full"
            bg={"blue.400"}
            color={"white"}
            _hover={{
                bg: "blue.500",
            }}>
            Process
        </Button>
    </VStack>
}
