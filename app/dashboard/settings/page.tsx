import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import SettingCard from "@/components/dashboard/SettingCard";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-heading">
          Settings
        </h1>

        <p className="mt-2 text-muted">
          Manage your account and preferences.
        </p>
      </div>

      <SettingCard
        title="Profile"
        description="Update your personal information."
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              defaultValue="Irha Fatima"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              defaultValue="irha@example.com"
            />
          </div>

          <Button>
            Save Changes
          </Button>
        </div>
      </SettingCard>

      <SettingCard
        title="Preferences"
        description="Customize your learning experience."
      >
        <div className="space-y-3 text-muted">
          <p>🌙 Dark Mode (Coming Soon)</p>
          <p>🌍 Language (Coming Soon)</p>
          <p>🔔 Notifications (Coming Soon)</p>
        </div>
      </SettingCard>
    </div>
  );
}