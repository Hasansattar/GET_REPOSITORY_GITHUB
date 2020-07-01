import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
    async function githubRepo() {
      const responce = await fetch("https://api.github.com/users/Hasansattar/repos")
      const data = await responce.json();


      setRepos(data);

      console.log(data);

    }

    githubRepo();
  }, []);


  return (
    <  div className="App" >
      < h1>
        hasan
      </h1>
      <ol>
        {repos.map((repoObj, i) => {
          return (
            <li key={i}>

              <a href={repoObj.svn_url}>{repoObj.name}</a><br />
                   Language:{repoObj.language}
            </li>

          )
        })}


      </ol> 
    </div >
  );
}

export default App;
