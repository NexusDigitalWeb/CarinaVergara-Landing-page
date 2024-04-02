import React from 'react'
import Jorney from "../../json/journey.json";
import MyJourneyInfo from './MyJourneyInfo';
import TitlesH2 from '../tags/TitlesH2';

const MyJourneyPage = (): React.ReactElement => {
    const myJourney = Jorney.journey
    
    return (
    <div className='w-full h-full lg:p-6 mb-10' id='myJourney'>
        <TitlesH2 text='Mi recorrido'/>
        {myJourney.map((item, index: number) => (
            <MyJourneyInfo text={item.text} image={item.image} index={index} key={index}/>
        ))}
    </div>
  )
}

export default MyJourneyPage