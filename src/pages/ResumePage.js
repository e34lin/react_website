import React from 'react';
import '../App.css'
import Resume from '../components/Resume';
import Boop from '../components/Boop';
import Content from '../components/Content';



function ResumePage(props) {

    return(
        <div>
            <Boop title={props.title} />
            
            <Content>
                <Resume/>   
            </Content>
            
                        
        </div>

    );
}


export default ResumePage;