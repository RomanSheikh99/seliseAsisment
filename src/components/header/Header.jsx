import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Select from "../common/Select";
import useSelect from "../../hooks/useSelect";
import CreateAppointmentModal from "../common/CreateAppointmentModal";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    yearOptions,
    monthOptions,
    selectedYear,
    selectedMonth,
    onSetMonth,
    onSetYear,
  } = useSelect();

  return (
    <>
      <Flex p={"20px"} justifyContent={"space-between"} align={"center"}>
        <Flex gap={"40px"}>
          <Select
            options={yearOptions}
            selectedValue={selectedYear}
            setSelectedValue={onSetYear}
          />
          <Select
            options={monthOptions}
            selectedValue={selectedMonth}
            setSelectedValue={onSetMonth}
          />
        </Flex>
        <Button
          cursor={"pointer"}
          onClick={onOpen}
          p={"8px 12px"}
          bg={"#F0F0F0"}
        >
          Create appointment
        </Button>
        <CreateAppointmentModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </>
  );
}
