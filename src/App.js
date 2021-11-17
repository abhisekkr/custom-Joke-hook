import "./App.css";
import useRandomJoke from "./useRandomJoke";
import { useRef, useState } from "react";

function App() {
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);

	const [firstName, setFirstName] = useState("Abhisek");
	const [lastName, setlastName] = useState("Kumar");

	const joke = useRandomJoke(firstName, lastName);

	const generateJoke = (e) => {
		e.preventDefault();
		setFirstName(firstNameRef.current.value);
		setlastName(lastNameRef.current.value);
	};

	return (
		<div className="App">
			<h2>Joke Generator by Abhisek</h2>
			<p>{joke}</p>
			<form>
				<input placeholder="FirstName" ref={firstNameRef} />
				<input placeholder="LastName" ref={lastNameRef} />
				<button onClick={generateJoke}>Generate</button>
			</form>
		</div>
	);
}

export default App;
