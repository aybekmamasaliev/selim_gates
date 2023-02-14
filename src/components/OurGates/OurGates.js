import React from 'react';
import s from './OurGates.module.css';
import Button from '../Button/Button';
import item1 from '../../media/item1.svg';
import item2 from '../../media/item2.svg';
import item3 from '../../media/item3.svg';
import item4 from '../../media/item4.svg';
import item5 from '../../media/item5.svg';
import DoorName from '../DoorName/DoorName';

const OurGates = () => {
  return (
    <>
      <div className={s.outer_service}>
        <div className={s.services}>
          <div className={s.grid}>
            <div className={s.item}>
              <img src={item2} alt="" className={s.img} />
              <DoorName>Секционные</DoorName>
            </div>
            <div className={s.item}>
              <img src={item4} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </div>
            <div className={s.item}>
              <img src={item3} alt="" className={s.img} />
              <DoorName>Распашные</DoorName>
            </div>
            <div className={s.item}>
              <img src={item5} alt="" className={s.img} />
              <DoorName>Складные</DoorName>
            </div>
            <div className={s.item5}>
              <img src={item1} alt="" className={s.img} />
              <DoorName>Секционные</DoorName>
            </div>
          </div>
          <Button isSecondary>смотреть все</Button>
        </div>
      </div>
    </>
  );
};

export default OurGates;
