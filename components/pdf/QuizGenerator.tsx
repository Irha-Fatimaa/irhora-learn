"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { QuizQuestion } from "@/types/quiz";

type QuizGeneratorProps = {
  pdfText: string;
};

export default function QuizGenerator({
  pdfText,
}: QuizGeneratorProps) {
  const [difficulty, setDifficulty] =
    useState("Medium");

  const [count, setCount] = useState(5);

  const [loading, setLoading] =
    useState(false);

  const [quiz, setQuiz] = useState<
    QuizQuestion[]
  >([]);

  const [answers, setAnswers] =
    useState<string[]>([]);

  const [submitted, setSubmitted] =
    useState(false);

  const [score, setScore] =
    useState(0);

  async function generateQuiz() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/quiz",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            pdfText,
            difficulty,
            count,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to generate quiz."
        );
      }

      const data =
        await response.json();

      setQuiz(data.quiz);

      setAnswers(
        new Array(data.quiz.length).fill("")
      );

      setSubmitted(false);

      setScore(0);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to generate quiz."
      );
    } finally {
      setLoading(false);
    }
  }

  function submitQuiz() {
    let total = 0;

    quiz.forEach((question, index) => {
      if (
        answers[index] ===
        question.correctAnswer
      ) {
        total++;
      }
    });

    setScore(total);

    setSubmitted(true);
  }

  function retryQuiz() {
    setAnswers(
      new Array(quiz.length).fill("")
    );

    setSubmitted(false);

    setScore(0);
  }
    return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-heading">
        AI Quiz Generator
      </h2>

      <p className="mt-2 text-muted">
        Generate an AI-powered quiz from your uploaded PDF.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className="w-full rounded-xl border border-border p-3"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Number of Questions
          </label>

          <select
            value={count}
            onChange={(e) =>
              setCount(Number(e.target.value))
            }
            className="w-full rounded-xl border border-border p-3"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <Button
          disabled={loading}
          onClick={() => void generateQuiz()}
        >
          {loading
            ? "Generating..."
            : "📝 Generate Quiz"}
        </Button>

        {quiz.length > 0 && (
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-bold text-heading">
              Generated Quiz
            </h3>

            {quiz.map((question, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-slate-50 p-5"
              >
                <h4 className="font-semibold">
                  Question {index + 1}
                </h4>

                <p className="mt-3">
                  {question.question}
                </p>

                <div className="mt-4 space-y-2">
                  {question.options.map(
                    (option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition

${
  submitted
    ? option ===
      question.correctAnswer
      ? "border-green-500 bg-green-100"
      : answers[index] === option
      ? "border-red-500 bg-red-100"
      : "border-border bg-white"
    : "border-border bg-white hover:bg-slate-100"
}`}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          checked={
                            answers[index] === option
                          }
                          onChange={() => {
                            const updated = [
                              ...answers,
                            ];

                            updated[index] =
                              option;

                            setAnswers(updated);
                          }}
                          disabled={submitted}
                        />

                        <span>
                          {option}
                        </span>
                      </label>
                    )
                  )}
                </div>

                {submitted && (
                  <p className="mt-3 text-sm font-medium text-green-700">
                    ✅ Correct Answer:{" "}
                    {question.correctAnswer}
                  </p>
                )}
              </div>
            ))}

            {!submitted && (
              <Button
                onClick={submitQuiz}
              >
                ✅ Submit Quiz
              </Button>
            )}

            {submitted && (
              <div className="rounded-xl bg-green-100 p-6">
                <h3 className="text-2xl font-bold">
                  🎉 Quiz Completed
                </h3>

                <p className="mt-4 text-lg">
                  Score:
                  <strong>
                    {" "}
                    {score} / {quiz.length}
                  </strong>
                </p>

                <p className="mt-2 text-lg">
                  Percentage:
                  <strong>
                    {" "}
                    {Math.round(
                      (score /
                        quiz.length) *
                        100
                    )}
                    %
                  </strong>
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    onClick={retryQuiz}
                  >
                    🔄 Retry Quiz
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() =>
                      void generateQuiz()
                    }
                  >
                    📝 Generate New Quiz
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}