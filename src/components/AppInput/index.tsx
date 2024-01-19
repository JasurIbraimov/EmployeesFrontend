import { Form, Input } from "antd";
import { HTMLInputTypeAttribute } from "react";

interface IAppInputProps {
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const AppInput: React.FC<IAppInputProps> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <Form.Item
      rules={[{ required: true, message: "Required field" }]}
      name={name}
      shouldUpdate
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default AppInput;
