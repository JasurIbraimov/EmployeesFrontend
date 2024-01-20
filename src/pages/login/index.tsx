import { Typography, Form, Flex, Space, message, Spin } from "antd";
import AppLayout from "../../components/AppLayout";
import AppInput from "../../components/AppInput";
import PasswordInput from "../../components/PasswordInput";
import AppButton from "../../components/AppButton";
import { Link } from "react-router-dom";
import routes from "../../path";
import { UserData } from "../../app/services/types";
import { useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/error";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOnFinish = async (data: UserData) => {
    setLoading(true);
    try {
      await loginUser(data).unwrap();
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
        <Typography.Title level={3}>Enter your account</Typography.Title>
        <Form style={{ width: "70%" }} onFinish={handleOnFinish}>
          <AppInput name="email" placeholder="Your email" />
          <PasswordInput
            name="password"
            dependencies={[]}
            placeholder="Your password"
          />
          <AppButton loading={loading} htmlType="submit" type="primary">
            Login
          </AppButton>
        </Form>
        {error && (
          <ErrorMessage onClose={() => setError(null)} message={error} />
        )}
        <Space direction="vertical" size={"large"}>
          <Typography.Text>
            Don't have an account?
            <Link to={routes.register}>
              <AppButton type="link">Create one.</AppButton>
            </Link>
          </Typography.Text>
        </Space>
      </Flex>
    </AppLayout>
  );
};

export default Login;
