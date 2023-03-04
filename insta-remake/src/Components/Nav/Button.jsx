import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'


const Button = ({text, icon, img}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    let profileImg = ''
    if (isLoading && img === true) {
      profileImg =  <div className = 'mr-4 w-[1.5rem]'>...</div>;
    } else if (img === true && isAuthenticated) {
      profileImg = <img src={user.picture} className = 'rounded-full w-[1.5rem] mr-4'/>
    }

    let className = "fa w-[2.5rem] text-2xl "
    className += icon;

  return (
    <a href = "">
      <div className='hover:bg-slate-50 my-2 rounded-full py-2 px-3 button flex items-center'>
          {img === true ? profileImg : <i className={className}></i>}{text}
      </div>
    </a>
  )
}

export default Button