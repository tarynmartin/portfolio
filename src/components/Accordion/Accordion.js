import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordion =({expanded, setExpanded, info}) => {
  const handleChange = (e, panel) => {
    if (panel) {
      expanded === panel ? setExpanded('') : setExpanded(panel);
    } else { 
      setExpanded(prevState => !prevState);
    }
  }
  return (
    <MuiAccordion expanded={info.panel ? expanded === info.panel : expanded} onChange={(e) => handleChange(e, info.panel)} sx={{ color: '#504E4B' }}>
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