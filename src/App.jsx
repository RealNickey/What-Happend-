import { Textarea } from "./components/ui/textarea";
import FlickeringGrid from "./components/ui/flickering-grid";
import { ExpandableTabs } from "./components/ui/expandable-tabs";
import { NotebookText,Smile,MessageCircleHeart,Brain } from "lucide-react";

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
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 p-4">
        <Textarea className="w-full max-w-xl bg-background/80 backdrop-blur-sm" />
        <ExpandableTabs
          tabs={tabs}
          className="max-w-[300px] bg-background/80 backdrop-blur-sm"
        />
      </div>
    </>
  );
}

export default App;
