import ReactDOM from "react-dom/client";
import Animals from "./components/Animals";

function App() {
  return (
    <div>
      <Animals animal="cat" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
