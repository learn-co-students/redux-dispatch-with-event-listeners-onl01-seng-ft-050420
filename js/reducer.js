// add code snippets from README
const countContainer = document.getElementById('container')
const increaseCounterButton = document.getElementById('button')
increaseCounterButton.addEventListener('click', () => dispatch({type: 'INCREASE_COUNT'}))

window.addEventListener("DOMContentLoaded", () => {
  
})

let state;

function reducer(state  = {count: 0}, action) {
    switch(action.type) {
        case 'INCREASE_COUNT': 
            return {count: state.count + 1};
        default: 
            return state;
    }
}

function dispatch(action) {
    state = reducer(state, action)
    render();
}

function render() {
    countContainer.innerText = state.count
}

dispatch({type: '@@init'})
