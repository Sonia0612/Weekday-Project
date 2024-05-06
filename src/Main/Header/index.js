import React from 'react'
import Filters from '../../components/Filters'

const Header = ({jobsList,jobInfo,setJobInfo}) => {
  return (
    <div>
      <Filters jobsList={jobsList} setJobInfo={setJobInfo} jobInfo={jobInfo}/>
    </div>
  )
}

export default Header
