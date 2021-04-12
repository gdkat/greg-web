import MUIAccordion from "@material-ui/core/Accordion";
import MUIAccordionSummary from "@material-ui/core/AccordionSummary";
import MUIAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Accordion.css";

interface AccordionProps {
  title: string;
  subtitle?: string;
  body: string;
}

const Accordion = (props: AccordionProps) => {
  const { title, subtitle, body } = props;
  return (
    <MUIAccordion
      className="accordion-root"
      style={{
        borderRadius: 10,
        boxShadow: "none",
      }}
    >
      <MUIAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
      </MUIAccordionSummary>
      <MUIAccordionDetails>{body}</MUIAccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
