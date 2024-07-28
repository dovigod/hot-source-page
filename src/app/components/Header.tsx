"use client";
import {
  Flex,
  HStack,
  Spacer,
  Button,
  VStack,
  Collapse,
  useDisclosure,
  Box,
  Portal,
} from "@chakra-ui/react";
import { Logo } from "./common/Logo";
import { Typo } from "./common/texts/Typo";
import { Search } from "./Search";
import { useEffect } from "react";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <Flex
      justifyContent="center"
      zIndex="tooltip"
      position="fixed"
      top="0px"
      left="0px"
      width="full"
      as="header"
      maxW="100vw"
      py="s24"
      backgroundColor={"white"}
    >
      <VStack width="full" maxW="container.max">
        <Flex align="center" width="full">
          <Logo />
          <Spacer />
          <nav>
            <HStack spacing="4">
              <Button variant="link" colorScheme="black" onClick={onToggle}>
                <Typo variants="md">검색</Typo>
              </Button>
              <Button colorScheme="black" variant="link">
                <Typo variants="md">문의하기</Typo>
              </Button>
            </HStack>
          </nav>
        </Flex>
        <Box width="full">
          <Collapse
            in={isOpen}
            transition={{ exit: { delay: 0 }, enter: { duration: 0.5 } }}
          >
            <Box width="full" py="s12">
              <Search />
            </Box>
          </Collapse>
        </Box>
      </VStack>

      {isOpen && (
        <Portal>
          <Box
            id="123"
            width="full"
            height="full"
            backgroundColor="blackAlpha.600"
            position="fixed"
            top="0px"
            left="0px"
            zIndex="overlay"
          />
        </Portal>
      )}
    </Flex>
  );
};
