import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import headWall from "../../assets/internacao-involuntaria.webp";
import TemplateButtom from "../template/button";

export default function LandingHeading() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={headWall}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"brand.100"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}>
            <TemplateButtom
              bg={"brand.500"}
              color={"white"}
              hover={"brand.900"}
              content="Mostre-me menos"
            />
            <TemplateButtom
              bg={"brand.100"}
              color={"blackAlpha"}
              hover={"brand.200"}
              content="Mostre-me"
            />
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
