import { Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatButton() {
    return (
        <a
            href={"https://api.whatsapp.com/send?phone=554788389918&text=Entrei%20em%20contato%20pelo%20site%20vida%20livre.%20"}
            target={"_blank"}
        >
            <Button
                leftIcon={<FaWhatsapp />}
                bg={"brand.500"}
                color={"white"}
                rounded={"full"}
                _hover={{ bg: "brand.900" }}
            >
                Contato
            </Button>
        </a>
    );
}