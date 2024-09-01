import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function Select({ options, selectedValue, setSelectedValue }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Menu isOpen={isOpen} onClose={onClose} placement="bottom-start">
        <MenuButton
          border={"1px solid #E0E0E0"}
          borderRadius={"8px"}
          p={"8px 12px"}
          onClick={onOpen}
          w={"120px"}
        >
          <Flex
            gap="8px"
            alignItems="center"
            justifyContent="space-between"
            flexShrink={0}
          >
            <Text color={"#2C2C2C"} textAlign={"left"}>
              {selectedValue}
            </Text>
            <ArrowDownIcon w="16px" h="16px" />
          </Flex>
        </MenuButton>
        <MenuList w={"120px"} maxH={"320px"} overflowY={"auto"}>
          <Flex flexDirection="column" py="8px" bg={"#fff"}>
            {options.map((item) => (
              <Text
                key={item}
                onClick={() => {
                  onClose();
                  setSelectedValue(item);
                }}
                p="12px 8px"
                _hover={{ bg: "#F0F0F0" }}
                cursor={"pointer"}
              >
                {item}
              </Text>
            ))}
          </Flex>
        </MenuList>
      </Menu>
    </Box>
  );
}
