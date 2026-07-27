"use client";

import { useState } from "react";

import UploadPdf from "@/components/pdf/UploadPdf";
import PdfInfoCard from "@/components/pdf/PdfInfoCard";
import QuickActionGrid from "@/components/pdf/QuickActionGrid";
import PdfChat from "@/components/pdf/PdfChat";
import QuizGenerator from "@/components/pdf/QuizGenerator";

import { extractPdfText } from "@/lib/pdf";

export default function AINotesPage() {
  const [pdfText, setPdfText] = useState("");
  const [fileName, setFileName] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [selectedPrompt, setSelectedPrompt] =
    useState("");

  async function handleSelect(file: File) {
    try {
      setLoading(true);

      const result = await extractPdfText(file);

      setPdfText(result.text);

      localStorage.setItem(
        "irhora-pdf-text",
        result.text
      );

      setPageCount(result.pageCount);

      setFileName(file.name);
    } catch (error) {
      console.error(error);
      alert("Error reading PDF.");
    } finally {
      setLoading(false);
    }
  }

  function handleReplace() {
    localStorage.removeItem("irhora-pdf-text");

    setPdfText("");
    setFileName("");
    setPageCount(0);
    setSelectedPrompt("");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-heading">
          AI Notes
        </h1>

        <p className="mt-2 text-muted">
          Upload PDFs and let Iris summarize,
          explain, generate quizzes,
          flashcards, and more.
        </p>
      </div>

      {!pdfText && (
        <UploadPdf onSelect={handleSelect} />
      )}

      {loading && (
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          Reading PDF...
        </div>
      )}

      {pdfText && (
        <>
          <PdfInfoCard
            fileName={fileName}
            pageCount={pageCount}
            characterCount={pdfText.length}
            onReplace={handleReplace}
          />

          <QuickActionGrid
            onAction={setSelectedPrompt}
          />

          <QuizGenerator pdfText={pdfText} />

          <PdfChat
            pdfText={pdfText}
            initialPrompt={selectedPrompt}
          />
        </>
      )}
    </div>
  );
}