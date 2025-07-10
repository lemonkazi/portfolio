
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

const PictureComponent = ({ item, onClickOpen }) => {
  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped ? `scale(1.1)` : `scale(1.0)`,
    flex: "1 0 0%",
  });

  const trigger = () => {
    setIsBooped((state) => !state);
  };

  return (
    <div className="project-image-text" onClick={() => onClickOpen(item)}>
      <animated.picture
        onMouseEnter={trigger}
        onMouseLeave={trigger}
        style={style}
      >
        <source srcSet={item.jpg} type="image/jpeg" />
        <img src={item.jpg} alt={item.title} className="project-image" />
      </animated.picture>
      <div className="project-title">
        <div>
          <h5>{item.title}</h5>
        </div>
        <div className="project-title-delete">
          {item.skills.map((a, index) => (
            <p key={index}>{a}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
