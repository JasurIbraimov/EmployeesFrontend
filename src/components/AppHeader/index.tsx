import {
  TeamOutlined,
  UserAddOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import { Typography, Space, Flex } from "antd";
import AppButton from "../AppButton";
import { Link } from "react-router-dom";
import routes from "../../path";
const AppHeader = () => {
  return (
    <div className={styles.header}>
      <Flex align="center" justify="space-between">
        <Space className={styles.space}>
          <Link to={routes.home}>
            <AppButton
              type="link"
              icon={<TeamOutlined className={styles.teamIcon} />}
            >
              Employees
            </AppButton>
          </Link>
        </Space>

        <Space className={styles.space}>
          <Link to={routes.register}>
            <AppButton
              type="primary"
              icon={<UserAddOutlined className={styles.teamIcon} />}
            >
              Register
            </AppButton>
          </Link>
          <Link to={routes.login}>
            <AppButton
              type="default"
              icon={<LoginOutlined className={styles.teamIcon} />}
            >
              Login
            </AppButton>
          </Link>
        </Space>
      </Flex>
    </div>
  );
};

export default AppHeader;
