import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCharacters } from "../Modules/CharacterManager";


export const Register = () => {
	const [registerUser, setRegisterUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
        characterId: 0,
		username: ""
	});

    const [characters, setCharacters]= useState([])

	const [conflictDialog, setConflictDialog] = useState(false);

	const navigate = useNavigate();

	const handleBack = () => {
        navigate("/login")
    }

	const handleInputChange = (event) => {
		const newUser = { ...registerUser };
		let selectedVal= event.target.value;

        if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
        newUser[event.target.id]=selectedVal
		setRegisterUser(newUser);
	};

	const existingUserCheck = () => {
		// If your json-server URL is different, please change it below!
		return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
			.then((res) => res.json())
			.then((user) => !!user.length);
	};

    useEffect(() => {
        getAllCharacters().then(characterFromAPI => {
            setCharacters(characterFromAPI)
        })
    }, [])

	const handleRegister = (e) => {
		e.preventDefault();

        const characterId = registerUser.characterId

        

		existingUserCheck().then((userExists) => {
			if (!userExists) {
				// If your json-server URL is different, please change it below!
				fetch("http://localhost:8088/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: registerUser.email,
						name: `${registerUser.firstName} ${registerUser.lastName}`,
                        characterId: registerUser.characterId,
						username: registerUser.username
					}),
				})
					.then((res) => res.json())
					.then((createdUser) => {
						if (createdUser.hasOwnProperty("id")) {
							
							// sessionStorage.setItem("sunshine_user", createdUser);
							navigate("/");
						}
					});
			} else {
				setConflictDialog(true);
			}
		});
	};

	return (
		<main style={{ textAlign: "center" }}>
			<dialog className="dialog dialog--password" open={conflictDialog}>
				<div>Account with that email address already exists</div>
				<button
					className="button--close"
					onClick={(e) => setConflictDialog(false)}
				>
					Close
				</button>
			</dialog>

			<form className="form--login" onSubmit={handleRegister}>
				<h3 className="h3 mb-3 font-weight-normal">
					Please Register for sunShine
				</h3>
				<fieldset>
					<label htmlFor="firstName"> First Name </label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						className="form-control"
						placeholder="First name"
						required
						autoFocus
						value={registerUser.firstName}
						onChange={handleInputChange}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="lastName"> Last Name </label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						className="form-control"
						placeholder="Last name"
						required
						value={registerUser.lastName}
						onChange={handleInputChange}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="username"> Username </label>
					<input
						type="text"
						name="username"
						id="username"
						className="form-control"
						placeholder="Username"
						required
						value={registerUser.username}
						onChange={handleInputChange}
					/>
				</fieldset>
                <fieldset>
                    <label htmlFor="selectedCharacter">Select a Main Character</label>
                    <select value={registerUser.characterId} name="characterId"
                    id="characterId"
                    onChange={handleInputChange}
                    className="form-control">
                        <option value="0">Select a Main Character</option>
                        {characters.map(c => (
                            //add Stock Icons for each character
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </fieldset>
				<fieldset>
					<label htmlFor="inputEmail"> Email address </label>
					<input
						type="email"
						name="email"
						id="email"
						className="form-control"
						placeholder="Email address"
						required
						value={registerUser.email}
						onChange={handleInputChange}
					/>
				</fieldset>
				<fieldset>
					<button type="submit" className="select-buttonz"> Sign in </button>
				<div className= "select-buttonz2" onClick={handleBack}> Cancel </div>
				</fieldset>
                    
			</form>
		</main>
	);
};
