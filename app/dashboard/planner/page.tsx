"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import Button from "@/components/ui/Button";

import PlannerGrid from "@/components/planner/PlannerGrid";
import PlannerProgressCard from "@/components/planner/PlannerProgressCard";
import AddTaskModal from "@/components/planner/AddTaskModal";

import { useAuth } from "@/contexts/AuthContext";

import {
  addTask,
  deleteTask,
  getTasks,
  toggleTaskCompleted,
  updateTask,
} from "@/services/planner";

import { PlannerTask } from "@/types/planner";

export default function PlannerPage() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState<PlannerTask[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingSubject, setEditingSubject] = useState("");
  const [editingDueDate, setEditingDueDate] = useState("");

  const fetchTasks = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const data = await getTasks(user.uid);
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    void fetchTasks();
  }, [fetchTasks]);

  async function handleSave(
    title: string,
    subject: string,
    dueDate: string
  ) {
    if (!user) return;

    if (editingId) {
      const existing = tasks.find(
        (task) => task.id === editingId
      );

      await updateTask(
        user.uid,
        editingId,
        title,
        subject,
        dueDate,
        existing?.completed ?? false
      );
    } else {
      await addTask(
        user.uid,
        title,
        subject,
        dueDate
      );
    }

    await fetchTasks();

    handleClose();
  }

  async function handleDelete(taskId: string) {
    if (!user) return;

    const confirmed = window.confirm(
      "Delete this task?"
    );

    if (!confirmed) return;

    await deleteTask(user.uid, taskId);

    await fetchTasks();
  }

  async function handleToggle(taskId: string) {
    if (!user) return;

    const task = tasks.find(
      (t) => t.id === taskId
    );

    if (!task) return;

    await toggleTaskCompleted(
      user.uid,
      taskId,
      !task.completed
    );

    await fetchTasks();
  }

  function handleEdit(
    id: string,
    title: string,
    subject: string,
    dueDate: string
  ) {
    setEditingId(id);
    setEditingTitle(title);
    setEditingSubject(subject);
    setEditingDueDate(dueDate);

    setOpen(true);
  }

  function handleClose() {
    setOpen(false);

    setEditingId(null);
    setEditingTitle("");
    setEditingSubject("");
    setEditingDueDate("");
  }

  const completedTasks = useMemo(
    () =>
      tasks.filter((task) => task.completed).length,
    [tasks]
  );

  if (loading) {
    return (
      <div className="p-8">
        Loading planner...
      </div>
    );
  }
  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-heading">
              Study Planner
            </h1>

            <p className="mt-2 text-muted">
              Organize your daily study schedule.
            </p>
          </div>

          <Button onClick={() => setOpen(true)}>
            + Add Task
          </Button>
        </div>

        <PlannerProgressCard
          completed={completedTasks}
          total={tasks.length}
        />

        <PlannerGrid
          tasks={tasks}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <AddTaskModal
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        initialTitle={editingTitle}
        initialSubject={editingSubject}
        initialDueDate={editingDueDate}
        isEditing={editingId !== null}
      />
    </>
  );
}