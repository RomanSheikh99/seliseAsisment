import {
  Box,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function AppointmentModal({ isOpen, onClose, appointment }) {
  const genarateText = (text, title) => {
    return (
      <Box>
        <Text fontWeight={"400"} fontFamily={"12px"} color={"#2C2C2C"}>
          {title}
        </Text>
        <Text fontWeight={"600"} fontFamily={"14px"} color={"#262626"}>
          {text}
        </Text>
      </Box>
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="20px" bg={"#fff"} maxW="532px">
        <ModalHeader>
          <Text borderBottom={"1px solid"} p={"10px"}>
            Appointment Details
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid p={"16px"} templateColumns="2fr 1fr" gap={"10px"}>
            <GridItem>
              {genarateText(appointment.name, "Patient Name")}
              {genarateText(appointment.gender, "Gender")}
              {genarateText(appointment.age, "Age")}
            </GridItem>
            <GridItem border={"1px solid gray"} p={"10px"}>
              {genarateText(appointment.time, "Time")}
              {genarateText(appointment.date, "Date")}
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
