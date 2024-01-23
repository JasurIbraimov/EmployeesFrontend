import { Link, useParams } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { Result, Row } from "antd";
import AppButton from "../../components/AppButton";
import routes from "../../routes";
const Statuses: Record<string, string> = {
  created: "User created successfully",
  updated: "User updated successfully",
  deleted: "User deleted successfully",
};

const Status = () => {
  const { status } = useParams();
  return (
    <AppLayout>
      <Row align={"middle"} justify={"center"}>
        <Result
          title={status ? Statuses[status] : "Status not found"}
          status={status ? "success" : "error"}
          extra={
            <Link to={routes.employees}>
              <AppButton type="primary">Go to employees page</AppButton>
            </Link>
          }
        />
      </Row>
    </AppLayout>
  );
};

export default Status;
