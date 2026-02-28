import React from 'react';

const DesignTesting: React.FC = () => {
    return (
        <div>
            <h1>Design Testing Component</h1>
            <div style={{ backgroundColor: '#ff6347', padding: '20px', margin: '10px', color: 'white' }}>
                <p>Color Combination Test</p>
            </div>
            <div style={{ background: 'linear-gradient(45deg, #6a11cb, #2575fc)', padding: '20px', margin: '10px', color: 'white' }}>
                <p>Gradient Test</p>
            </div>
            <div style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', padding: '20px', margin: '10px', backgroundColor: 'white' }}>
                <p>Shadow Test</p>
            </div>
        </div>
    );
};

export default DesignTesting;
