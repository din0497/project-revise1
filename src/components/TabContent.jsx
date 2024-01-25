import { EXAMPLES } from "../data-with-examples";

const TabContent = ({ selectedTopic }) => {
  let topic = selectedTopic.toLowerCase();
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[topic].title}</h3>
      <p>{EXAMPLES[topic].description}</p>
      <pre>
        <code>{EXAMPLES[topic].code}</code>
      </pre>
    </div>
  );
};

export default TabContent;
