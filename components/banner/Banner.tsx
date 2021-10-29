import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Banner: React.FC<{}> = () => {
  return (
    <Box h="350px" position="relative">
      <Image
        w="100%"
        h="100%"
        src="/green-img.png"
        objectFit="cover"
        objectPosition="top center"
      />
      <Box position="absolute" top="0" left="0" w="100%" h="100%">
        <Flex justify="center" align="center" h="100%" direction="column">
          <Box mb="2" px="2">
            <Text
              color="white"
              fontWeight="bold"
              fontSize={["xl", "3xl", "3xl", "3xl"]}
              align="center"
            >
              Pay it forward, get rewarded.
            </Text>
          </Box>
          <Box maxW="650px" px="10">
            <Text
              color="white"
              fontSize={["md", "md", "lg", "xl"]}
              align="center"
            >
              Browse items and services available in your community. or get
              started offering your own and earn vital credits.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
