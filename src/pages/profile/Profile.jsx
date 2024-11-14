import React from 'react'
import { useMatch } from 'react-router-dom';

export default function Profile() {
	const match = useMatch("/profile");
	  const isProfilePage = useMatch("/brrrrr");
	  console.log("🚀 ~ Profile ~ isProfilePage:", isProfilePage)

	console.log("🚀 ~ Profile ~ match:", match)
	
	
  return (
	<div>Profile</div>
  )
}
