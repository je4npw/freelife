import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import headWall from "../../assets/internacao-involuntaria.webp";
import TemplateButton from "../template/button.tsx";
import ico from "/public/vidalivre.ico";
import WhatButton from "../template/whatsButton.tsx";

export default function Split_screen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
            <Flex p={8} flex={1} align={'center'} justify={'center'} >
                <Stack spacing={6} w={'full'} maxW={'lg'} alignItems={"end"}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Image h={24} w={36}  mr={6} src={ico} rounded={8} />
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'brand.100',
                                    zIndex: -1,
                                }}>
                                Tratamento
                            </Text>
                            <br />{' '}
                            <Text color={'brand.500'} as={'span'}>
                                Voluntário e Involuntário
                            </Text>{' '}
                            </Heading>
                    </Stack>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Oferecemos vagas para tratamento da dependência química e álcool para homens de 18 a 65 anos de idade.
                    </Text>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Vagas para atendimento voluntário (comunidades terapêuticas) e incoluntário (clínicas especializadas).
                    </Text>
                    <Stack direction={"row"}>
                        <WhatButton />
                        <TemplateButton
                            bg={"brand.100"}
                            color={"blackAlpha"}
                            hover={"brand.200"}
                            content="Mostre-me"
                        />
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={headWall}
                />
            </Flex>
        </Stack>
    );
}