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

function JobCard({ job }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Card
        sx={{
          maxWidth: 370,
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
          }}
        >
          ⏳ Posted 10 days ago
        </span>

        <CardHeader
          sx={{ marginTop: 2 }}
          avatar={<img src={job?.logoUrl} width={30} alt="logo" height={40} />}
          title={job?.companyName}
          subheader={
            <>
              <span>{job?.jobRole}</span>
              <br />
            </>
          }
        />
        <span style={{ marginLeft: "60px" }}>{job?.location}</span>
        <CardContent>
          <Typography gutterBottom component="div"  sx={{fontSize:'16px'}}>
            Estimated Salary: ₹{job?.minJdSalary} - {job?.maxJdSalary} LPA ✅
          </Typography>
          <Typography variant="body2" color="text.secondary">
            About Company:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            About us
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ maxHeight: "200px", overflow: "hidden" }}
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
            }}
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
            }}
          >
            <Avatar src="/broken-image.jpg" sx={{ width: 24, height: 24 }} />
            Ask for referral
          </Button>
        </CardActions>
      </Card>

      {openModal && <ShowMore job={job} openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default JobCard;

