

export const appActions = {
    INCREMENT_COUNT : "INCREMENT_COUNT" ,
    DECREMENT_COUNT : "DECREMENT_COUNT"
};

export const incrementCountActions = (count)=>{
    return{
        type: appActions.INCREMENT_COUNT,
        Payload: count
    }
};