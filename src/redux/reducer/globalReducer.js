import ActionType from './globalActionType';

/*
 * Global State
 * berguna untuk menampung semua value global antar component. Contoh kasus adalah 'totalOrder'
 */
const globalState = {
	totalOrder: 0
}

/* 
 * Reducer
 * Berisi semua function yang digunakan saat Redux bekerja
 * atau bisa dibahasakan seperti task yang harus dikerjakan sesuai dengan 'action.type'
 */
const rootReducer = (state = globalState, action) => {

	/*
	* Task PLUS_ORDER
	* berguna untuk menambahkan global value 'totalOrder'
	*/    
	if(action.type === ActionType.PLUS_ORDER){
		return {
			...state,
			totalOrder: state.totalOrder + 1
		}
	}

	/*
	* Task MINUS_ORDER
	* berguna untuk mengurangi global value 'totalOrder'
	*/    
	if(action.type === ActionType.MINUS_ORDER){
		let totalOrder = 0;
			if(state.totalOrder > 0){
			totalOrder = state.totalOrder - 1
		}

		return {
			...state,
			totalOrder: totalOrder
		}
	}

	/*
	* Return state
	*/    
	return state;
}

export default rootReducer;