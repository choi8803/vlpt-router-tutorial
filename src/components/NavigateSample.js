import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateSample() {
  const navigate = useNavigate();

  const goBack = () => {
    const answer = window.confirm("현재 페이지를 종료할까요?")
    if (answer) {
      navigate(-1);
    };
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default NavigateSample;