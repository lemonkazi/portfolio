import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { animated, useSpring } from "react-spring";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Project/Project.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PictureComponent = ({ item, onClickOpen }) => {
  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped ? `scale(1.1)` : `scale(1.0)`,
    flex: "1 0 0%",
  });

  const trigger = () => {
    // Unchanged
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

export default function Project({ projects }) {

  const navigate = useNavigate();

  const handleClickOpen = (item) => {
    navigate(`/${item.id}`)
  };

  const handleClose = () => {
  };

  return (
    <>
      {projects.map((item, index) => (
        <div className="project-tile" key={index}>
          <PictureComponent
            item={item}
            onClickOpen={(item) => handleClickOpen(item)}
          />
        </div>
      ))}
    </>
  );
}
