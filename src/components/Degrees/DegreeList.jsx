import { Accordion, Icon } from 'semantic-ui-react'
import { useState } from 'react'

function DegreeList({ degree }) {
    //set a state for activeIndex to know which of the accordions is active or expanded
    const [activeIndex, setActiveIndex] = useState(null);

    //a handler for clicking the accordion
    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex);
    };
    //map degrees of undergraduate or graduate to accordions
    const renderedDegree = degree.map((degree, index) => {
        return (<>
            <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                {degree.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
                {/* map concentrations to list items */}
                {degree.concentrations.map((concentration, index) => (
                    <li key={index}>{concentration}</li>
                ))}
            </Accordion.Content>
        </>)
    });
    return (
        <>
            <Accordion styled>
                {renderedDegree}
            </Accordion>

        </>
    )
}
export default DegreeList;