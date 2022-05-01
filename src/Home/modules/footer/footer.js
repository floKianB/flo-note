import React from 'react';

const CopyRight = () => {
    const footer = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0px',
    }
    const date = new Date();
    return(
        <footer style={footer}>
            <p style={{opacity: '50%'}}>Copyright © {date.getFullYear()}</p>
        </footer>
    );
}
export default CopyRight;