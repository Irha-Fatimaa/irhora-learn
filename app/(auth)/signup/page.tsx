import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <h1 className="text-3xl font-bold text-heading">
          Create Account
        </h1>

        <p className="mt-2 text-muted">
          Join Irhora Learn and start learning smarter.
        </p>

        <SignupForm />
      </AuthCard>
    </AuthLayout>
  );
}