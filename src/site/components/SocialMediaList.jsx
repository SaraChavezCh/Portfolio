import socialmedia from "../../data/socialmedia.json";

export const SocialMediaList = () => {
  return (
    <ul className="social__grid">
      {socialmedia.map((item) => (
        <li className="social__item" key={item.id}>
          <header className="social__header">
            <div className="social__iconBox">
              <img className="social__icon " src={item.icon} alt="" />
            </div>
            <p>{item.description}</p>
            <h3
              onClick={() => setShowService(true)}
              className="heading__tertiary"
            >
              {item.title}
            </h3>
          </header>
        </li>
      ))}
    </ul>
  );
};
