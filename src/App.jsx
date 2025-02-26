import { Textarea } from "./components/ui/textarea";
import FlickeringGrid from "./components/ui/flickering-grid";
import { ExpandableTabs } from "./components/ui/expandable-tabs";
import { NotebookText, Smile, MessageCircleHeart, Brain } from "lucide-react";

function App() {
  const tabs = [
    { title: "Summary", icon: NotebookText },
    { title: "Funny", icon: Smile },
    { title: "Flirty", icon: MessageCircleHeart },
    { title: "Analysis", icon: Brain },
  ];

  return (
    <>
      <FlickeringGrid />
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 p-4 md:gap-8">
        <Textarea
          placeholder="Click here to paste your text..."
          onClick={async (e) => {
            if (!e.target.value) {
              try {
                const text = await navigator.clipboard.readText();
                e.target.value = text;
              } catch (err) {
                console.error("Failed to read clipboard:", err);
              }
            }
          }}
          onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text");
            e.target.value = text;
          }}
          className="min-h-[120px] w-full max-w-2xl bg-background/80 text-base backdrop-blur-sm md:min-h-[160px] md:text-lg"
        />
        <ExpandableTabs
          tabs={tabs}
          className="max-w-[400px] bg-background/80 text-base backdrop-blur-sm md:text-lg"
        />
      </div>
    </>
  );
}

export default App;
