import React, { useState } from "react";
import AppLayout from "../../components/AppLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteEmployeeMutation,
  useGetEmployeeQuery,
} from "../../app/services/employees";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import routes from "../../routes";
import { Descriptions, Result, Divider, Space, Modal } from "antd";
import AppButton from "../../components/AppButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ErrorMessage from "../../components/ErrorMessage";
import { isErrorWithMessage } from "../../utils/error";
import AppLoader from "../../components/AppLoader";
const EmployeeDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { data, isLoading } = useGetEmployeeQuery(id || "");
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const hideModal = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteEmployee = async () => {
    setLoading(true);
    try {
      await deleteEmployee(data!.id).unwrap();
      navigate(routes.status + "/deleted");
    } catch (error) {
      const isError = isErrorWithMessage(error);
      if (isError) {
        setError(error.data.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
      hideModal();
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
        <>
          <Descriptions bordered column={3} title="Information about employee">
            <Descriptions.Item label="Full name" span={3}>
              {`${data.firstName} ${data.lastName}`}
            </Descriptions.Item>
            <Descriptions.Item label="Age" span={3}>
              {data.age} years old
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={3}>
              {data.address}
            </Descriptions.Item>
          </Descriptions>
          {user?.id === data.userId && (
            <>
              <Divider orientation="left">Actions</Divider>
              <Space>
                <Link to={`${routes.employeesEdit}/${data.id}`}>
                  <AppButton
                    shape="round"
                    type="primary"
                    icon={<EditOutlined />}
                  >
                    Edit
                  </AppButton>
                </Link>
                <AppButton
                  shape="round"
                  onClick={showModal}
                  danger
                  icon={<DeleteOutlined />}
                >
                  Delete
                </AppButton>
              </Space>
            </>
          )}
        </>
      )}
      <ErrorMessage message={error} />
      {data && (
        <Modal
          title="Confirm deleting"
          open={isModalOpen}
          onOk={handleDeleteEmployee}
          onCancel={hideModal}
          okText="Confirm"
          cancelButtonProps={{
            disabled: loading,
          }}
          okButtonProps={{
            loading: loading,
          }}
          cancelText="Cancel"
        >
          Are you sure deleting this employee?
        </Modal>
      )}
    </AppLayout>
  );
};

export default EmployeeDetail;
