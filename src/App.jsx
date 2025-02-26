import { Textarea } from "./components/ui/textarea";
import FlickeringGrid from "./components/ui/flickering-grid";

function App() {
  return (
    <>
      <FlickeringGrid />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Textarea
          className="w-full max-w-xl bg-background/80 backdrop-blur-sm"
          placeholder="Type something..."
        />
      </div>
    </>
  );
}

export default App;
