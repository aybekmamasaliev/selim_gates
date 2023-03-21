import React from 'react';
import ReactCurvedText from 'react-curved-text';
import s from './Hand.module.css';
import hand from '../../media/hand.svg';

const Hand = () => {
  return (
    <div className={s.p_abs}>
      <div className={s.circle_txt_div}>
        <ReactCurvedText
          className={s.txt}
          width={160}
          height={160}
          cx={80}
          cy={80}
          rx={60}
          ry={60}
          textProps={{ style: { fontSize: 9, letterSpacing: '3px' } }}
          reversed={true}
          textPathProps={{ fill: '#fff' }}
          startOffset={20}
          text="скролл. скролл. скролл. скролл. скролл. скролл."
        />
        <img src={hand} alt="" />
        <div className={s.pointing}></div>
      </div>
    </div>
  );
};

export default Hand;
