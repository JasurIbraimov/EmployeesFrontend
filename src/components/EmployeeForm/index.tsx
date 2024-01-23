import React, { ReactNode } from "react";
import { EmployeeData } from "../../app/services/types";
import { Card, Flex, Space, Typography, Form } from "antd";
import AppInput from "../AppInput";
import AppButton from "../AppButton";
import ErrorMessage from "../ErrorMessage";
interface IEmployeeForm<T> {
  onFinish: (values: T) => void;
  buttonText: string;
  title: string;
  error: string | null;
  onErrorClose?: () => void;
  employee?: T;
  loading: boolean;
  icon?: ReactNode;
}

const EmployeeForm: React.FC<IEmployeeForm<EmployeeData>> = ({
  onFinish,
  buttonText,
  title,
  employee,
  error,
  onErrorClose,
  loading,
  icon,
}) => {
  const handleOnFinish = async (data: EmployeeData) => {
    onFinish(data);
  };

  return (
    <Flex vertical align={"center"} justify={"center"}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Form
        initialValues={employee}
        name="employee-form"
        style={{ width: "70%" }}
        onFinish={handleOnFinish}
      >
        <AppInput name="firstName" placeholder="First name" />
        <AppInput name="lastName" placeholder="Last name" />
        <AppInput name="age" placeholder="Age" />
        <AppInput name="address" placeholder="Address" />

        <AppButton
          loading={loading}
          htmlType="submit"
          icon={icon}
          type="primary"
        >
          {buttonText}
        </AppButton>
      </Form>
      {error && <ErrorMessage onClose={onErrorClose} message={error} />}
    </Flex>
  );
};

export default EmployeeForm;
