import React from 'react';

import './Story.css';

class Story extends React.Component {
    render() {
        return (
            <div className="storyContainer">
                <div className="story">
                    <p>
                        {this.props.story.split("\n").map((item, index) => {
                            return (index === 0) ? item : [<br/>, item]
                        })}
                    </p>
                </div>
            </div>
        );
    }
}

export default Story;