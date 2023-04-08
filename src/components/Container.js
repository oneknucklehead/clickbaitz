import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="lg:ml-40 xl:ml-60">
            {children}
        </div>
    );
};

export default Container;