/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

const About = () => {
    return (
        <section className="about-section">
            <h2>About This Project</h2>
            <div className="about-section-content">
                <p> 
                    This is a React App that utilises a free and open source API! The Breaking Bad API was created by Tim Biles and 
                    is a collection of information on the wildly popular television series, Breaking Bad, created by Vince Gilligan. 
                    The API contains all sorts of information on the show including characters, episodes, quotes as well as whether a
                    character is alive or deceased (tread carefully if you haven't finished the series...).
                    <br></br>
                    Breaking Bad is one of my all time favourite series and I had a blast creating an app that was able to display character 
                    information! For this particular coding test, I decided to include character information pertaining to the Character Name, 
                    Actor Portrayed, Character Nickname, Character Occupation, Characters Status as well as their appearances. When hovering over
                    the images of the characters, the image card will produce a rotating effect which will allow users to see extra information of the
                    character. 
                    <br></br>
                    I also included the ability for users to be able to search their favourite characters by name, or even discover new characters! The search 
                    functionality includes a filtering function which filters through the API data and populates characters based on what was typed in the search bar. 
                </p>
                <h3>Extras</h3>
                <p> 
                    In terms of extra features, I wanted to highlight a few extra things I added to improve functionality and professionalism. 
                    I added a loading javascript spinner which allows users to see a loading graphic as the data is being called from the API. 
                    I also added a nav bar which allows users to be able to navigate from the about page and back, while keeping in mind mobile responsiveness. 
                </p>
            </div>

            <div class="api-logo">
            <a href="https://www.themoviedb.org/documentation/api"><img src="./images/tmdb-logo.png" alt="TMDB Logo" className="no-hover"></img></a>
            </div>
            <div className="about-section-wrapper">
            <p>This web application uses the <a href="https://www.themoviedb.org/documentation/api">The Breaking Bad API</a>.</p>
            </div>
        </section>
    );
}

export default About; 