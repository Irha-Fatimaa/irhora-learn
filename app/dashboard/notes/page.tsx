"use client";

import { useCallback, useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import NotesGrid from "@/components/notes/NotesGrid";
import AddNoteModal from "@/components/notes/AddNoteModal";

import { useAuth } from "@/contexts/AuthContext";

import {
  addNote,
  deleteNote,
  getNotes,
  updateNote,
} from "@/services/notes";

import { Note } from "@/types/note";

export default function NotesPage() {
  const { user } = useAuth();

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingSubject, setEditingSubject] = useState("");

  const fetchNotes = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const data = await getNotes(user.uid);
      setNotes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  async function handleSave(
    title: string,
    subject: string
  ) {
    if (!user) return;

    if (editingId) {
      await updateNote(
        user.uid,
        editingId,
        title,
        subject
      );
    } else {
      await addNote(
        user.uid,
        title,
        subject
      );
    }

    await fetchNotes();

    setEditingId(null);
    setEditingTitle("");
    setEditingSubject("");
  }

  async function handleDelete(noteId: string) {
    if (!user) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) return;

    await deleteNote(user.uid, noteId);

    await fetchNotes();
  }

  function handleEdit(
    id: string,
    title: string,
    subject: string
  ) {
    setEditingId(id);
    setEditingTitle(title);
    setEditingSubject(subject);

    setOpen(true);
  }

  function handleClose() {
    setOpen(false);

    setEditingId(null);
    setEditingTitle("");
    setEditingSubject("");
  }

  if (loading) {
    return (
      <div className="p-8">
        Loading notes...
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-heading">
              Notes
            </h1>

            <p className="mt-2 text-muted">
              Organize all your study notes in one place.
            </p>
          </div>

          <Button onClick={() => setOpen(true)}>
            + New Note
          </Button>
        </div>

        <Input
          type="text"
          placeholder="Search notes..."
        />

        <NotesGrid
          notes={notes}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      <AddNoteModal
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        initialTitle={editingTitle}
        initialSubject={editingSubject}
        isEditing={editingId !== null}
      />
    </>
  );
}