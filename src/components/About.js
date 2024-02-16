import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 라우터 실습 예제입니다</p>
      {detail && <p>추가 정보입니다</p>}
    </div>
  );
}

export default About;