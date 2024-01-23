import { FrownFilled } from "@ant-design/icons";
import { Alert } from "antd";

const ErrorMessage = ({
  message,
  onClose,
}: {
  message?: string | null;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  if (!message) return null;
  return (
    <Alert
      closable
      showIcon
      icon={<FrownFilled />}
      message={message}
      type="error"
      onClose={onClose}
    />
  );
};

export default ErrorMessage;
