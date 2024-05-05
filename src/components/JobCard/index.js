import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
} from "@mui/material";

function JobCard({ job }) {
  return (
    <Card
      sx={{
        maxWidth: 370,
        margin: 5,
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        padding: "5px",
      }}
    >
      <CardHeader
        avatar={<img src={job?.logoUrl} width={25} height={40} />}
        title={job?.companyName}
        subheader={
          <>
            <span>{job?.jobRole}</span>
            <br />
          </>
        }
      />
      <span sx={{ marginLeft: "100px" }}>{job?.location}</span>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Estimated Salary: ₹{job?.minJdSalary}
          {" - "}
          {job?.maxJdSalary}
          {"  "}LPA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About Company:{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About us{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job?.jobDetailsFromCompany}
        </Typography>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        <Typography variant="body2" color="text.secondary">
          Minimum Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job?.minExp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JobCard;
