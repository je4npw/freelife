import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import headWall from "../../assets/3.webp";
import TemplateButton from "../template/button.tsx";
import WhatButton from "../template/whatsButton.tsx";

export default function VoluntarioCta() {
  return (
    <section id={"involuntario_cta"} >
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'} alignItems={"end"}>
            <Stack direction={"row"} alignItems={"center"}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} id={"Involutario"}>
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
                  O que é
                </Text>
                <br />{' '}
                <Text color={'brand.500'} as={'span'}>
                  tratamento involuntário?
                </Text>{' '}
              </Heading>
            </Stack>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              O acolhimento involuntário é uma abordagem que ocorre quando o dependente químico é submetido a um
              tratamento sem o seu consentimento ou quando há uma intervenção forçada devido a situações de risco iminente
              para a sua saúde ou a de terceiros. Essa abordagem é aplicada quando o dependente químico se encontra em um
              estado de negação, não reconhecendo a gravidade de sua dependência ou representando perigo para si mesmo ou
              para outras pessoas.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Geralmente, o acolhimento involuntário é regulamentado por leis específicas que determinam as condições e os
              procedimentos necessários para sua aplicação. Essas leis visam equilibrar o direito individual à liberdade
              com a necessidade de proteger a saúde e a segurança do dependente químico e da sociedade como um todo.
            </Text>
            <Stack direction={"row"}>
              <WhatButton />
              <a href={"#considera_cta"}>
                <TemplateButton
                  bg={"brand.100"}
                  color={"blackAlpha"}
                  hover={"brand.200"}
                  content="Saiba mais"
                />
              </a>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Imagem'}
            objectFit={'cover'}
            src={headWall}
          />
        </Flex>
      </Stack>
    </section>
  );
}