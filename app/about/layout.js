import React from 'react';

const AboutLayout = ({children}) => {
    return (
        <div>
            <h1 className="text-center font-bold">About Page</h1>
            {children}
        </div>
    );
};

export default AboutLayout;