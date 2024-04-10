import { CSSProperties } from 'react';

export const container: CSSProperties = {
    display: "grid",
    gridGap: "20px",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "100vh",
    backgroundColor: "#3C5A56",
};

export const boxStyle: CSSProperties = {
    maxWidth: '400px', 
    margin: 'auto',
    padding: '2rem',
    backgroundColor: "white",
};

export const headingStyle: CSSProperties = {
    marginBottom: '1.5rem',
};

export const formControlStyle: CSSProperties = {
    marginBottom: '1rem',
};

export const formLabelStyle: CSSProperties = {
    marginBottom: '.5rem',
    fontWeight: 'bold',
};

export const inputStyle: CSSProperties = {
    padding: '.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '1px',
};

export const buttonStyle: CSSProperties = {
    padding: '.5rem 1rem',
    margin: '0.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
};

// You might want to differentiate between the two buttons
export const cancelButtonStyle: CSSProperties = {
    backgroundColor: '#4A6666',
    color: "white",
};

export const registerButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#CDFCFB', // This assumes a green color; adjust as necessary
    color: 'black',
};
