import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

export default function ForgotPasswordForm() {
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

      <Button>
        Send Reset Link
      </Button>
    </form>
  );
}