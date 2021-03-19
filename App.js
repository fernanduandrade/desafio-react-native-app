import React, { useState } from 'react';
import AppNavigationStack from './src/routes/AppNavigationStack';
import GithubUserContext from './src/context/GithubUserContext';

export default function App() {

	const[githubUser, setGithubUser] = useState([]);
	const[githubRepos, setGithubRepos] = useState([]);
	const[githubFollowers, setGithubFollowers] = useState([]);
	const[githubFollowing, setGithubFollowing] = useState([]);

	return (
		<GithubUserContext.Provider value={{githubUser, setGithubUser, githubRepos, setGithubRepos,githubFollowers, setGithubFollowers, githubFollowing, setGithubFollowing}}> 
			<AppNavigationStack />    
		</GithubUserContext.Provider>
	);
}
