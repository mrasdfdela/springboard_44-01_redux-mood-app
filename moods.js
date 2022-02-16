const emoji = document.querySelector('#emoji');

const btnHappy = document.querySelector('#btnHappy');
const btnSad = document.querySelector('#btnSad');
const btnAngry = document.querySelector('#btnAngry');
const btnConfused = document.querySelector('#btnConfused');

btnHappy.addEventListener('click', ()=> {
  store.dispatch({ type: 'happy' });
  const state = store.getState();
  emoji.innerText = state.face;
});

btnSad.addEventListener("click", () => {
  store.dispatch({ type: "sad" });
  const state = store.getState();
  emoji.innerText = state.face;
});

btnAngry.addEventListener("click", () => {
  store.dispatch({ type: "angry" });
  const state = store.getState();
  emoji.innerText = state.face;
});

btnConfused.addEventListener("click", () => {
  store.dispatch({ type: "confused" });
  const state = store.getState();
  emoji.innerText = state.face;
});