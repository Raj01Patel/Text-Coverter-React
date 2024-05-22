import React from 'react';
import Collapsible from './Collapsible';
import './About.css'


function About() {
    return (
        <div className="App">
            <h1>About App</h1>
            <Collapsible lable={'Analyse Your Text'}>
                <p>TextConverter gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</p>
            </Collapsible>
            <Collapsible lable={'Free To Use'}>
                <p>
                    TextConverter is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextConverter reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
                </p>
            </Collapsible>
            <Collapsible lable={'Browser Compatible'}>
                <p>
                    This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
                </p>
            </Collapsible>

        </div>
    );
}

export default About;