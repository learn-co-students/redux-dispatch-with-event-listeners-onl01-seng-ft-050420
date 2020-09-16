// add code snippets from README
//goal:click the button you see a number go from 0 to 1 click again then it goes from 
//1 to 2
//clicking on button should change the state
//change in state should be rendered

//let state = {count: 0}
let state;

function reducer(state = {count: 0}, action){
    //debugger
    //action is returning {type: "@@INIT"}
    //to get access to the value of the key of type we use action.type to get the string out of there
    switch (action.type){
        
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
        default:
            return state;
    }
}

function dispatch(action){
    state = reducer(state, action);
    render();
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button')

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})
//we are using the dispatch function to update the state ever time someone clicks this button
//the dispatch function is now a callback function in our event listener