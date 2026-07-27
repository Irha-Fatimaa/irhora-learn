"use client";

import { useRef } from "react";

import Button from "../ui/Button";

type UploadPdfProps = {
  onSelect: (file: File) => void;
};

export default function UploadPdf({
  onSelect,
}: UploadPdfProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.click();
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log("Input changed");

    const file = e.target.files?.[0];

    console.log(file);

    if (!file) {
      console.log("No file selected");
      return;
    }

    alert(file.name);

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    onSelect(file);
  }

  return (
    <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-heading">
        Upload Study Notes
      </h2>

      <p className="mt-2 text-muted">
        Upload lecture notes, slides, books, or PDFs for Iris to study.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleChange}
      />

      <Button
        className="mt-8"
        onClick={handleClick}
      >
        Upload PDF
      </Button>
    </div>
  );
}