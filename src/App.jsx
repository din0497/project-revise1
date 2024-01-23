import { data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept  from "./components/CoreConcept";

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
