/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const About = () => {
    return (
        <section className="about-section">
            <h2>About This Test Project</h2>
            <div className="about-section__description">
                <p> 
                    This is a React App that utilises a free and open source API! The Breaking Bad API was created by Tim Biles and 
                    is a collection of information on the wildly popular television series, Breaking Bad, created by Vince Gilligan. 
                    The API contains all sorts of information on the show including characters, episodes, quotes as well as whether a
                    character is alive or deceased (tread carefully if you haven't finished the series...).
                </p>
                <p>
                    Breaking Bad is one of my all time favourite series and I had a blast creating an app that was able to display character 
                    information! For this particular coding test, I decided to include character information pertaining to the Character Image, Character Name, 
                    Actor Portrayed, Character Nickname, Character Occupation, Characters Status as well as their appearances. When hovering over
                    the images of the characters, the image card will produce a rotating effect which will allow users to see extra information of the
                    character. 
                    I also included the ability for users to be able to search their favourite characters by name, or even discover new characters! The search 
                    functionality includes a filtering function which filters through the API data and populates characters based on what was typed in the search bar. 
                </p>
                <p> 
                    In terms of extra features, I wanted to highlight a few extra things I added to improve functionality and professionalism. 
                    I added a loading javascript spinner which allows users to see a loading graphic as the data is being called from the API. 
                    I also added a nav bar which allows users to be able to navigate from the about page and back, while keeping in mind mobile
                     responsiveness. Ontop of that, the logo and favicon was custom made by me using Adobe Illustrator!
                </p>
                <div className="about-section__list">
                    <p>
                        The React Libraries & Dependencies I used includes...
                    </p>
                    <ul>
                        <li>
                            <a href="https://github.com/axios/axios">NPM Axios</a>
                        </li>
                        <li>
                            <a href="https://react-icons.github.io/react-icons/">React Icons</a>
                        </li>
                        <li>
                            <a href="https://www.npmjs.com/package/react-headroom">React Headroom</a>
                        </li>
                        <li>
                            <a href="https://www.npmjs.com/package/hamburger-react">Hamburger React</a>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="about-section__credits">
                <p>This React App was created by Vinson Nguyen using The Breaking Bad API by Tim Biles.</p>
                <div className="about-section__links">
                    <a href="https://vinsonnguyen.com">Check Out My Portfolio</a>
                    <a href="https://breakingbadapi.com/">Check Out the API Docs</a>
                </div>
            </div>
        </section>
    );
}

export default About; 