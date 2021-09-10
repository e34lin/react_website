import React from 'react';
import Content from '../components/Content';
import Boop from '../components/Boop';
//import about  from '../pics/about/about.JPG';
//import SocialMedia from '../components/SocialMedia';
import Carousel from '../components/Carousel';


function AboutPage(props) {

    return(
        <div>
            <Boop title={props.title} />

            <Content>
            {/* <img src={about} alt="me" style={{width: 700 }} /> */}

            <p class='first'>
                Hello, my name is Elizabeth Lin. 
                I am a 2nd year undergraduate student studying Biomedical Engineering at the University of Waterloo. 
                In high school, I co-founded a non-profit company aimed to improve mental wellness, 
                and worked as a private math tutor and assistant teacher part-time. 
                In my past two co-op terms I had the opportunity to work in areas related to software and life science industries. 
                However, I am open to exploring new areas especially related to UI/UX, PM, and research.
            </p>
        
            <p>Here are a few more facts about myself~</p>
            
            <ol>
                <li>I have many interests and hobbies I am hoping to learn more about, some include: tennis, muay thai, music, photography, cooking and baking.</li>
                <li>During this pandemic, I decided to learn html, js and css by myself; this website is my first ReactJS project. :)</li>
                <li>I speak English, Cantonese, and a bit of Mandarin. I am also in the process of learning Korean (may or may not be because of K-dramas and K-pop).</li>
                <li>I am a big foodie, I have a food instagram to document my food adventures and creations! You can check it out <a href="https://www.instagram.com/_lizzy.foodie/" target="_blank" rel="noopener noreferrer">here.</a> </li>
                <li>I have no siblings, but I have 3 dogs that always keep me company (check out my photos)!</li>

            </ol>

            <Carousel/>

            </Content>
            
        </div>


    );
}


export default AboutPage;