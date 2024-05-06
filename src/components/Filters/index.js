import React,{useState} from 'react'
import FilterComponents from './FilterComponents'

const Filters = ({jobsList, jobInfo, setJobInfo}) => {
    const [roleName,setRoleName]=useState('');
    const [employee,setEmployee]=useState('');
    const [experience,setExperience]=useState('');
    const [work,setWork]=useState('');
    const [pay,setPay]=useState('');
    const [companyName,setCompanyName]=useState('');
  return (
    <div >
      <FilterComponents
      roleName={roleName}
      setRoleName={setRoleName}
      employee={employee}
      setEmployee={setEmployee}
      experience={experience}
      setExperience={setExperience}
      work={work}
      setWork={setWork}
      pay={pay}
      setPay={setPay}
      companyName={companyName}
      setCompanyName={setCompanyName}
      setJobInfo={setJobInfo} 
      jobInfo={jobInfo}
      jobsList={jobsList}
      />
    </div>
  )
}

export default Filters
