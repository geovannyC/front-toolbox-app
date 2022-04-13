import { getData } from "../../../until/fetch";
import { ACTIONS } from "../../../actions/actions";
export async function navigatorController(e) {
  const url = `/files/data?fileName=${e}`;
  const result = await getData(url).then((response) => {
    if (response) {
      return {
        type: ACTIONS.REEMPLACE,
        payload: {
          data: {
            file: response.file,
            lines: response.lines,
            state: "success",
          },
        },
      };
    } else {
      return {
        type: ACTIONS.REEMPLACE,
        payload: {
          data: {
            file: false,
            lines: false,
            state: "error",
          },
        },
      };
    }
  });
  return result;
}
