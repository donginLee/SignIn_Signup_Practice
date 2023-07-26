const CHANGE_ID ='signin/CHANGE_ID';
const CHANGE_PW ='signin/CHANGE_PW';
const SIGN_IN='signin/SIGN_IN';

export const changeID = text=>({type:CHANGE_ID,text});
export const changePW = text=>({type:CHANGE_PW,text});
export const signIn = ()=>({type:SIGN_IN});

const initialState={
    id:'',
    pw:''
};
export default function SignIn(state=initialState,action){
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

        case SIGN_IN:
            return{
                id:'',
                pw:'',

            };
        default:
            return state;
    }
}