import React from "react";

import JobCard from "../../components/JobCard";
import Spinner from "../../components/Spinner";

import styles from "./style.module.css";

const Body = ({ jobsList, loading, jobInfo }) => {
  if (loading) {
    return <Spinner />;
  }
  if (jobInfo?.length == 0)
    return <h1 className={styles.center}>No Jobs found!</h1>;
  return (
    <div className={styles.cardBody}>
      {jobInfo?.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default Body;
