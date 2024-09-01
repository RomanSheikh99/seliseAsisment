import { Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AppointmentModal from "../common/AppointmentModal";

export default function Appointment({ appointment }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        textAlign={"center"}
        maxW={"80%"}
        w={"80%"}
        cursor={"pointer"}
        fontSize={"16px"}
        border={"1px solid"}
        p={"5px"}
        borderRadius={"5px"}
        _hover={{ bg: "#F0F0F0" }}
        isTruncated
        onClick={onOpen}
      >
        {appointment.name}
      </Text>
      <AppointmentModal
        isOpen={isOpen}
        onClose={onClose}
        appointment={appointment}
      />
    </>
  );
}
