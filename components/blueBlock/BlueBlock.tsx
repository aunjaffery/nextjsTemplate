import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const BlueBlock: React.FC<{}> = () => {
  const flexObj = {
    flex: {
      base: "0 0 100%",
      md: "0 0 33.333%",
    },
    maxW: { base: "100%", md: "33.33%" },
    px: 4,
  };
  const textHeading = {
    color: "white",
    fontSize: "xl",
    fontWeight: "bold",
    mb: "2",
  };

  return (
    <Box bg="blue.700" py="20">
      <Flex wrap="wrap">
        <Flex {...flexObj} justify={{ base: "center", md: "flex-end" }}>
          <Box>
            <Text {...textHeading} textAlign="center">
              Donate
            </Text>
            <Text color="white" fontSize="sm" align="center">
              Begin your journey with Good Deeds.
            </Text>
          </Box>
        </Flex>
        <Flex {...flexObj} justify="center" my={{ base: 12, md: 0 }}>
          <Box>
            <Text {...textHeading} textAlign="center">
              Give Back
            </Text>
            <Text color="white" fontSize="sm" align="center">
              See your act of kindness be rewared.
            </Text>
          </Box>
        </Flex>
        <Flex {...flexObj} justify={{ base: "center", md: "flex-start" }}>
          <Box>
            <Text {...textHeading} textAlign="center">
              Earn Credits
            </Text>
            <Text color="white" fontSize="sm" align="center">
              Use your vital currency how and when you want to.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
