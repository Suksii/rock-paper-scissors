import React from 'react';

const Loser = () => {
    return (
        <div className="message" style={{backgroundColor: 'rgba(128, 0, 0, 0.9)'}}>
            <h1>😔You lose😔</h1>
            <button onClick={() => window.location.reload()}>Play again</button>
        </div>
    );
};

export default Loser;