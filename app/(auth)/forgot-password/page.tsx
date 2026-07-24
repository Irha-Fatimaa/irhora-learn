import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <h1 className="text-3xl font-bold text-heading">
          Forgot Password
        </h1>

        <p className="mt-2 text-muted">
           Enter your email and we&apos;ll send you a password reset link.
        </p>

        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}