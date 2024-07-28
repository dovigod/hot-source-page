import { Container, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import { Navigator } from "@/components/Navigator";
import { Service } from "../components/Service";

export default function Home() {
  return (
    <VStack
      maxWidth="container.max"
      minWidth="container.min"
      width="full"
      py="s100"
    >
      <Navigator />

      <Grid
        as="main"
        templateColumns="repeat( auto-fill, minmax(282px, 1fr) );"
        gap={"24px"}
        rowGap={"80px"}
        width="full"
        px="40px"
      >
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service.png"
            name="Hot source awd aw daw dawd "
            description="hrpompo awd poaw pdo awp adw dad"
          />
        </GridItem>
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service2.png"
            name="Netflix"
            description="넷플릭스 샘플 설명"
          />
        </GridItem>
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service3.png"
            name="Toss"
            description="토스 샘플 설명"
          />
        </GridItem>

        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service.png"
            name="Hot source awd aw daw dawd "
            description="hrpompo awd poaw pdo awp adw dad"
          />
        </GridItem>
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service2.png"
            name="Netflix"
            description="넷플릭스 샘플 설명"
          />
        </GridItem>
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service3.png"
            name="Toss"
            description="토스 샘플 설명"
          />
        </GridItem>

        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service.png"
            name="Hot source awd aw daw dawd "
            description="hrpompo awd poaw pdo awp adw dad"
          />
        </GridItem>
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service2.png"
            name="Netflix"
            description="넷플릭스 샘플 설명"
          />
        </GridItem>
        <GridItem>
          <Service
            logo="/sample-service-logo.png"
            thumbnail="/service3.png"
            name="Toss"
            description="토스 샘플 설명"
          />
        </GridItem>
      </Grid>
    </VStack>
  );
}
