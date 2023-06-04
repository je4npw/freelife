import { Button } from "@chakra-ui/react";

interface ButtonProps {
  bg: string;
  color: string;
  hover: string;
  content: string;
  leftIcon?: any;
}
export default function TemplateButton({
  bg,
  color,
  hover,
  content,
  leftIcon,
}: ButtonProps) {

  return (
      <Button bg={bg}
              rounded={"full"}
              color={color}
              _hover={{bg: hover}}
              leftIcon={leftIcon}
      >
        {content}
      </Button>
  );
}
