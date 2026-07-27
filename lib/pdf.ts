import * as pdfjsLib from "pdfjs-dist";
import type { TextItem } from "pdfjs-dist/types/src/display/api";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

export async function extractPdfText(
  file: File
): Promise<{
  text: string;
  pageCount: number;
}> {
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let text = "";

  for (let page = 1; page <= pdf.numPages; page++) {
    const currentPage = await pdf.getPage(page);

    const content =
      await currentPage.getTextContent();

    const pageText = content.items
      .filter(
        (item): item is TextItem => "str" in item
      )
      .map((item) => item.str)
      .join(" ");

    text += pageText + "\n\n";
  }

  return {
    text,
    pageCount: pdf.numPages,
  };
}