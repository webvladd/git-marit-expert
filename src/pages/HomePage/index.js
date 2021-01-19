import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonages } from '../../requests/personagesRequest';
import ListPersonages from '../../components/ListPersonages';

import s from './HomePage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.personages.items)

  useEffect(() => {
    dispatch(getPersonages())
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <ListPersonages data={data}/>
    </div>
  )
}

export default HomePage;