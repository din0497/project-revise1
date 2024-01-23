import reactImage from "./assets/react-core-concepts.png";
import { data } from "./data";


const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function Header() {
  const description = ["React", "Maximilian", "JavaScript"];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description[genRandomInt(2)]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}



const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {data.map((item,index) => {
              return (
                <CoreConcept
                  title={item.title}
                  description={item.description}
                  img={item.image}
                  key={index}
                />
              );
            })}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
