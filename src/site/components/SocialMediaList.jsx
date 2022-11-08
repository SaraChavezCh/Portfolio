import React from "React";
import socialmedia from "../../data/socialmedia.json";

export const SocialMediaList = () => {
  return (
    <ul className="social__grid">
      {socialmedia.map((item) => (
        <li className="social__item" key={item.id}>
          <header className="social__header">
            <div className="social__iconBox">
              <img className="social__icon " src={item.icon} alt="logo" />
            </div>
            <p>{item.description}</p>
            <a href={item.url}>
            <h3 className="heading__tertiary">{item.title}</h3>
              </a>
          </header>
        </li>
      ))}
    </ul>
  );
};
