import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Form, Input } from "antd";
import { NamePath } from "antd/es/form/interface";
import React from "react";

interface IPasswordInputProps {
  name: "password" | "confirmPassword";
  placeholder?: string;
  dependencies: NamePath[];
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  name,
  placeholder,
  dependencies,
}) => {
  return (
    <Form.Item
      hasFeedback
      rules={[
        { required: true, message: "Required field" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }
            if (name === "confirmPassword") {
              if (getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords mismatch!"));
            } else {
              if (value.length < 8) {
                return Promise.reject(
                  new Error("Password should contain at least 8 symbols")
                );
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
      name={name}
      dependencies={dependencies}
    >
      <Input.Password
        iconRender={(visible) =>
          visible ? <EyeFilled /> : <EyeInvisibleFilled />
        }
        placeholder={placeholder}
        size="large"
      />
    </Form.Item>
  );
};

export default PasswordInput;
