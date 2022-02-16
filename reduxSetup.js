const INITIAL_STATE = { mood: "bored" };

function moodReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case "happy":
      return { ...state, mood: "happy", face: "^_^" };
    case "sad":
      return { ...state, mood: "sad", face: "⊙︿⊙" };
    case "angry":
      return { ...state, mood: "angry", face: "ಠ_ಠ" };
    case "confused":
      return { ...state, mood: "confused", face: "(@_@)" };
    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);