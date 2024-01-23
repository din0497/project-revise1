import reactImage from "../../assets/react-core-concepts.png";
import '../Header/Header.css'
const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export default function Header() {
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
