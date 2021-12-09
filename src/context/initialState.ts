export const initialState = {
    getCharacterData: () => { },
    characters: [],
    information: {
        pages: 0,
        next: '',
        prev: '',
        count: 0,
    },
    page: 1,
    loaded: false,
    character: null,
    isHero: true,
    changeIsHero: () => { },
    nextCharacterModal: () => { },
    prevCharacterModal: () => { },
}
