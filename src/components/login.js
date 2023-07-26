import React from 'react';
import SignInContainer from '../containers/signincontainer';
import SignUpContainer from '../containers/signupcontainer';
function Login(){
    return(
        <>
            <SignInContainer>
            </SignInContainer>
            <hr></hr>
            <SignUpContainer></SignUpContainer>
        </>
    );
}
export default Login;