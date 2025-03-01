import * as React from "react";
import { CopyToClipboard } from "./copy-to-clipboard";
import { cn } from "@/lib/utils";

export function ResultModal({ isOpen, onClose, result }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border bg-background p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Result</h2>
        </div>
        <CopyToClipboard
          position="top-right"
          className="bg-background hover:bg-muted"
          iconClassName="h-4 w-4"
          timeout={2000}
        >
          <div className="whitespace-pre-wrap text-sm">{result}</div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
