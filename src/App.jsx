import { useState } from "react";
import { data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import TabContent from "./components/TabContent";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(false);
  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = <TabContent selectedTopic={selectedTopic} />;
  }

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {data.map((item, index) => {
              return <CoreConcept {...item} key={index} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandler("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => clickHandler("state")}>State</TabButton>
          </menu>

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
