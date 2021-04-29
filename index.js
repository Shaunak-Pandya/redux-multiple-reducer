const redux = require('redux');


const createStore = redux.createStore; //alias
const combineReducers = redux.combineReducers;

//Constant created to store a sting as an indentifier of Action
const BUY_CAKE = "BUY_CAKE";
const BUY_COOKIE = "BUY_COOKIE";


//Action Funtion retuning a Object to be mapped by reducer
function buyCakeAction() {
	return {
		type : BUY_CAKE,
		info : 'Specific Action Caller for Cake'
	}
}

function buyCookieAction() {
	return {
		type : BUY_COOKIE,
		info : 'Specific Action Caller for Cookie'
	}
}
//Temp store object

const cakeState = {
	numberOfCakes : 10
}

const cookieState = {
	numberOfCookies : 20
}

//********************************************************************
//Reducer function (Pure Function) (previousState, action) => newState

const cakeReducer = (state = cakeState, action) => {
	switch(action.type){
		case BUY_CAKE : return {
			...state,
			numberOfCakes : state.numberOfCakes - 1
		}

		default : return state;
	}
}

const cookieReducer = (state = cookieState, action) => {
	switch(action.type){
		case BUY_COOKIE : return {
			...state,
			numberOfCookies : state.numberOfCookies - 1
		}

		default : return state;
	}
}

//***********************
//Combining Reducers
const rootReducer = combineReducers({
	cake : cakeReducer,
	cookie : cookieReducer
})


//store creation
const store = createStore(rootReducer);
console.log('Initial State - ', store.getState());

//make a subscriber
const unsubscribe = store.subscribe(() => console.log('Updated State - ', store.getState()))

//Action Caller a.k.a dispatch(actionCallerFunction to return action object)
store.dispatch(buyCakeAction())
store.dispatch(buyCakeAction())
store.dispatch(buyCakeAction())

store.dispatch(buyCookieAction())
store.dispatch(buyCookieAction())
store.dispatch(buyCookieAction())

unsubscribe()
