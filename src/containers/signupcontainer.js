import SignUp from '../components/signup';
import {useDispatch,useSelector} from 'react-redux';
import {changeID,changePW,changeNN,signUp} from '../modules/signup';

// 리덕스 스토어에서 상태 및 리듀서 받아와서 회원가입 SignUp 컴포넌트에 꽂아주는 컴포넌트
function SignUpContainer(){
    const id=useSelector(state=>state.signup.id);
    const pw=useSelector(state=>state.signup.pw);
    const nn=useSelector(state=>state.signup.nn);

    const dispatch=useDispatch();

    const onChangeID=text=>{dispatch(changeID(text));};
    const onChangePW=text=>{dispatch(changePW(text));};
    const onChangeNN=text=>{dispatch(changeNN(text));};
    const onSignUp=()=>{dispatch(signUp());};

    return(
        <>
            <SignUp id={id}
                    pw={pw}
                    nn={nn}
                    onChangeID={onChangeID}
                    onChangePW={onChangePW}
                    onChangeNN={onChangeNN}
                    onSignUp={onSignUp}>
            </SignUp> 
        </>
    ); 
}
export default SignUpContainer;