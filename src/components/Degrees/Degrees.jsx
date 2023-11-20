import _default from '@mui/material/styles/identifier';
import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import './Degrees.css'
import DegreeList from './DegreeList';
import { useState } from 'react'
import getData from '../../utils/getData'
import Certificates from './Certificates';

function Degrees() {
    //create a state for loaded
    const [loaded, setLoaded] = useState(false);

    //create a state for degreesObject
    const [degrees, setDegrees] = useState({});

    const fetchDegrees = async () => {
        //call helper function that fetches the data from the api
        getData('degrees/')
            .then((json) => {
                //when data is loaded set loaded to true
                setLoaded(true);
                //populate degreesObject
                setDegrees(json);
            })
    };

    React.useEffect(() => {
        //go call my getData
        fetchDegrees();
    }, []);

    //show loading when we don't have data yet
    if (!loaded) return (
        <>
            <h3>Degrees</h3>
            <h3>Loading...</h3>
        </>
    )

    return (
        <>
            <div className='degrees'>
                <h3>Degrees</h3>
                <Divider />
                <Grid columns={3} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <h4>Undergraduate</h4>
                            <DegreeList degree={degrees.undergraduate} />
                        </Grid.Column>
                        <Grid.Column>
                            <h4>Graduate</h4>
                            {/* slice to not get Certificates */}
                            <DegreeList degree={degrees.graduate.slice(0,-1)} />
                        </Grid.Column>
                        <Grid.Column>
                            <h4>Certificates</h4>
                            {/* slice to only get Certificates */}
                            <Certificates degree={degrees.graduate.slice(-1)} />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        </>
    )
}

export default Degrees;