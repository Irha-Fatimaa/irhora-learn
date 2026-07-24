import Link from "next/link";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Checkbox from "../ui/Checkbox";

export default function LoginForm() {
  return (
    <form className="mt-8 space-y-6">
      <div>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>

        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-heading">
          <Checkbox />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="text-primary transition hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button>
        Sign In
      </Button>

      <p className="text-center text-muted">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-primary transition hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}