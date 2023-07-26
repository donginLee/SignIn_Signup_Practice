import React from 'react';
import {useNavigate} from 'react-router-dom';
// 로그인 성공시 이동하는 홈페이지 컴포넌트
function Homepage(){
    const navigate=useNavigate();
    return(
        <>
            <h1>대충 홈페이지임</h1>
            <button onClick={()=>{navigate('/')}}>다시 홈으로</button>
        </>
    );
}
export default Homepage;