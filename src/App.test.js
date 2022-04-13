
import { reducerReemplace } from "./reducer/reducer";
import { ACTIONS } from "./actions/actions";
import { example_format_expected_state, example_format_state } from "./example.format";
import App from './App';
describe("testing home component",()=>{
  test('should to get ', () => {
    
  });
})
describe("Redux Testing",()=>{
  test('state File should to return Strict Equal', () => {
    const state= example_format_state
    const expected = example_format_expected_state
    const action = {
      type: ACTIONS.REEMPLACE,
      payload: {
        data: example_format_expected_state
      }
    }
    const newState = reducerReemplace(state,action)
    expect(newState).toStrictEqual(expected)
  });
  test('steate list files should to return Strict Equal', () => {
    const state= example_format_state
    const expected = example_format_expected_state
    const action = {
      type: ACTIONS.REEMPLACE,
      payload: {
        data: example_format_expected_state
      }
    }
    const newState = reducerReemplace(state,action)
    expect(newState).toStrictEqual(expected)
  });
})
