import { ActionTypes, TypeState } from "../types/type";

export const appReducer = (state: TypeState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_CHARACTERS_TO_LIST_WITH_INFORMATION':
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        information: action.payload.info,
        page: state.page + 1,
        loaded: true
      }
    case 'ADD_CHARACTER_MODAL':
      return {
        ...state,
        character: action.payload
      }

    case 'CHANGE_IS_HERO':
      return {
        ...state,
        isHero: action.payload
      }


    default:
      return state
  }
}