import { Outlet } from "react-router";
import { AuthLayout } from "~/modules/auth/layouts/auth-layout";

export default function Auth() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
