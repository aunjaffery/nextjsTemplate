import {
  Box,
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const MyTabs = () => {
  return (
    <Box mt="10">
      <Box>
        <Tabs>
          <Flex justify="center">
            <TabList
              bg="gray.200"
              color="gray.400"
              borderRadius="30px"
              borderColor="#d3d3d3"
              borderWidth="1px"
              overflow="hidden"
              position="relative"
            >
              <Tab
                _focus={{ outline: "none" }}
                _selected={{ color: "orange.400" }}
                borderRadius="30px"
                px="8"
              >
                <Text zIndex="100">Active Listing</Text>
              </Tab>
              <Tab
                _focus={{ outline: "none" }}
                _selected={{ color: "orange.400" }}
                borderRadius="30px"
                px="8"
              >
                <Text zIndex="100">Transactions</Text>
              </Tab>
              <TabIndicator
                bg="white"
                h="100%"
                borderRadius="30px"
                position="absolute"
                zIndex="10"
              />
            </TabList>
          </Flex>
          <TabPanels>
            <TabPanel>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available...
              </p>
            </TabPanel>
            <TabPanel>
              <p>This is the 2nd tab!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
