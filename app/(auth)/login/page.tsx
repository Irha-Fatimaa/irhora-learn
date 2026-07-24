import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <h1 className="text-3xl font-bold text-heading">
          Welcome Back
        </h1>

        <p className="mt-2 text-muted">
          Sign in to continue learning with Iris.
        </p>
      </AuthCard>
    </AuthLayout>
  );
}