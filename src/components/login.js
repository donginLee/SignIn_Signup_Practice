import React from 'react';
import SignInContainer from '../containers/signincontainer';
import SignUpContainer from '../containers/signupcontainer';
// 로그인/회원가입 전체 화면 컴포넌트
function LogIn(){
    return(
        <>
            <SignInContainer>
            </SignInContainer>
            <hr></hr>
            <SignUpContainer></SignUpContainer>
        </>
    );
}
export default LogIn;