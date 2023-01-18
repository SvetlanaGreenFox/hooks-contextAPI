import React, { useEffect, useState } from 'react';

export default function Details(props) {
  const { userInfo } = props;
  const [activeUser, setActiveUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userInfo.id}.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setActiveUser(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {};
  }, [userInfo.id]);

  const parseDetails = (obj) => {
    let prepareData = [];
    for (let [key, value] of Object.entries(obj)) {
      prepareData.push(`${key}: ${value}`);
    }
    return prepareData;
  };

  return (
    <>
      {activeUser ? (
        !loading ? (
          <div className="card-wrapper">
            <img className="avatar" alt="avatar" src={activeUser.avatar} />
            <p>{activeUser.name}</p>
            <ul className="data-list">
              {parseDetails(activeUser.details).map((item) => (
                <li className="data-item">{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <progress />
        )
      ) : 
      null}
    </>
  );
}
