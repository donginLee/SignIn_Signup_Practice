import SignIn from '../components/signin';
import {useDispatch,useSelector} from 'react-redux';
import {changeID,changePW,signIn} from '../modules/signin';


function SignInContainer(){
    const id=useSelector(state=>state.signin.id);
    const pw=useSelector(state=>state.signin.pw);
    
    const dispatch=useDispatch();

    const onChangeID=text=>{dispatch(changeID(text));};
    const onChangePW=text=>{dispatch(changePW(text));};
    const onSignIn=()=>{dispatch(signIn());};

    return(
        <>
            <SignIn id={id}
                    pw={pw}
                    onChangeID={onChangeID}
                    onChangePW={onChangePW}
                    onSignIn={onSignIn}>
            </SignIn> 
        </>
    ); 
}
export default SignInContainer;