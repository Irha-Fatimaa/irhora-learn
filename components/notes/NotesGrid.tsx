import { Note } from "@/types/note";
import NoteCard from "./NoteCard";

type NotesGridProps = {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    title: string,
    subject: string
  ) => void;
};

export default function NotesGrid({
  notes,
  onDelete,
  onEdit,
}: NotesGridProps) {
  if (notes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center">
        <h2 className="text-xl font-semibold text-heading">
          No notes yet
        </h2>

        <p className="mt-2 text-muted">
          Create your first study note to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          subject={note.subject}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}