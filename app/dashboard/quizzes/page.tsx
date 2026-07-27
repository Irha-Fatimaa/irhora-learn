"use client";

import { useEffect, useState } from "react";

import QuizGenerator from "@/components/pdf/QuizGenerator";

export default function QuizzesPage() {
  const [pdfText, setPdfText] =
    useState("");

  useEffect(() => {
    const stored =
      localStorage.getItem(
        "irhora-pdf-text"
      );

    if (stored) {
      setPdfText(stored);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-heading">
          AI Quiz Generator
        </h1>

        <p className="mt-2 text-muted">
          Generate quizzes from your uploaded
          notes.
        </p>
      </div>

      {!pdfText ? (
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            No Notes Uploaded
          </h2>

          <p className="mt-4 text-muted">
            Upload a PDF from the AI Notes page
            first. Once uploaded, your notes
            will automatically be available for
            quiz generation.
          </p>
        </div>
      ) : (
        <QuizGenerator pdfText={pdfText} />
      )}
    </div>
  );
}