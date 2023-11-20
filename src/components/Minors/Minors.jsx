import React from 'react'
import { useState } from 'react'
import getData from '../../utils/getData';
import { Card, Button, Modal, Divider, Segment } from 'semantic-ui-react'
import './Minors.css'

function Minors() {
    //create a state for loaded
    const [loaded, setLoaded] = useState(false);

    //create a state for minorsObject
    const [minorsObj, setMinorsObj] = useState();

    const fetchMinors = async () => {
        //call helper function that fetches the data from the api
        getData('minors/')
            .then((json) => {
                setLoaded(true);
                setMinorsObj(json);

            })
    };


    //go get the data
    React.useEffect(() => {
        //go call my getData
        fetchMinors();

    }, []);

    //minor details on modal
    const minorMore = (description, courses) => {
        return (
            <>
                <div style={{ padding: '20px', overflowY: 'auto', maxHeight: '400px' }}>
                    <p>{description}</p>
                    <h3>Courses:</h3>
                    <div style={{ padding: '20px' }}>
                        <Card.Group>
                            {courses.map((course, index) => (
                                <Card centered key={index} style={{ width: 'auto' }}>
                                    <Card.Content header={course} />
                                </Card>
                            ))}
                        </Card.Group>
                    </div>
                </div>
            </>
        );
    };


    //check if minorObj has data and map the data to Cards
    const renderedMinor = minorsObj && minorsObj.UgMinors && minorsObj.UgMinors.map((minor, key) => (
        <Card centered key={key}>
            <Card.Content header={minor.title} />
            <Card.Content description={minor.description.slice(0, 150) + '...'} />
            <Card.Content extra>
                <Modal
                    trigger={<Button>Show More</Button>}
                    header={minor.title}
                    content={minorMore(minor.description, minor.courses)}
                    actions={[{ key: 'done', content: 'Done', positive: true }]}
                />
            </Card.Content>
        </Card>
    ));


    //show loading when we don't have data yet
    if (!loaded) return (
        <>
            <h1>Minors</h1>
            <h2>Loading...</h2>
        </>
    );
    return (
        <>
            <div className='minors'>
                <h3>Minors</h3>
                <Divider />
                <Card.Group>
                    {renderedMinor}
                </Card.Group>
            </div>
        </>

    )
}
export default Minors;