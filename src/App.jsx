import { data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  function clickHandler() {
    console.log("clicked!");
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
            <TabButton onSelect={clickHandler}>Components</TabButton>
            <TabButton onSelect={clickHandler}>JSX</TabButton>
            <TabButton onSelect={clickHandler}>Props</TabButton>
            <TabButton onSelect={clickHandler}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
