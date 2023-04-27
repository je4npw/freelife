import { Button } from "@chakra-ui/react";

interface ButtonProps {
  bg: string;
  color: string;
  hover: string;
  content: string;
}
export default function TemplateButtom({
  bg,
  color,
  hover,
  content,
}: ButtonProps) {
  return (
    <Button bg={bg} rounded={"full"} color={color} _hover={{ bg: hover }}>
      {content}
    </Button>
  );
}
