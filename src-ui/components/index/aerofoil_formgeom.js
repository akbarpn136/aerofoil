import { Formik, Field } from "formik"
import {
    Box,
    Image,
    Input,
    Button,
    VStack,
    HStack,
    Heading,
    FormLabel,
    FormControl,
    FormErrorMessage,
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
import { useState } from "react"

import { getGeom } from "../../services/geom"

export default function AerofoilFormGeom(props) {
    const [img, setImage] = useState(null)

    const validateGeom = (val) => {
        let err

        if (!val) {
            err = "This field is required"
        } else if (!/[0-9]*\.[0-9]+,[0-9]+.*$/i.test(val)) {
            err = "Invalid values"
        }

        return err
    }

    return <Box
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
    >
        <VStack spacing={4}>
            <Heading textAlign="center"
                lineHeight={1.1}
                fontSize={{ base: "md", md: "lg" }}
                style={{ textTransform: "uppercase" }}
            >
                Airfoil Information
            </Heading>

            {img ? <Image
                src={img.data}
                alt="Grayscal image"
                rounded="lg"
                w="146px"
                h="146px"
            /> : null}

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

            <Formik
                initialValues={{
                    x: "",
                    y: "",
                    angle: 0
                }}
                onSubmit={async (values) => {
                    const x = values.x.split(",").map(Number)
                    const y = values.y.split(",").map(Number)

                    const result = await getGeom(props.backend, JSON.stringify({
                        x, y, angle: values.angle
                    }))

                    setImage(result)
                }}
            >
                {(props) => {
                    return <form onSubmit={props.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl id="x" isRequired isInvalid={props.errors.x && props.touched.x}>
                                <FormLabel>
                                    X-coordinate
                                </FormLabel>

                                <Field
                                    as={Input}
                                    placeholder="0.98,0.8,..."
                                    _placeholder={{ color: useColorModeValue("gray.500", "white") }}
                                    name="x"
                                    type="text"
                                    value={props.values.x}
                                    validate={validateGeom}
                                />
                                <FormErrorMessage>{props.errors.x}</FormErrorMessage>
                            </FormControl>

                            <FormControl id="y" isRequired isInvalid={props.errors.y && props.touched.y}>
                                <FormLabel>
                                    Y-coordinate
                                </FormLabel>

                                <Field
                                    as={Input}
                                    placeholder="0.0,0.02,..."
                                    _placeholder={{ color: useColorModeValue("gray.500", "white") }}
                                    name="y"
                                    type="text"
                                    value={props.values.y}
                                    validate={validateGeom}
                                />
                                <FormErrorMessage>{props.errors.y}</FormErrorMessage>
                            </FormControl>

                            <HStack align="end">
                                <FormControl id="angle" isRequired>
                                    <FormLabel>Angle</FormLabel>
                                    <NumberInput
                                        name="angle"
                                        min={-20} max={20}
                                        color={useColorModeValue("gray.500", "white")}
                                        value={props.values.angle}
                                        onChange={(val) => {
                                            props.setFieldValue("angle", val)
                                        }}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>

                                <Button type="submit"
                                    w="full"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    isDisabled={Object.keys(props.errors).length !== 0 || Object.keys(props.touched).length === 0}
                                >
                                    Process
                                </Button>
                            </HStack>
                        </VStack>
                    </form>
                }}
            </Formik>
        </VStack>
    </Box>
}
