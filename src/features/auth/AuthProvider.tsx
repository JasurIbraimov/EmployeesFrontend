import { useCurrentQuery } from "../../app/services/auth";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return children;
};

export default AuthProvider;
