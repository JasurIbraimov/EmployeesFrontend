import { PlusCircleTwoTone } from "@ant-design/icons";
import AppButton from "../../components/AppButton";
import AppLayout from "../../components/AppLayout";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import type { ColumnsType } from "antd/es/table";
import { EmployeeData } from "../../app/services/types";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

const COLUMNS: ColumnsType<EmployeeData> = [
  {
    title: "First name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Employees = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllEmployeesQuery();
  return (
    <AppLayout>
      <AppButton
        type="primary"
        onClick={() => null}
        icon={<PlusCircleTwoTone />}
      >
        Add Employee
      </AppButton>

      <Table
        onRow={(record) => ({
          onClick: () => navigate(`${routes.employees}/${record.id}`),
        })}
        style={{ marginTop: "30px" }}
        rowKey={(record) => record.id}
        columns={COLUMNS}
        loading={isLoading}
        dataSource={data}
        pagination={{
          pageSize: 8,
        }}
      ></Table>
    </AppLayout>
  );
};

export default Employees;
