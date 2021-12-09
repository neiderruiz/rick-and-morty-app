export type TypeCharacter = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
      name: string,
      url: string
  },
  location: {
      name: string,
      url: string
  },
  image: string,
  episode: [
      string
  ],
  url: string,
  created: string
}

export type TypeInformation = {
  count: number,
  next: string,
  pages: number,
  prev: string,
}

export type TypeState = {
  characters: TypeCharacter[] | any[];
  information: TypeInformation;
  page: number;
  loaded: boolean;
  character: TypeCharacter | null;
  isHero: boolean;
  changeIsHero: (id: boolean) => void;
  nextCharacterModal: () => void;
  prevCharacterModal: () => void;
}


export type ActionTypes =
  | { type: 'ADD_CHARACTERS_TO_LIST_WITH_INFORMATION', payload: { info: TypeInformation, results: TypeCharacter[] } }
  | { type: 'ADD_CHARACTER_MODAL', payload: TypeCharacter }
  | { type: 'CHANGE_IS_HERO', payload: boolean }
