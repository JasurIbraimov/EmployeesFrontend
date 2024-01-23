import { useState } from "react";
import AppLayout from "../../components/AppLayout";
import EmployeeForm from "../../components/EmployeeForm";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCreateEmployeeMutation } from "../../app/services/employees";
import { EmployeeData } from "../../app/services/types";
import routes from "../../routes";
import { isErrorWithMessage } from "../../utils/error";
const AddEmployee = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [createEmployee] = useCreateEmployeeMutation();

  const handleOnErrorMessageClose = () => {
    setError(null);
  };
  const handleAddEmployee = async (data: EmployeeData) => {
    setLoading(true);
    try {
      console.log(data);
      await createEmployee(data).unwrap();
      navigate(`${routes.status}/created`);
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
      <EmployeeForm
        title="Add employee"
        buttonText="Add"
        onFinish={handleAddEmployee}
        error={error}
        onErrorClose={handleOnErrorMessageClose}
        loading={loading}
        icon={<PlusOutlined />}
      />
    </AppLayout>
  );
};

export default AddEmployee;
