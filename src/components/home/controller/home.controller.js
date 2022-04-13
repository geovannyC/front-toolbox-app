import { ACTIONS } from "../../../actions/actions";
import { getData } from "../../../until/fetch";
export async function homeController (){
  const url = "/files/list";
  const getAllFiles = await getData(url).then((response) => {
    if (response) {
      return {
        type: ACTIONS.CALL_FILE_LIST,
        payload: {
          data: response.data,
        },
      };
    } else {
      return {
        type: ACTIONS.CALL_FILE_LIST,
        payload: {
          data: false,
        },
      };
    }
  });
  return getAllFiles;
};
