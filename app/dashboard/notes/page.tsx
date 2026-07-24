import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import NoteCard from "@/components/dashboard/NoteCard";

export default function NotesPage() {
  return (
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

        <Button>
          Upload Notes
        </Button>
      </div>

      <Input
        type="text"
        placeholder="Search notes..."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <NoteCard
          title="Introduction to AI"
          subject="Artificial Intelligence"
        />

        <NoteCard
          title="Database Normalization"
          subject="DBMS"
        />

        <NoteCard
          title="OSI Model"
          subject="Networking"
        />

        <NoteCard
          title="Binary Trees"
          subject="DSA"
        />

        <NoteCard
          title="Probability Basics"
          subject="Mathematics"
        />

        <NoteCard
          title="Machine Learning"
          subject="AI"
        />
      </div>
    </div>
  );
}