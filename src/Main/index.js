import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Body from "./Body";

import { getJobsList } from "../store/features/jobsSlice";

const Main = () => {
  let dispatch = useDispatch();
  const { jobsList, loading } = useSelector((state) => state?.jobsReducer);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    dispatch(getJobsList({ limit, offset }));
    window.scrollTo(0, 0);
  }, [offset, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setOffset((prevOffset) => prevOffset + 10);
  };

  return (
    <div>
      <Header jobsList={jobsList} />
      <Body jobsList={jobsList} loading={loading} />
    </div>
  );
};

export default Main;
