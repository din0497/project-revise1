import { data } from "../data";
import TabContent from "./TabContent";
import TabButton from "./TabButton";
import { useState } from "react";
import Tab from "./Tab";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(false);

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = <TabContent selectedTopic={selectedTopic} />;
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tab
        buttonWrapper={'menu'}
        buttons={data.map((con) => (
          <TabButton
            isActive={selectedTopic}
            onSelect={() => clickHandler(con.title)}
            key={con.title}
          >
            {con.title}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tab>
    </section>
  );
}
