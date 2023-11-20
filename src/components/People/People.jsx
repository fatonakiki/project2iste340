//imports
import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import PeopleGroup from './PeopleGroup'
import getData from '../../utils/getData'

//get the css
import './People.css'

const People = () => {
    //create a state for loaded
    const [pepLoaded, setPepLoaded] = useState(false);

    //create a state for peopleObject
    const [pepObj, setPepObj] = useState();

    //create panes for Faculty and Staff
    const panes = [
        {
            menuItem: 'Faculty', render: () => <Tab.Pane>
                <PeopleGroup title="Faculty" pepGroupObj={pepObj.faculty} />
            </Tab.Pane>
        },
        {
            menuItem: 'Staff', render: () => <Tab.Pane>
                <PeopleGroup title="Staff" pepGroupObj={pepObj.staff} />
            </Tab.Pane>
        }
    ]

    React.useEffect(() => {
        //call helper function that fetches the data from the api
        getData('people/')
            .then((json) => {
                //when data is loaded set loaded to true
                setPepObj(json);
                //populate peopleObj
                setPepLoaded(true);
            })
    }, []);

    //show loading when we don't have data yet
    if (!pepLoaded) return (
        <>
            <h1>Our People</h1>
            <h3>Loading...</h3>
        </>
    )

    //where all is loaded...
    return (
        <>
            <div className='people'>
                <h1>{pepObj.title}</h1>
                <h3>{pepObj.subTitle}</h3>
                <Tab panes={panes} />
            </div>
        </>
    )
}

export default People;