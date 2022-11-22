import React from "react";
import socialmedia from "../../data/socialmedia.json";
import { useSelector } from 'react-redux';


export const SocialMediaList = () => {
  const translate = useSelector(state => state.translate);
  return (
    <ul className="social__grid">
      {socialmedia.map((item) => (
        <li className="social__item" key={item.id}>
          <header className="social__header">
            <div className="social__iconBox">
              <img className="social__icon " src={`${item.icon}`}alt="logo" />
            </div>
            {translate ? <p>{item.description}</p> : <p>{item.descriptionEs}</p> }
            
            <a href={item.url}>
              <h3 className="heading__tertiary">{item.title}</h3>
            </a>
          </header>
        </li>
      ))}
    </ul>
  );
};
