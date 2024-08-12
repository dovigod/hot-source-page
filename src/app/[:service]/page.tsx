"use client";
import { Typo } from "@/components/common/texts/Typo";
import { Frame } from "@/components/Frame";
import { Navigator } from "@/components/Navigator";
import { Header } from "@/components/service/Header";
import useZoomStore from "@/store/zoom";
import { HStack, VStack, useMediaQuery } from "@chakra-ui/react";

export default function ServicePage() {
  const name = "Sample Service";
  const description = "hello world ";
  const date = "2012-02-12";

  const [isLg] = useMediaQuery("(min-width: 1400px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const { open, src } = useZoomStore();
  return (
    <VStack
      maxWidth="container.max"
      minWidth="container.min"
      width="full"
      py="s100"
    >
      <Navigator />

      <VStack spacing={"40px"} as="main">
        <VStack width="full" spacing={"80px"} alignItems={"start"}>
          <Header />

          <VStack spacing="24px" alignItems="start" width="full">
            <Typo variants="xl">온보딩</Typo>
            <HStack width="full" justifyContent="space-between">
              <Frame
                onClick={() => open("/service.png")}
                size={isLg ? "md" : "sm"}
                src="/service.png"
              />
              <Frame
                onClick={() => open("/service.png")}
                size={isLg ? "md" : "sm"}
                src="/service.png"
              />
              <Frame
                onClick={() => open("/service.png")}
                size={isLg ? "md" : "sm"}
                src="/service.png"
              />
              <Frame
                onClick={() => open("/service.png")}
                size={isLg ? "md" : "sm"}
                src="/service.png"
              />
              <Frame
                onClick={() => open("/service.png")}
                size={isLg ? "md" : "sm"}
                src="/service.png"
              />
            </HStack>
          </VStack>
        </VStack>

        <VStack width="full" spacing={"80px"} alignItems={"start"}>
          <Header />

          <VStack spacing="24px" alignItems="start" width="full">
            <Typo variants="xl">오프 보딩</Typo>
            <HStack width="full" justifyContent="space-between">
              <Frame
                onClick={() => open("/service2.png")}
                size={isLg ? "md" : "sm"}
                src="/service2.png"
              />
              <Frame
                onClick={() => open("/service2.png")}
                size={isLg ? "md" : "sm"}
                src="/service2.png"
              />
              <Frame
                onClick={() => open("/service2.png")}
                size={isLg ? "md" : "sm"}
                src="/service2.png"
              />
              <Frame
                onClick={() => open("/service2.png")}
                size={isLg ? "md" : "sm"}
                src="/service2.png"
              />
              <Frame
                onClick={() => open("/service2.png")}
                size={isLg ? "md" : "sm"}
                src="/service2.png"
              />
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
