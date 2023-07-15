import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import headWall from "../../assets/4.webp";
import WhatButton from "../template/whatsButton.tsx";

export default function ConsideraCta() {
  return (
    <section id={"considera_cta"} >
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={headWall}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'} alignItems={"end"}>
            <Stack direction={"row"} alignItems={"center"}>
              {/*<Image h={24} w={36}  mr={6} src={ico} rounded={8} />*/}
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
                  Quando acionar o
                </Text>
                <br />{' '}
                <Text color={'brand.500'} as={'span'}>
                  tratamento voluntário ou involuntário?
                </Text>{' '}
              </Heading>
            </Stack>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              O acolhimento voluntário é amplamente aceito como uma opção preferencial, pois respeita a autonomia e a
              vontade do indivíduo. No entanto, em alguns casos, o acolhimento involuntário pode ser necessário para
              garantir a segurança e o bem-estar do dependente químico, especialmente em situações em que ele representa
              um risco iminente para si mesmo ou para outras pessoas.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              É fundamental que o acolhimento involuntário seja realizado com base em critérios claros e bem definidos,
              garantindo que a intervenção seja proporcional à gravidade da situação. Além disso, é importante que sejam
              oferecidas alternativas de tratamento e que os direitos e dignidade do indivíduo sejam respeitados durante
              o processo.
            </Text>
            <Stack direction={"row"}>
              <WhatButton />
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </section>
  );
}