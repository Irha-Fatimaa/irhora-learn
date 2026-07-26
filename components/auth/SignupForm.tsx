"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

import { signup } from "@/services/auth";

export default function SignupForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log("Signup submitted");
    setError("");
    setLoading(true);

    try {
      await signup(name, email, password);

      router.push("/dashboard");
    } catch (error) {
  if (error instanceof Error) {
    setError(error.message);
  } else {
    setError("Something went wrong. Please try again.");
  }
} finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
    >
      <div>
        <Label htmlFor="name">Full Name</Label>

        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>

        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account"}
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