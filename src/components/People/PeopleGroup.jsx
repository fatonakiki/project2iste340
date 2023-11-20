import React from 'react'
import PepModal from './PepModal'

const PeopleGroup=({title, pepGroupObj})=>{

    return(
        <>
            <h4>{title}</h4>
            <div className="peopleList">
                {pepGroupObj.map((p)=>
                    <div className="peopleListItem" key={p.username}>
                        <img src={p.imagePath}/>
                        <h4>{p.name}</h4>
                        <PepModal imagePath={p.imagePath} interestArea={p.interestArea} name={p.name} title={p.title} office={p.office} phone={p.phone}/>
                    </div>

                )}
            </div>
        </>
    )   
}
export default PeopleGroup