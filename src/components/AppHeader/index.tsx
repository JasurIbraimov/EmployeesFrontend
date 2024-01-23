import {
  TeamOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import { Space, Flex } from "antd";
import AppButton from "../AppButton";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
const AppHeader = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("TOKEN");
  };

  return (
    <div className={styles.header}>
      <Flex align="center" justify="space-between">
        <Space className={styles.space}>
          <Link to={routes.employees}>
            <AppButton
              type="link"
              icon={<TeamOutlined className={styles.teamIcon} />}
            >
              Employees
            </AppButton>
          </Link>
        </Space>

        {user ? (
          <AppButton
            type="default"
            onClick={handleLogout}
            icon={<LogoutOutlined />}
          >
            Log out
          </AppButton>
        ) : (
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
        )}
      </Flex>
    </div>
  );
};

export default AppHeader;
