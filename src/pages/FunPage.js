import React from 'react';
import Content from '../components/Content';
import Boop from '../components/Boop';

import Artwork from '../components/Artwork';
import Food from '../components/Food';
import Travel from '../components/Travel';
import Pets from '../components/Pets';

function FunPage(props) {

    return(
        <div>
            <Boop title={props.title} />

            <Content>
               <Artwork/>
               
               <Food/>
               
               <Travel/>

               <Pets/>
            </Content>
            
        </div>

    );
}


export default FunPage;