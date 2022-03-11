export const Reducer = (state,action) => {
    if(action.type === "Remove_Card"){
        return{
            ...state,
            item: state.item.filter((curElem)=>{
                return curElem.Organisation !== action.payload 
            }),
        };
    }
    return state;
};