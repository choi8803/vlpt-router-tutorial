import React from 'react'
import { useParams } from 'react-router-dom';

const profileData = {
  jeonghyeon: {
    name: '최정현',
    description: '성격이 느긋하고 차분함',
  },
  mina: {
    name: '신미나',
    description: '성격이 급하고 화가 많음'
  }
}

const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];
  
  if (!profile) {
    return <div>존재하지 않는 유저입니다</div>
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>  
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;