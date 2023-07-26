const CHANGE_ID ='signup/CHANGE_ID';
const CHANGE_PW ='signup/CHANGE_PW';
const CHANGE_NN ='signup/CHANGE_NN';
const SIGN_UP='signup/SIGN_UP';

export const changeID = text=>({type:CHANGE_ID,text});
export const changePW = text=>({type:CHANGE_PW,text});
export const changeNN = text=>({type:CHANGE_NN,text});
export const signUp = ()=>({type:SIGN_UP});

const initialState={
    id:'',
    pw:'',
    nn:''
};
export default function SignUp(state=initialState,action){
    switch(action.type){
        case CHANGE_ID:
            return{
                ...state,
                id:action.text
            };
        case CHANGE_PW:
            return{
                ...state,
                pw:action.text
            };
        case CHANGE_NN:
            return{
                ...state,
                nn:action.text
            };
        case SIGN_UP:
            return{
                id:'',
                pw:'',
                nn:''
            };
        default:
            return state;
    }
}