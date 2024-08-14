"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'



function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<String>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:String)=>setUserSearchInput(value)}/>
      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput}/>
      
     
    </div>
  )
}

export default Dashboard;