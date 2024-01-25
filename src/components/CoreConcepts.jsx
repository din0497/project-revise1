import CoreConcept from "./CoreConcept";
import { data } from "../data";

export function CoreConcepts () {
    return <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {data.map((item, index) => {
        return (
          <CoreConcept
            {...item}
            key={index}
          />
        );
      })}
    </ul>
  </section>
  ;
}