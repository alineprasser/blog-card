import "./App.css";
import Card from "./components/BlogCard/Card";

function App() {
  return (
    <>
      <Card
        title="Top 5 Living Room Inspirations"
        description="Curated vibrants colors for your living, make it pop & calm in the same time."
        image_src="/spacejoy-YqFz7UMm8qE-unsplash.jpg"
        image_alt="A cozy living room"
        badge="Interior"
      />
      <div className="credits">
        A challenge by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank">
          GreatFrontEnd Projects
        </a>
        . Built by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects/u/alineprasser"
          target="_blank">
          Aline Prasser :)
        </a>
        .
      </div>
    </>
  );
}

export default App;
