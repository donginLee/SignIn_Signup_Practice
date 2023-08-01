import SignIn from '../components/signin';
import {useDispatch,useSelector} from 'react-redux';
import {changeID,changePW,signIn} from '../modules/signin';

// 리덕스 스토어에서 상태 및 리듀서 받아와서 로그인 SignIn 컴포넌트에 꽂아주는 컴포넌트

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