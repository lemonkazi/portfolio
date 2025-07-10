
import React from 'react';
import { useNavigate } from "react-router-dom";
import PictureComponent from "../PictureComponent/PictureComponent";

const ProjectList = ({ projects }) => {
  const navigate = useNavigate();

  const handleClickOpen = (item) => {
    navigate(`/${item.id}`);
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
};

export default ProjectList;
