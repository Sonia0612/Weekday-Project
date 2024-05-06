import React from "react";
import SingleSelectComponent from "./SingleSelectComponent";
import {
  EMPLOYEES_FILTER_OPTIONS,
  EXPERIENCE_FILTER_OPTIONS,
  PAY_FILTER_OPTIONS,
  ROLES_FILTER_OPTIONS,
  WORK_FILTER_OPTIONS,
} from "../../constants";
import { Grid } from "@mui/material";

const FilterComponents = ({
  roleName,
  setRoleName,
  employee,
  setEmployee,
  experience,
  setExperience,
  work,
  setWork,
  pay,
  setPay,
  companyName,
  setCompanyName,
  jobsList,
  jobInfo,
  setJobInfo,
}) => {
  const rolesFilter = () => {
    const categoriesWithRoles = Object.entries(ROLES_FILTER_OPTIONS).flatMap(
      ([category, roles]) =>
        Object.entries(roles).map(([key, title]) => ({
          category: category,
          label: title,
          value: title,
        }))
    );
    return (
      <div>
        <p style={{ height: "5px", fontSize: "16px" }}>
          {roleName?.length ? "Roles" : ""}
        </p>
        <SingleSelectComponent
          options={categoriesWithRoles}
          onChange={(event) => {
            const title = event.value;
            if (title) {
              const jobsList = jobInfo?.filter(
                (job) => job.jobRole.toLowerCase() === title.toLowerCase()
              );
              setJobInfo(jobsList);
            } else {
              setJobInfo(jobInfo);
            }
            setRoleName(title);
          }}
          label={""}
          value={roleName}
          useGroupBy={true}
          placeholder="Roles"
        />
      </div>
    );
  };
  const employeesFilter = () => {
    return (
      <div>
        <p style={{ height: "5px", fontSize: "16px" }}>
          {employee?.length ? "No Of Employees" : ""}
        </p>
        <SingleSelectComponent
          options={EMPLOYEES_FILTER_OPTIONS}
          onChange={(event) => {
            setEmployee(event.value);
          }}
          label={""}
          value={employee}
          placeholder="Number Of Employees"
        />
      </div>
    );
  };
  const experienceFilter = () => {
    return (
      <div>
        <p style={{ height: "5px", fontSize: "16px" }}>
          {experience?.length ? "Experience" : ""}
        </p>
        <SingleSelectComponent
          options={EXPERIENCE_FILTER_OPTIONS}
          onChange={(event) => {
            const title= event.value;
            if (title) {
                const jobsList = jobInfo?.filter(job =>
                  parseInt(job.minExp )=== parseInt(title)
                );
                setJobInfo(jobsList)
              } else {
                setJobInfo(jobInfo);
            }
            setExperience(event.value);
          }}
          label={""}
          value={experience}
          placeholder="Experience"
        />
      </div>
    );
  };
  const workFilter = () => {
    return (
      <div>
        <p style={{ height: "5px", fontSize: "16px" }}>
          {work?.length ? "Remote" : ""}
        </p>
        <SingleSelectComponent
          options={WORK_FILTER_OPTIONS}
          onChange={(event) => {
            const title= event.value;
            if (title) {
                const jobsList = jobInfo?.filter(job =>
                  (job.location).toLowerCase() === (title).toLowerCase()
                );
                setJobInfo(jobsList)
              } else {
                setJobInfo(jobInfo);
            }
            setWork(event.value)
        }
        }
          label={""}
          value={work}
          placeholder="Remote"
        />
      </div>
    );
  };
  const payFilter = () => {
    return (
      <div>
        <p style={{ height: "5px", fontSize: "16px" }}>
          {pay?.length ? "Min Base Pay" : ""}
        </p>
        <SingleSelectComponent
          options={PAY_FILTER_OPTIONS}
          onChange={(event) => setPay(event.value)}
          label={""}
          value={pay}
          placeholder="Min Base Pay"
        />
      </div>
    );
  };
  const SearchComponent = () => {
    return (
      <div>
        <p style={{ height: "5px", fontSize: "16px" }}>
          {companyName?.length ? "Company Name" : ""}
        </p>
        <input
          type="text"
          onChange={(event) => setCompanyName(event.target.value)}
          value={companyName}
          placeholder="Search Company Name"
          style={{ height: "50px", fontSize: "16px" }}
        />
      </div>
    );
  };
  return (
    <Grid
      container
      spacing={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xl={2} xs={2} md={2} lg={2} pr={1}>
        {rolesFilter()}
      </Grid>
      <Grid item xl={2} xs={2} md={2} lg={2} pr={1}>
        {employeesFilter()}
      </Grid>
      <Grid item xl={1.5} xs={1.5} md={1.5} lg={1.5} pr={1}>
        {experienceFilter()}
      </Grid>
      <Grid item xl={1.5} xs={1.5} md={1.5} lg={1.5} pr={1}>
        {workFilter()}
      </Grid>
      <Grid item xl={1.5} xs={1.5} md={1.5} lg={1.5} pr={1}>
        {payFilter()}
      </Grid>
      <Grid item xl={1} xs={1} md={1} lg={1} pr={1}>
        {SearchComponent()}
      </Grid>
    </Grid>
  );
};

export default FilterComponents;
