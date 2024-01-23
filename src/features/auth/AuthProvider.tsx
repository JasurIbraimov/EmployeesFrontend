import { useCurrentQuery } from "../../app/services/auth";
import AppLoader from "../../components/AppLoader";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();
  if (isLoading) {
    return <AppLoader />;
  }
  return children;
};

export default AuthProvider;
