import { ReactNode } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./index.module.css";
import AppHeader from "../AppHeader";
const { Header, Content } = AntLayout;

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <AntLayout className={styles.layout}>
      <Header className={styles.header}>
        <AppHeader />
      </Header>
      <AntLayout>
        <Content className={styles.content}>{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
