import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import React from "react";

export const InputBlock: React.FC<{}> = () => {
  return (
    <Box py="20" align="center" px="10">
      <InputGroup maxW="600px">
        <Input pr="7rem" bg="gray.100" />
        <InputRightElement w="7rem">
          <Select placeholder="Offering" bg="white" borderLeftRadius="none">
            <option value="option2">Wanted</option>
            <option value="option1">Offering</option>
            <option value="option3">Extra</option>
          </Select>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
