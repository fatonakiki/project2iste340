import React from 'react'
import { useState } from 'react'
import getData from '../../utils/getData';
import './Employment.css'
import { Card, Divider } from 'semantic-ui-react'
import CoopTable from './CoopTable';
import EmploymentTable from './EmploymentTable';

function Employment() {
    //create a state for loaded
    const [loaded, setLoaded] = useState(false);

    //create a state for employmentObject
    const [employmentObj, setEmploymentObj] = useState();

    const fetchEmployment = async () => {
         //call helper function that fetches the data from the api
        getData('employment/')
            .then((json) => {
                setLoaded(true);
                setEmploymentObj(json);
            })
    };

    //go get the data
    React.useEffect(() => {
        //go call my getData
        fetchEmployment();
    }, []);

    React.useEffect(() => {
        //go call my getData
        console.log(employmentObj);
    }, [employmentObj]);

    //show loading when we don't have data yet
    if (!loaded) return (
        <>
            <h1>Employment</h1>
            <h2>Loading...</h2>
        </>
    );
    return (
        <>
        <div className="employment">
            <h3>Employment</h3>
            <Divider />
            <p>{employmentObj.introduction.content[0].description}</p>
            <EmploymentTable employmentTable={employmentObj.employmentTable.professionalEmploymentInformation} />
            
            <h3>Statisctics</h3>
            <Divider />
            <Card.Group className='statistics'>
            {employmentObj.degreeStatistics.statistics.map((statistic, index) => (
                <Card centered key={index}>
                <Card.Content header={statistic.value} />
                <Card.Content description={statistic.description} />
            </Card>
            ))}
            </Card.Group>
            <h3>Employers</h3>
            <Divider />
            <Card.Group>
            {employmentObj.employers.employerNames.map((employer, index) => (
                <Card centered key={index} style={{width: 'auto'}}>
                <Card.Content header={employer} />
            </Card>
            ))}
            </Card.Group>
            <h3>Careers</h3>
            <Divider />
            <Card.Group>
            {employmentObj.careers.careerNames.map((career, index) => (
                <Card centered key={index} style={{width: 'auto'}}>
                <Card.Content header={career} />
            </Card>
            ))}
            </Card.Group>
            <h3>Cooperative Education</h3>
            <Divider />
            <p>{employmentObj.introduction.content[1].description}</p>
            <Divider />
            <CoopTable coopTable={employmentObj.coopTable.coopInformation} />
        </div>
        </>
    )
}

export default Employment;