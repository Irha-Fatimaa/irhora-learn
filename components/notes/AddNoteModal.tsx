"use client";

import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

type AddNoteModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (
    title: string,
    subject: string
  ) => Promise<void>;

  initialTitle?: string;
  initialSubject?: string;
  isEditing?: boolean;
};

export default function AddNoteModal({
  open,
  onClose,
  onSave,
  initialTitle = "",
  initialSubject = "",
  isEditing = false,
}: AddNoteModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [subject, setSubject] = useState(initialSubject);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(initialTitle);
    setSubject(initialSubject);
  }, [initialTitle, initialSubject, open]);

  if (!open) return null;

  async function handleSave() {
    if (!title.trim() || !subject.trim()) return;

    setLoading(true);

    try {
      await onSave(title, subject);

      setTitle("");
      setSubject("");

      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-heading">
          {isEditing ? "Edit Note" : "Create Note"}
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="title">
              Title
            </Label>

            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="subject">
              Subject
            </Label>

            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            disabled={loading}
          >
            {loading
              ? (isEditing ? "Saving..." : "Creating...")
              : (isEditing ? "Save Changes" : "Save Note")}
          </Button>
        </div>
      </div>
    </div>
  );
}