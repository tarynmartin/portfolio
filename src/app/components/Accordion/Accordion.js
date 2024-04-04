import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordion =({expanded, setExpanded, info}) => {
  return (
    <MuiAccordion expanded={expanded === info.panel} onChange={() => setExpanded(info.panel)}>
      <MuiAccordionSummary expandIcon={<ArrowDropDownIcon />}>
        {info.summary}
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        {info.details}
      </MuiAccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion;