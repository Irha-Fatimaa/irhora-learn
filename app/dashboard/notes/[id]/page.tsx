"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";

import {
  getNote,
  updateNoteContent,
} from "@/services/notes";

export default function NoteEditorPage() {
  const { id } = useParams();

  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadNote() {
      if (!user || !id) return;

      try {
        const note = await getNote(
          user.uid,
          id as string
        );

        setTitle(note.title);
        setSubject(note.subject);
        setContent(note.content || "");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadNote();
  }, [id, user]);

  async function saveNote() {
    if (!user) return;

    setSaving(true);

    try {
      await updateNoteContent(
        user.uid,
        id as string,
        content
      );

      alert("✅ Note saved successfully.");
    } catch (error) {
      console.error(error);
      alert("Error saving note.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-10">
        Loading note...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-4xl font-bold text-heading">
          {title}
        </h1>

        <p className="mt-2 text-muted">
          {subject}
        </p>
      </div>

      <textarea
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        placeholder="Start writing your study notes here..."
        className="min-h-[500px] w-full rounded-2xl border border-border bg-white p-6 text-lg outline-none"
      />

      <Button
        disabled={saving}
        onClick={saveNote}
      >
        {saving ? "Saving..." : "💾 Save Note"}
      </Button>
    </div>
  );
}