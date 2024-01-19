import { ReactNode } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./index.module.css";
import AppHeader from "../AppHeader";
const { Header, Content, Sider } = AntLayout;

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
        <Sider className={styles.sider} width={200}>
          Aside
        </Sider>
        <Content className={styles.content}>Content</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
