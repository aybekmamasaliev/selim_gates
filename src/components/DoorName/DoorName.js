import React from "react";
import s from "./DoorName.module.css";

const DoorName = (props) => {
  return (
    <>
      <p className={s.door_name}>{props.children}</p>
    </>
  );
};

export default DoorName;
