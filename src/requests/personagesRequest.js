import { setPersonages } from "../redux/actions/personagesActions";

export const getPersonages = () => async (dispatch) => {
  const ws = await new WebSocket('ws://testapi.marit.expert:3004');

  ws.onopen = function (e) {
    ws.send({ cmd: "get_list" })
  };

  ws.onmessage = function (event) {
    const data = JSON.parse(event.data);
    dispatch(setPersonages(data));
  };
};