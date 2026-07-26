import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Note } from "@/types/note";

export async function addNote(
  userId: string,
  title: string,
  subject: string
) {
  await addDoc(
    collection(db, "users", userId, "notes"),
    {
      title,
      subject,
      createdAt: serverTimestamp(),
    }
  );
}

export async function getNotes(
  userId: string
): Promise<Note[]> {
  const q = query(
    collection(db, "users", userId, "notes"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    title: docSnap.data().title,
    subject: docSnap.data().subject,
    createdAt: docSnap.data().createdAt?.toDate() ?? new Date(),
  }));
}

export async function deleteNote(
  userId: string,
  noteId: string
) {
  await deleteDoc(
    doc(db, "users", userId, "notes", noteId)
  );
}

export async function updateNote(
  userId: string,
  noteId: string,
  title: string,
  subject: string
) {
  await updateDoc(
    doc(db, "users", userId, "notes", noteId),
    {
      title,
      subject,
    }
  );
}