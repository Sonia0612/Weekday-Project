import React from "react";

import JobCard from "../../components/JobCard";
import Spinner from "../../components/Spinner";

const Body = ({ jobsList, loading }) => {
  console.log("jobsList", jobsList);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {jobsList?.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default Body;
