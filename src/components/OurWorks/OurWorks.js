import React from 'react';
import s from './OurWorks.module.css';
import left from '../../media/left_circle.svg';
import right from '../../media/right_circle.svg';
import gate from '../../media/gate.svg';
import vhome from '../../media/vhome.svg';
import japan from '../../media/japan.svg';

const OurWorks = () => {
  return (
    <>
      <div className={s.works}>
        <div className={s.scroll_div}>
          <div className={s.left_img}>
            <img src={japan} alt="" className={s.full_img} />
          </div>
          <div className={s.central_img}>
            <img src={gate} alt="" className={s.full_img} />

            <img src={right} alt="" className={s.left_btn} />
            <img src={left} alt="" className={s.right_btn} />
          </div>
          <div className={s.left_img}>
            <img src={vhome} alt="" className={s.full_img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
