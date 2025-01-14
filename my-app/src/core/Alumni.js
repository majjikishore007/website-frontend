import React, { useState, useEffect } from "react";
import Base from "./Base";
import UserCard from "./userCard";
import "../Styles/members.css";
import Spinner from "./Spinner";
const Alumni = () => {
  const [loadSpinner, setLoadSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
  }, []);
  const [alumnis, setAlumnis] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "http://codexweb-backend.herokuapp.com/api/getAlumni"
    );
    const alumnis = await response.json();
    console.log(alumnis, "json");
    setAlumnis(alumnis);
  };
  const getAlumniData = () => {
    return (
      <div>
        <Base>
          <section>
            <div className="class-alumni">
              <h2>Our Alumni</h2>
              <div className="splitx">
                {alumnis.map((alumni) => (
                  <UserCard
                    img={alumni.githubDP}
                    name={alumni.name}
                    skill={alumni.skill}
                    twitterLink={alumni.twitter}
                    linkedinLink={alumni.linkedin}
                    githubLink={alumni.github}
                  />
                ))}
              </div>
            </div>
          </section>
        </Base>
        <h1>Membres</h1>
      </div>
    );
  };
  return <>{loadSpinner ? <Spinner /> : getAlumniData()}</>;
};

export default Alumni;
