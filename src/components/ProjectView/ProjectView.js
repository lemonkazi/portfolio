import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ScrollToTop from "react-scroll-to-top";
import "./ProjectView.scss";
import { projectItems } from '../../utils/projectItems';

const ProjectView = ({ match }) => {
  let { portId } = useParams();

  const [selected, setSelected] = useState();

  useEffect(() => {
    const projectObj = projectItems.find(item=>item.id === portId);

    setSelected(projectObj);

  }, [portId])

  console.log('selected', selected)

  return (
    <div className="project-content">
      <div className="project-content_description">
        <div className="title">
          <h3>{selected && selected.title}</h3>
        </div>
        <div className="overview">
          <h5>Overview</h5>
          <p>{selected && selected.description}</p>
        </div>
        <div className="solution">
          <h5>Solution</h5>
          {
            selected && selected.solution.map(item => (
              <p>{item}</p>
            ))
          }
        </div>
        <div className="duration">
          <h5>Duration</h5>
          <p>{selected && selected.duration}</p>
        </div>
        <div className="skill">
          <h5>Technologies</h5>
          <div className="skill-list">
            {selected &&
              selected.skills.map((item) => (
                <p>
                  {item},<br></br>
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="project-content_carousel">
        {selected &&
            selected.overview.map((item) => (
              <div key={item} className="image_item">
                <img src={item} alt="overview" width={"100%"} height={"auto"}/>
              </div>
        ))}
        {/* <Carousel
          autoPlay
        >
          {selected &&
            selected.overview.map((item) => (
              <div key={item}>
                <img src={item} alt="overview" />
              </div>
            ))}
        </Carousel> */}
      </div>
      <ScrollToTop smooth style={{bottom:'100px'}}/>
    </div>
  );
};

export default ProjectView;
