import {
  Button,
  Flex,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import useSetAppointmentData from "../../hooks/useSetAppointmentData";

export default function CreateAppointmentModal({ isOpen, onClose }) {
  const appointmentSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    gender: z.string().min(1, { message: "Gender is required" }),
    age: z.string().min(1, { message: "Age is required" }),
    date: z.string().min(1, { message: "Date is required" }),
    time: z.string().min(1, { message: "Time is required" }),
  });

  const { setData } = useSetAppointmentData();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      gender: "male",
      age: "",
      date: "",
      time: "",
    },
  });

  const onSubmit = (data) => {
    reset();
    onClose();
    setData(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="20px" bg={"#fff"} maxW="532px">
        <ModalHeader>
          <Text>Create New Appointment</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  variant="flushed"
                  placeholder="Input Patient Name"
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <Grid
              mt={"20px"}
              gap={"20px"}
              w={"100%"}
              templateColumns={"repeat(2, 1fr)"}
            >
              <Controller
                name="gender"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select onChange={onChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                )}
              />

              <Controller
                name="age"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Patient's Age"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />

              <Controller
                name="date"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    variant="flushed"
                    type="date"
                    placeholder="Appointment Date"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />

              <Controller
                name="time"
                control={control}
                required
                render={({ field: { onChange, value } }) => (
                  <Input
                    variant="flushed"
                    type="time"
                    placeholder="Appointment Date"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>

            <Flex
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"20px"}
              mt="20px"
            >
              <Button onClick={onClose}>Cancel</Button>
              <Button isDisabled={!isValid} type="submit">
                Create
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
