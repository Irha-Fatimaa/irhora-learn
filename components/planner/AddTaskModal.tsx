"use client";

import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

type AddTaskModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (
    title: string,
    subject: string,
    dueDate: string
  ) => Promise<void>;

  initialTitle?: string;
  initialSubject?: string;
  initialDueDate?: string;

  isEditing?: boolean;
};

export default function AddTaskModal({
  open,
  onClose,
  onSave,
  initialTitle = "",
  initialSubject = "",
  initialDueDate = "",
  isEditing = false,
}: AddTaskModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [subject, setSubject] = useState(initialSubject);
  const [dueDate, setDueDate] = useState(initialDueDate);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(initialTitle);
    setSubject(initialSubject);
    setDueDate(initialDueDate);
  }, [
    initialTitle,
    initialSubject,
    initialDueDate,
    open,
  ]);

  if (!open) return null;

  async function handleSave() {
    if (!title || !subject || !dueDate) return;

    setLoading(true);

    try {
      await onSave(
        title,
        subject,
        dueDate
      );

      setTitle("");
      setSubject("");
      setDueDate("");

      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-heading">
          {isEditing
            ? "Edit Task"
            : "Create Task"}
        </h2>

        <div className="mt-6 space-y-5">
          <div>
            <Label htmlFor="title">
              Task Title
            </Label>

            <Input
              id="title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Complete AI Assignment"
            />
          </div>

          <div>
            <Label htmlFor="subject">
              Subject
            </Label>

            <Input
              id="subject"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              placeholder="Artificial Intelligence"
            />
          </div>

          <div>
            <Label htmlFor="date">
              Due Date
            </Label>

            <Input
              id="date"
              type="date"
              value={dueDate}
              onChange={(e) =>
                setDueDate(e.target.value)
              }
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : isEditing
              ? "Save Changes"
              : "Create Task"}
          </Button>
        </div>
      </div>
    </div>
  );
}