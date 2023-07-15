import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import headWall from "../../assets/2.webp";
import TemplateButton from "../template/button.tsx";
import WhatButton from "../template/whatsButton.tsx";

export default function VoluntarioCta() {
  return (
    <section id={"voluntario_cta"} >
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Imagem'}
            objectFit={'cover'}
            src={headWall}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'} alignItems={"end"}>
            <Stack direction={"row"} alignItems={"center"}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} id={"volutario"}>
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
                  tratamento voluntário?
                </Text>{' '}
              </Heading>
            </Stack>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              O acolhimento voluntário é caracterizado pela iniciativa própria do dependente químico em buscar ajuda e
              tratamento para sua dependência. Nessa abordagem, o indivíduo reconhece sua condição e toma a decisão de
              procurar assistência. O acolhimento voluntário oferece uma série de benefícios, pois o indivíduo está mais
              propenso a se envolver ativamente no processo de recuperação, buscando mudanças positivas em sua vida.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Esse tipo de acolhimento pode ocorrer em várias formas, como em programas de desintoxicação voluntária,
              grupos de apoio, internações voluntárias em clínicas de reabilitação ou terapias ambulatoriais.
              A colaboração do dependente químico é essencial nesse processo, pois ele precisa estar disposto a participar
              das atividades terapêuticas e aderir ao tratamento proposto.
            </Text>
            <Stack direction={"row"}>
              <WhatButton />
              <a href={"#involuntario_cta"}>
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
      </Stack>
    </section>
  );
}