import React,{useState} from 'react';
import SignInAlert from './signinalert';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
const SignInTemplate=styled.div`
    display:flex;
    position:relative;
    margin:0;
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
function SignIn({id,pw,onChangeID,onChangePW,onSignIn}){
    const [result,setResult]=useState(0); //result 0:팝업X 1:로그인 성공 2: 존재하지않는 ID 3: PW 틀림
    const none=()=>{}
    const navigate=useNavigate();
    const onChange=e=>{
        e.target.name==="signinid"?onChangeID(e.target.value)
        :e.target.name==="signinpw"?onChangePW(e.target.value)
        :none();
    };
    const onRegister= ()=>{
        console.log(id,pw);
        setResult(1);
        onSignIn();
        navigate('/home');
    };
    return(
        <>
            <SignInTemplate>
            <div>
                <div className="inputContainer">
                    <p className="explanation">ID</p>
                    <input name="signinid" value={id} onChange={onChange}/>
                </div>
                <div className="inputContainer">
                    <p className="explanation">PW</p>
                    <input name="signinpw" value={pw} onChange={onChange}/>
                </div>
            </div>
            <button className="button"onClick={onRegister}>
                로그인
            </button>
            {result!==0&& <SignInAlert result={result} setResult={setResult}></SignInAlert>}
            </SignInTemplate>
        </>
    );
}
export default SignIn;