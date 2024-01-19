import { Typography, Form, Flex, Space } from "antd";
import AppLayout from "../../components/AppLayout";
import AppInput from "../../components/AppInput";
import PasswordInput from "../../components/PasswordInput";
import AppButton from "../../components/AppButton";
import { Link } from "react-router-dom";
import routes from "../../path";
const Login = () => {
  return (
    <AppLayout>
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Title level={3}>Enter your account</Typography.Title>
        <Form style={{ width: "70%" }} onFinish={() => {}}>
          <AppInput name="email" placeholder="Your email" />
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

          <AppButton htmlType="submit" type="primary">
            Login
          </AppButton>
        </Form>
        <Space direction="vertical" size={"large"}>
          <Typography.Text>
            Don't have an account?{" "}
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
