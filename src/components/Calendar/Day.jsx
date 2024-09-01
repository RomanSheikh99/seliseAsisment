import { Flex, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Appointment from "./Appointment";
import useGetAppointmentData from "../../hooks/useGetAppointmentData";

export default function Day({ day }) {
  const { sortedAppointments: appointments } = useGetAppointmentData(
    day.format("YYYY-MM-DD")
  );
  return (
    <GridItem border={"1px solid"} p={"10px"} overflowY={"auto"} h={"180px"}>
      <Text textAlign={"center"}>{day.format("D")}</Text>
      {appointments.length > 0 && (
        <Flex
          direction={"column"}
          gap={"10px"}
          mt={"10px"}
          justifyContent={"center"}
          align={"center"}
        >
          {appointments.map((appointment) => (
            <Appointment key={appointment.time} appointment={appointment} />
          ))}
        </Flex>
      )}
    </GridItem>
  );
}
