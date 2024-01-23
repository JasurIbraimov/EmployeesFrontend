import { Typography, Form, Flex, Space } from "antd";
import AppLayout from "../../components/AppLayout";
import AppInput from "../../components/AppInput";
import PasswordInput from "../../components/PasswordInput";
import AppButton from "../../components/AppButton";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useState } from "react";
import { useRegisterMutation } from "../../app/services/auth";
import { RegisterUserData } from "../../app/services/types";
import { isErrorWithMessage } from "../../utils/error";
import ErrorMessage from "../../components/ErrorMessage";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>();
  const [registerUser] = useRegisterMutation();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data: RegisterUserData) => {
    setLoading(true);
    try {
      await registerUser(data).unwrap();
      navigate(routes.employees);
    } catch (error) {
      const isError = isErrorWithMessage(error);
      if (isError) {
        setError(error.data.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Title level={3}>Create an account</Typography.Title>
        <Form style={{ width: "70%" }} onFinish={handleRegister}>
          <AppInput name="email" type="email" placeholder="Your email" />
          <AppInput name="name" placeholder="Your username" />
          <PasswordInput
            name="password"
            dependencies={[]}
            placeholder="Your password"
          />
          <PasswordInput
            name="confirmPassword"
            dependencies={[]}
            placeholder="Confirm password"
          />

          <AppButton loading={loading} htmlType="submit" type="primary">
            Register
          </AppButton>
        </Form>
        <Space direction="vertical" size={"large"}>
          <Typography.Text>
            Already have an account?
            <Link to={routes.login}>
              <AppButton type="link">Enter your account.</AppButton>
            </Link>
          </Typography.Text>
        </Space>

        {error && <ErrorMessage message={error} />}
      </Flex>
    </AppLayout>
  );
};

export default Register;
