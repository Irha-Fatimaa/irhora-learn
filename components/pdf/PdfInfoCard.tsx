import Button from "../ui/Button";

type PdfInfoCardProps = {
  fileName: string;
  pageCount: number;
  characterCount: number;
  onReplace: () => void;
};

export default function PdfInfoCard({
  fileName,
  pageCount,
  characterCount,
  onReplace,
}: PdfInfoCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-heading">
            📄 {fileName}
          </h2>

          <p className="mt-2 text-green-600 font-medium">
            ✅ Ready for AI
          </p>

          <div className="mt-4 flex gap-8 text-sm text-muted">
            <span>
              <strong>{pageCount}</strong> Pages
            </span>

            <span>
              <strong>
                {characterCount.toLocaleString()}
              </strong>{" "}
              Characters
            </span>
          </div>
        </div>

        <Button
          variant="secondary"
          onClick={onReplace}
        >
          Replace PDF
        </Button>
      </div>
    </div>
  );
}