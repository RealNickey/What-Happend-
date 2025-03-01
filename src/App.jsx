import { useState } from "react";
import { Textarea } from "./components/ui/textarea";
import FlickeringGrid from "./components/ui/flickering-grid";
import { ExpandableTabs } from "./components/ui/expandable-tabs";
import {
  NotebookText,
  Smile,
  MessageCircleHeart,
  Brain,
  MessageCircleDashed,
} from "lucide-react";
import { summarizeText, rewriteText } from "./lib/api";

function App() {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const tabs = [
    { title: "Summary", icon: NotebookText },
    { title: "Funny", icon: Smile },
    { title: "Flirty", icon: MessageCircleHeart },
    { title: "Analysis", icon: Brain },
  ];

  const handleTabChange = async (index) => {
    if (!inputText) return;
    setIsLoading(true);
    setError(null);

    try {
      let result;
      switch (index) {
        case 0: // Summary
          result = await summarizeText(inputText);
          break;
        case 1: // Funny
          result = await rewriteText(inputText, "funny");
          break;
        case 2: // Flirty
          result = await rewriteText(inputText, "flirty");
          break;
        case 3: // Analysis
          result = await rewriteText(inputText, "analytical");
          break;
        default:
          setProcessedText("");
          return;
      }
      setProcessedText(result);
    } catch (err) {
      setError(err.message);
      console.error("Error processing text:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FlickeringGrid />
      <div className="fixed left-4 top-4 flex items-center gap-2 rounded-lg bg-background/80 p-2 backdrop-blur-sm md:left-6 md:top-6 md:p-3">
        <MessageCircleDashed className="h-5 w-5 md:h-6 md:w-6" />
        <span className="text-sm font-medium md:text-base">What Happend</span>
      </div>
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 p-4 md:gap-8">
        <Textarea
          placeholder="Click here to paste your text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onClick={async (e) => {
            if (!inputText) {
              try {
                const text = await navigator.clipboard.readText();
                setInputText(text);
              } catch (err) {
                console.error("Failed to read clipboard:", err);
              }
            }
          }}
          onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text");
            setInputText(text);
          }}
          className="min-h-[120px] w-full max-w-2xl bg-background/80 text-base backdrop-blur-sm md:min-h-[160px] md:text-lg"
        />
        {processedText && (
          <Textarea
            value={processedText}
            readOnly
            className="min-h-[120px] w-full max-w-2xl bg-background/80 text-base backdrop-blur-sm md:min-h-[160px] md:text-lg"
          />
        )}
        {isLoading ? (
          <div className="text-blue-500">Processing your text...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : null}
        <ExpandableTabs
          tabs={tabs}
          className="max-w-[400px] bg-background/80 text-base backdrop-blur-sm md:text-lg"
          onChange={handleTabChange}
        />
      </div>
    </>
  );
}

export default App;
