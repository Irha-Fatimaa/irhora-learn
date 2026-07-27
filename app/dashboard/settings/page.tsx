"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import SettingCard from "@/components/dashboard/SettingCard";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [studyReminders, setStudyReminders] =
    useState(true);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setName(
      localStorage.getItem("profileName") ||
        "Irha Fatima"
    );

    setEmail(
      localStorage.getItem("profileEmail") ||
        "irha@example.com"
    );

    setEmailNotifications(
      localStorage.getItem(
        "emailNotifications"
      ) !== "false"
    );

    setStudyReminders(
      localStorage.getItem(
        "studyReminders"
      ) !== "false"
    );
  }, []);

  function saveSettings() {
    localStorage.setItem("profileName", name);

    localStorage.setItem("profileEmail", email);

    localStorage.setItem(
      "emailNotifications",
      String(emailNotifications)
    );

    localStorage.setItem(
      "studyReminders",
      String(studyReminders)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  }

  function resetSettings() {
    setName("Irha Fatima");
    setEmail("irha@example.com");

    setEmailNotifications(true);
    setStudyReminders(true);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-heading">
          Settings
        </h1>

        <p className="mt-2 text-muted">
          Manage your account and application
          preferences.
        </p>
      </div>

      {/* PROFILE */}

      <SettingCard
        title="Profile"
        description="Update your personal information."
      >
        <div className="space-y-5">
          <div>
            <Label htmlFor="name">
              Full Name
            </Label>

            <Input
              id="name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div>
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="flex gap-3">
            <Button
              onClick={saveSettings}
            >
              Save Changes
            </Button>

            <Button
              variant="secondary"
              onClick={resetSettings}
            >
              Reset
            </Button>
          </div>

          {saved && (
            <div className="rounded-xl bg-green-100 p-4 text-green-700">
              ✅ Settings saved successfully.
            </div>
          )}
        </div>
      </SettingCard>

      {/* PREFERENCES */}

      <SettingCard
        title="Preferences"
        description="Customize your learning experience."
      >
        <div className="space-y-5">
          <label className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <h3 className="font-semibold">
                Email Notifications
              </h3>

              <p className="text-sm text-muted">
                Receive quiz results and important
                updates.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) =>
                setEmailNotifications(
                  e.target.checked
                )
              }
              className="h-5 w-5"
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <h3 className="font-semibold">
                Study Reminders
              </h3>

              <p className="text-sm text-muted">
                Receive reminders to maintain your
                learning streak.
              </p>
            </div>

            <input
              type="checkbox"
              checked={studyReminders}
              onChange={(e) =>
                setStudyReminders(
                  e.target.checked
                )
              }
              className="h-5 w-5"
            />
          </label>
        </div>
      </SettingCard>

      {/* ACCOUNT */}

      <SettingCard
        title="Account"
        description="Application information."
      >
        <div className="space-y-3 text-muted">
          <p>
            <strong>Application:</strong> Irhora Learn
          </p>

          <p>
            <strong>AI Assistant:</strong> Iris AI
          </p>

          <p>
            <strong>Developer:</strong> Irha Fatima
          </p>

          <p>
            <strong>Version:</strong> 1.0
          </p>
        </div>
      </SettingCard>
    </div>
  );
}