import React from 'react';
import './style.css';
import './media-query.css';
import './util.css';

class Team extends React.Component {
    render() {
        return (
            <main>
                <section className="section | welcome-section">
                    <h2 className="title">WELCOME TO <span>MLSC</span></h2>
                    <div className="wlc-container">
                        <div className="flex-center | left-fixed wlc-left-container">Team 1 Head</div>
                        <div className="wlc-right-container">
                            <div className="welcome-card | welcome-card-1" data-title="Team 1 Head" data-bg="/img/welcome-image-1.png">
                                <div className="wlc-icon">
                                    <img src="/" alt="globe img" />
                                </div>
                                <div className="welcome-content">
                                    <p>
                                        Team 1
                                        <img src="/" alt="team Members" width="50" height="300" />
                                    </p>
                                </div>
                            </div>
                            <div className="welcome-card | welcome-card-2" data-title="Team 2 head" data-bg="/img/welcome-image-2.jpg">
                                <div className="wlc-icon">
                                    <img src="/" alt="globe img" />
                                </div>
                                <div className="welcome-content">
                                    <p>
                                        Team 2
                                        <img src="/" alt="team Members" width="50" height="300" />
                                    </p>
                                </div>
                            </div>
                            <div className="welcome-card | welcome-card-3" data-title="Team 3 Head" data-bg="/img/welcome-image-3.jpg">
                                <div className="wlc-icon">
                                    <img src="/" alt="globe img" />
                                </div>
                                <div className="welcome-content">
                                    <p>
                                        Team 3
                                        <img src="/" alt="team Members" width="50" height="300" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Team;
