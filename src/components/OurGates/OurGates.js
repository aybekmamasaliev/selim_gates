import React from 'react';
import s from './OurGates.module.css';
import Button from '../Button/Button';
import item1 from '../../media/item1.svg';
import item2 from '../../media/item2.svg';
import item3 from '../../media/item3.svg';
import item4 from '../../media/item4.svg';
import item5 from '../../media/item5.svg';
import DoorName from '../DoorName/DoorName';
import { Link } from 'react-router-dom';
import WeProvideSlider from '../WeProvideSlider/WeProvideSlider';

const OurGates = () => {
  return (
    <>
      <div className={s.outer_service}>
        <div className={s.services}>
          <div className={s.grid}>
            <Link to={'/services/1'} className={s.item}>
              <img src={item2} alt="" className={s.img} />
              <DoorName>Секционные</DoorName>
            </Link>
            <Link className={s.item} to={'/services/1'}>
              <img src={item4} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </Link>
            <Link className={s.item} to={'/services/1'}>
              <img src={item3} alt="" className={s.img} />
              <DoorName>Распашные</DoorName>
            </Link>
            <Link className={s.item} to={'/services/1'}>
              <img src={item5} alt="" className={s.img} />
              <DoorName>Складные</DoorName>
            </Link>
            <Link className={s.item5} to={'/services/1'}>
              <img src={item1} alt="" className={s.img} />
              <DoorName>Роль ворота</DoorName>
            </Link>
          </div>
          <WeProvideSlider />
          <Link to={'/services'}>
            <Button isSecondary className={s.to_hide}>
              смотреть все
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurGates;
