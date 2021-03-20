import React, {useState} from 'react';
import AppNavigationStack from './src/routes/AppNavigationStack';
import GithubUserContext from './src/context/GithubUserContext';

export default function App() {

	const [loggedUser, setLoggedUser] = useState();
	const [textInputUser, setTextInputUser] = useState();
    const [githubUser, setGithubUser] = useState([]);
	const [githubRepos, setGithubRepos] = useState([]);
	const [githubFollowers, setGithubFollowers] = useState([]);
	const [githubFollowing, setGithubFollowing] = useState([]);
    
    const values = {
		loggedUser, setLoggedUser,
        textInputUser, setTextInputUser,
        githubUser, setGithubUser, 
        githubRepos, setGithubRepos, 
        githubFollowers, setGithubFollowers,
        githubFollowing, setGithubFollowing
    };

	return (
		<GithubUserContext.Provider value={values}>  
			<AppNavigationStack />    
		</GithubUserContext.Provider>
	);
}
