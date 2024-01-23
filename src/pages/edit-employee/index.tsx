import { useState } from "react";
import AppLayout from "../../components/AppLayout";
import EmployeeForm from "../../components/EmployeeForm";
import { EditOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../../app/services/employees";
import { EmployeeData } from "../../app/services/types";
import routes from "../../routes";
import { isErrorWithMessage } from "../../utils/error";
import { Result } from "antd";
import AppButton from "../../components/AppButton";
import AppLoader from "../../components/AppLoader";
const EditEmployee = () => {
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [editEmployee] = useEditEmployeeMutation();
  const { data, isLoading } = useGetEmployeeQuery(id || "");

  const handleOnErrorMessageClose = () => {
    setError(null);
  };
  const handleEditEmployee = async (data: EmployeeData) => {
    setLoading(true);
    try {
      await editEmployee({ ...data, id: id as string }).unwrap();
      navigate(`${routes.status}/updated`);
    } catch (error) {
      const isError = isErrorWithMessage(error);
      if (isError) {
        setError(error.data.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <AppLayout>
      {isLoading ? (
        <AppLoader />
      ) : !data ? (
        <Result
          title={"Employee not found"}
          status={"404"}
          extra={
            <Link to={routes.employees}>
              <AppButton type="primary">Go to employees page</AppButton>
            </Link>
          }
        />
      ) : (
        <EmployeeForm
          employee={data}
          title="Edit employee information"
          buttonText="Edit"
          onFinish={handleEditEmployee}
          error={error}
          onErrorClose={handleOnErrorMessageClose}
          loading={loading}
          icon={<EditOutlined />}
        />
      )}
    </AppLayout>
  );
};

export default EditEmployee;
