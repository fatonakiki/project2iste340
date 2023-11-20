import { Segment } from 'semantic-ui-react'

function Certificates(degree) {
    //map every element of the array to a segment
    const renderedCertificate = degree.degree[0].availableCertificates.map((certificate, index) => (
        <Segment key={index}>{certificate}</Segment>
    ));
    return (
        <>
            <Segment.Group>
                {renderedCertificate}
            </Segment.Group>
        </>
    )
}
export default Certificates;