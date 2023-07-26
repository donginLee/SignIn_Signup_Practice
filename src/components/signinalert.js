import React from 'react';
import styled from 'styled-components';
function SignInAlert({result,setResult}){
    const text=result===1?"로그인되셨습니다.":result===2?"존재하지 않는 ID입니다.":result===3?"비밀번호가 틀렸습니다.":"error" ;
    const onConfirm=()=>{
        setResult(0);
    };
    const Alert=styled.div`
    background-color: white;
    color:black;
    border: 4px solid gray;
    border-radius:10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    
    text-align: center;
    padding: 20px;
    box-sizing: border-box; /* 패딩과 보더를 박스 모델에 포함 */
    button {
      background-color:gray;
      border-radius:5px;
      font-weight:bold;
      font-size:12px;
      border:0px;
      color:white;
      width: 130px;
      height:20px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform:translateX(-50%);
      margin-bottom:10px;
      display: block;
      
      box-sizing: border-box; /* 패딩과 보더를 박스 모델에 포함 */
    }
    `;
    return(
        <Alert>
            <p>{text}</p>
            <button onClick ={onConfirm}>확인</button>
        </Alert>
    );
}
export default SignInAlert;