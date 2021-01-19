import React from 'react';

import s from './ListPersonages.module.scss';

import Frodo from '../../images/Frodo.png';
import Aragorn from '../../images/Aragorn.png';
import Gimli from '../../images/Gimli.png';
import Legolas from '../../images/Legolas.png';
import { ReactComponent as FeatherPenIconSvg } from '../../images/feather-pen-icon.svg';
import { ReactComponent as PlusIconSvg } from '../../images/plus-icon.svg';
import { ReactComponent as DeleteIconSvg } from '../../images/delete-icon.svg';

const imgPerson = {
  Frodo: Frodo,
  Aragorn: Aragorn,
  Gimli: Gimli,
  Legolas: Legolas,
}

const ListPersonages = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map(({ id, name, race }) => {
        return (
          <li key={id} className={s.list_item}>
            <div className={s.list_item_header}>
              <h3>{race}</h3>
            </div>

            <div className={s.list_item_description}>
              <div className={s.img_block}>
                <img src={imgPerson[name]} alt="img" />
              </div>

              <div className={s.name_block}>
                <p>{name}</p>
                <button title="Change name">{<FeatherPenIconSvg />}</button>
              </div>

              <div className={s.btn_block}>
                <button className={s.btn_block_add} title="Add"><PlusIconSvg /></button>
                <button className={s.btn_block_delete} title="Delete"><DeleteIconSvg /></button>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ListPersonages;