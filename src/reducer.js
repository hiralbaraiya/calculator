
export default function reducer(state = { orderlist: [] }, action) {
  switch (action.type) {
    case 'STORE':
      return { ...state, orderlist: [...action.payload.orderlist] }
    default:
      return state
  }
}
