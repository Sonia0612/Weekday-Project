import React, { useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";

import ShowMore from "../Modal/ShowMore";

import styles from "./style.module.css";

function JobCard({ job }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Card
        sx={{
          maxWidth: 310,
          margin: 5,
          borderRadius: 7,
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
          padding: 3,
        }}
      >
        <span
          style={{
            borderRadius: 10,
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
            padding: 5,
            fontSize: "10px",
          }}
        >
          ⏳ Posted 10 days ago
        </span>

        <CardHeader
          avatar={<img src={job?.logoUrl} width={32} alt="logo" height={50} />}
          title={
            <div className={styles.cardHeaderBody}>
              <div>
                <span className={styles.headingName}>{job?.companyName}</span>
                <p className={styles.subHeadingRole}>{job?.jobRole}</p>
              </div>
            </div>
          }
          subheader={
            <>
              <span className={styles.locationheading}>{job?.location}</span>
            </>
          }
        />
        <CardContent>
          <Typography gutterBottom component="div" className={styles.salary}>
            Estimated Salary: ₹{job?.minJdSalary ? job?.minJdSalary : 0} -{" "}
            {job?.maxJdSalary} LPA ✅
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.textBold}
          >
            About Company:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.jobDetails}
          >
            {job?.jobDetailsFromCompany}
          </Typography>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={() => setOpenModal(true)}>
              Show More
            </Button>
          </CardActions>
          <Typography variant="body2" color="text.secondary">
            Minimum Experience
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job?.minExp ? job?.minExp : 0} years
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            sx={{
              width: "100%",
              color: "black",
              backgroundColor: "rgb(85, 239, 196)",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "rgb(85, 239, 196)",
              },
            }}
            disableElevation
          >
            ⚡ Easy Apply
          </Button>
        </CardActions>
        <CardActions>
          <Button
            size="large"
            sx={{
              width: "100%",
              color: "#fff",
              backgroundColor: "#1a73e8",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1a73e8",
              },
            }}
            disableElevation={true}
          >
            <Avatar src="/broken-image.jpg" sx={{ width: 24, height: 24 }} />
            Ask for referral
          </Button>
        </CardActions>
      </Card>

      {openModal && (
        <ShowMore job={job} openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}

export default JobCard;
