import React from "react";
import s from "./Title.module.css";

const Title=({children, ...props})=>{
    return(<>
    <div className={s.title}>
        {children}
    </div>
    </>)
}

export default Title;