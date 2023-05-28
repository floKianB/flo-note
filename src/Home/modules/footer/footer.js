import React from 'react';

const CopyRight = () => {
    const footer = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0px',
        backgroundColor: 'black'
    }
    const date = new Date();
    return(
        <footer style={footer}>
            <p style={{opacity: '65%', color: 'white'}}>Copyright © {date.getFullYear()}</p>
        </footer>
    );
}
export default CopyRight;