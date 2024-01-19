import { Typography, Form, Flex, Space } from "antd";
import AppLayout from "../../components/AppLayout";
import AppInput from "../../components/AppInput";
import PasswordInput from "../../components/PasswordInput";
import AppButton from "../../components/AppButton";
import { Link } from "react-router-dom";
import routes from "../../path";
const Register = () => {
  return (
    <AppLayout>
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Title level={3}>Create an account</Typography.Title>
        <Form style={{ width: "70%" }} onFinish={() => {}}>
          <AppInput name="email" type="email" placeholder="Your email" />
          <AppInput name="username" placeholder="Your username" />
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
      </Flex>
    </AppLayout>
  );
};

export default Register;
