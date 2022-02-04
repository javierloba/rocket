import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCloud } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="loader">
      <div className="rocket">
        <FontAwesomeIcon className="faRocket" icon={faRocket} />
        <FontAwesomeIcon className="faCloud cloudOne" icon={faCloud} inverse />
        <FontAwesomeIcon className="faCloud cloudTwo" icon={faCloud} inverse />
        <FontAwesomeIcon className="faCloud cloudThree" icon={faCloud} inverse />
        <FontAwesomeIcon className="faCloud cloudFour" icon={faCloud} inverse />
      </div>
      <span>
        <i></i>
      </span>
    </div>
  );
}

export default App;
