import React from 'react'
import { useState } from 'react'
import getData from '../../utils/getData';
import './About.css'
import { Icon, Divider } from 'semantic-ui-react'

function About() {
    //create a state for loaded
    const [loaded, setLoaded] = useState(false);

    //create a state for aboutObject
    const [aboutObj, setAboutObj] = useState();

    const fetchAbout = async () => {
        //call helper function that fetches the data from the api
        getData('about/')
            .then((json) => {
                //when data is loaded set loaded to true
                setLoaded(true);
                //populate aboutObj
                setAboutObj(json);
            })
    };

    //go get the data
    React.useEffect(() => {
        //go call my getData
        fetchAbout();
    }, []);

    //show loading when we don't have data yet
    if (!loaded) return (
        <>
            <h1>About</h1>
            <h2>Loading...</h2>
        </>
    );

    return (
        <>
        <div className='about'>
            <h3>{aboutObj.title}</h3> <br />
            <Divider />
            <p>{aboutObj.description}</p> <br />
            <Icon name="quote left" />
            <p>{aboutObj.quote}</p> <br />
            <Icon name="quote right" />
            <p>-{aboutObj.quoteAuthor}</p>
        </div>
        </>
    )
}

export default About;