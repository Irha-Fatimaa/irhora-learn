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
import { PlannerTask } from "@/types/planner";

export async function addTask(
  userId: string,
  title: string,
  subject: string,
  dueDate: string
) {
  await addDoc(
    collection(db, "users", userId, "planner"),
    {
      title,
      subject,
      dueDate,
      completed: false,
      createdAt: serverTimestamp(),
    }
  );
}

export async function getTasks(
  userId: string
): Promise<PlannerTask[]> {
  const q = query(
    collection(db, "users", userId, "planner"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    title: docSnap.data().title,
    subject: docSnap.data().subject,
    dueDate: docSnap.data().dueDate,
    completed: docSnap.data().completed,
  }));
}

export async function deleteTask(
  userId: string,
  taskId: string
) {
  await deleteDoc(
    doc(db, "users", userId, "planner", taskId)
  );
}

export async function updateTask(
  userId: string,
  taskId: string,
  title: string,
  subject: string,
  dueDate: string,
  completed: boolean
) {
  await updateDoc(
    doc(db, "users", userId, "planner", taskId),
    {
      title,
      subject,
      dueDate,
      completed,
    }
  );
}
export async function toggleTaskCompleted(
  userId: string,
  taskId: string,
  completed: boolean
) {
  await updateDoc(
    doc(db, "users", userId, "planner", taskId),
    {
      completed,
    }
  );
}