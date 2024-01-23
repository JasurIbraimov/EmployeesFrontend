import { Spin } from "antd";

const AppLoader = () => {
  return (
    <Spin
      size="large"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default AppLoader;
