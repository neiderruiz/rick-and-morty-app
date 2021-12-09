import React, { FC, useEffect, useReducer } from 'react'
import { get } from '../services/api'
import { initialState } from './initialState'
import ContextApp from './ContextApp'
import { appReducer } from './appReducer'
import { TypeCharacter } from '../types/type'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppState: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (state.loaded) {
      showCharacterModal(state.characters[0]?.id);
    }
  }, [state.loaded])

  const getCharacterData = async () => {
    await get(`character`).then(response => {
      dispatch({ type: 'ADD_CHARACTERS_TO_LIST_WITH_INFORMATION', payload: response })
    }
    )
  }

  const getMoreData = () => {
    if (state.page <= state.information.pages) {
      get(`character/?page=${state.page}`).then(response => {
        dispatch({ type: 'ADD_CHARACTERS_TO_LIST_WITH_INFORMATION', payload: response })
      }
      )
    }
  }

  const showCharacterModal = (id: number) => {
    window.scrollY > 0 ? changeIsHero(false) : changeIsHero(true)
    state.characters.map((character: TypeCharacter) => {
      if (character.id === id) {
        dispatch({ type: 'ADD_CHARACTER_MODAL', payload: character })
      }
    }
    )
  }

  const changeIsHero = (isHero: boolean) => {
    dispatch({
      type: 'CHANGE_IS_HERO',
      payload: isHero
    })
  }

  const nextCharacterModal = () => {
    const count = state.characters.length - 5;
    const curentCharacter = state.character?.id;
    if (count === curentCharacter) {
      getMoreData();
    }
    let index = state.characters.findIndex((character: TypeCharacter) => character.id === state.character?.id)
    if (index === state.characters.length - 1) {
      index = 0
    } else {
      index++
    }
    showCharacterModal(state.characters[index].id)
  }

  const prevCharacterModal = () => {
    let index = state.characters.findIndex((character: TypeCharacter) => character.id === state.character?.id)
    if (index === 0) {
      index = state.characters.length - 1
    } else {
      getMoreData()
      index--
    }
    showCharacterModal(state.characters[index].id)
  }

  return (
    <ContextApp.Provider
      value={{
        getCharacterData,
        getMoreData,
        characters: state.characters,
        information: state.information,
        loaded: state.loaded,
        showCharacterModal,
        character: state.character,
        isHero: state.isHero,
        changeIsHero,
        nextCharacterModal,
        prevCharacterModal
      }}
    >
      {children}
    </ContextApp.Provider>
  )
}

export default AppState
