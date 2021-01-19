export const SET_PERSONAGES = 'SET_PERSONAGES';

export const setPersonages = (data) => {
  return {
    type: SET_PERSONAGES,
    payload: data
  };
};