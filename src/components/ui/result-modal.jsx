import * as React from "react";
import { cn } from "@/lib/utils";

export function ResultModal({ isOpen, onClose, result }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        // Do not call onClose here
      }}
    >
      <div
        className="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border bg-background p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Result</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="whitespace-pre-wrap text-sm">{result}</div>
      </div>
    </div>
  );
}
