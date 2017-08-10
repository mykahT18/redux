const defaultState = {
  todos: [],
  isEditing: false
}
// console.log("DEFAULT", defaultState)

const todoItems = (state = defaultState, action) => {
  // console.log("State-> ", state.isEditing)
  // console.log("Todo reducer------->")
	switch(action.type){
		case "ADD_ITEMS":
      // console.log("Todo Switch------->", ...state.todos)
      // console.log("Actions-------=> ", state )

			return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            name: action.item
          }
        ]
      })
    case "SHOW_ITEMS":
      // console.log("------> Show All Items")
      return Object.assign({}, state, {
        state
      })
    case "EDIT_ITEMS":
      console.log("Editing Item ------> ", action)

      
      console.log("New State Copy ------> ", action.id, action.item)
      return Object.assign({}, state, {
        isEditing: action.isEditing,
        todos: [
          // ...state.todos,
          ...state.todos.slice(0, action.id),
          {
            name: action.item
          },
          ...state.todos.slice(action.id + 1)
        ] 
      })
      

    case "SHOW_EDIT":
      console.log("Switching to edit input")
      return{...state, isEditing: action.isEditing}
    
    case "DELETE_ITEMS":
      // console.log("Delete Item ------> ")
      return Object.assign({}, state, {
       todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id + 1)
        ]
      })
    default:
      return state
	}
}
export default todoItems