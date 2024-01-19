import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
interface IAppButtonProps extends ButtonProps {
  children: ReactNode;
}

const AppButton: React.FC<IAppButtonProps> = ({
  children,
  htmlType = "button",
  type,
  danger,
  onClick,
  loading,
  shape,
  icon,
}) => {
  return (
    <Button
      loading={loading}
      onClick={onClick}
      htmlType={htmlType}
      danger={danger}
      type={type}
      shape={shape}
      icon={icon}
    >
      {children}
    </Button>
  );
};

export default AppButton;
