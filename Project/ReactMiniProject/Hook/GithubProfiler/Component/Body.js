import { useEffect, useState } from "react";

function Body() {
  const [Profile, setProfile] = useState([]);
  const [numberOfProfile, setnumberofProfile] = useState("");
  const [NameofProfile, setNameofProfile] = useState("");

  // Fetch profiles by count (randomized using 'since')
  async function fetchProfilesByCount(count) {
    try {
      const ran = Math.floor(1 + Math.random() * 100000);
      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );
      const data = await response.json();
      setProfile(data); // data is an array
    } catch (error) {
      console.error("Failed to fetch profiles:", error);
    }
  }
  // Fetch profile by username
  async function fetchProfileByName(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setProfile([data]); // Wrap single object in array
    } catch (error) {
      console.error("Profile not found:", error);
      setProfiles([]); // Clear old profiles
    }
  }

  useEffect(() => {
    fetchProfilesByCount(10);
  }, []);

  return (
    <>
      <div className="filter">
        <input
          type="number"
          placeholder="Input Number"
          value={numberOfProfile}
          onChange={(e) => setnumberofProfile(e.target.value)}
        />
        <button onClick={() => fetchProfilesByCount(Number(numberOfProfile))}>
          Search Profile
        </button>
        <input
          type="text"
          placeholder="GitHub Username"
          value={NameofProfile}
          onChange={(e) => setNameofProfile(e.target.value)}
        />
        <button onClick={() => fetchProfileByName(NameofProfile)}>
          Search Profile
        </button>
      </div>

      <div className="Profile">
        {Profile.map((value) => {
          return (
            <div key={value.id} className="card">
              <img src={value.avatar_url} alt={value.login} />
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank" rel="noreferrer">
                Profile
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Body;

//try catch block
//callback
//search by name
