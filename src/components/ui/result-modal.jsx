import * as React from "react";
import { Button } from "./button";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResultModal({ isOpen, onClose, result }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

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
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "transition-colors",
              copied
                ? "bg-green-500/90 text-white hover:bg-green-500/90"
                : "hover:bg-muted"
            )}
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="whitespace-pre-wrap text-sm">{result}</div>
      </div>
    </div>
  );
}
