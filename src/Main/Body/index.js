import React from "react";

import JobCard from "../../components/JobCard";
import Spinner from "../../components/Spinner";

const Body = ({ jobsList, loading,jobInfo }) => {
  if (loading) {
    return <Spinner />;
  }
  if(jobInfo?.length==0) return <h1>No Jobs found!</h1>
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {jobInfo?.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default Body;
