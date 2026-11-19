import ideaPage from "../../IDEA.html?raw";

function App() {
  return (
    <iframe
      className="idea-app-frame"
      title="Node Theory student project portal"
      srcDoc={ideaPage}
    />
  );
}

export default App;
