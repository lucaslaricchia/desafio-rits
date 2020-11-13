import * as React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FiChevronDown } from "react-icons/fi";

import "../styles/components/accordion.css";
const Accordion = withStyles({
  root: {
    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)",
    "&:first-child": {
      borderRadius: "5px 5px 0 0",
    },
    "&:last-child": {
      borderRadius: "0 0 5px 5px",
    },
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {},
    "&$expanded": {
      display: "flex",
      flexDirection: "column",
      margin: "0",
    },
  },
  expanded: {},
})(MuiAccordion);

const useStyles = makeStyles((theme) => ({
  heading: {
    font: "800 18px Mulish, sans-serif",
  },
  content: {
    width: "90%",
    font: "400 18px Mulish, sans-serif",
  },
}));

const AccordionSummary = withStyles({
  root: {
    padding: "20px 40px",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      background: "#F7F7F7",
      "&:first-child": {
        borderRadius: "5px",
      },
    },
  },
  expanded: {
    paddingLeft: "20px",
    paddingRight: "30px",
    paddingBottom: "0px",
    borderBottom: "none",
    color: "#4EEF61",
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "0px 30px 30px 40px",
    background: "#F7F7F7",
    "&:last-child": {
      borderRadius: "10px",
    },
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="accordion-wrapper">
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<FiChevronDown />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography className={classes.heading}>
            At vero eos et accusamus et iusto?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<FiChevronDown />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography className={classes.heading}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<FiChevronDown />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography className={classes.heading}>
            Lorem ipsum dolor sit amet, consectetur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<FiChevronDown />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography className={classes.heading}>
            At vero eos et accusamus et iusto?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
