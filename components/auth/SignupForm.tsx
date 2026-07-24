import Link from "next/link";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

export default function SignupForm() {
  return (
    <form className="mt-8 space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>

        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
        />
      </div>

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
          placeholder="Create a password"
        />
      </div>

      <Button>
        Create Account
      </Button>

      <p className="text-center text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary transition hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}