import React,{useState} from 'react';
import styled from 'styled-components';
import SignUpAlert from './signupalert';
const SignUpTemplate=styled.div`
    display:flex;
    position:relative;
    input{
        width:100px;
 
        height:100%;
    }
    .explanation{
        display:inline-block;
        box-sizing:border;
        width:40px;
        height:10px;
        
        padding-right:5px;
        margin:0;
        text-align:right;
        //justify:center;
        font-weight:bold;
    }
    .inputContainer{
        margin:0px;
        margin-top:5px;
        margin-bottom:5px;
        
    }
    .button{
        position:relative;
        display:block;
        margin-top:5px;
        margin-bottom:5px;
        left:5px;
        width:40px;
        box-sizing:content-box;
        //height:100%;
    }
`;
function SignUp({id,pw,nn,onChangeID,onChangePW,onChangeNN,onSignUp}){
    const [result,setResult]=useState(0);
    const none=()=>{};
    const onChange=e=>{
        
        e.target.name==="signupid"?onChangeID(e.target.value)
        :e.target.name==="signuppw"?onChangePW(e.target.value)
        :e.target.name==="signupnn"?onChangeNN(e.target.value)
        :none();
    };
    const onRegister= ()=>{
        console.log(id,pw,nn);
        setResult(1);
        onSignUp();
    };
    return(
        <>
            <SignUpTemplate>
                <div >
                    <div className="inputContainer">
                        <p className="explanation">ID</p>
                        <input name="signupid" value={id} onChange={onChange}/>
                    </div>
                    <div className="inputContainer">
                        <p className="explanation">PW</p>
                        <input name="signuppw"value={pw} onChange={onChange}/>
                    </div>
                    <div className="inputContainer">
                        <p className="explanation">닉네임</p>
                        <input name="signupnn"value={nn} onChange={onChange}/>
                    </div>
                </div>
                <button className="button flexbox" onClick={onRegister}>회원가입</button>
                {result!==0&&<SignUpAlert result={result} setResult={setResult}></SignUpAlert>}
            </SignUpTemplate>
        </>
    );
}
export default SignUp;