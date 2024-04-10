import { CSSProperties } from "react";

export const sideBanner: CSSProperties = {
    width: '200px', 
    height: '100vh', 
    backgroundColor: '#78B4AC', 
    position: 'absolute',
    left: 0, 
};

export const createMatchStyle: CSSProperties = {
    marginLeft: '200px', 
    padding: '60px', 
    position: 'relative',
};

export const questionsStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr auto', 
    alignItems: 'center',
    marginBottom: '30px',
};

export const questionContentStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',
    gap: '10px',
    alignItems: "start",
    marginBottom: '30px',
    backgroundColor: "#F9F9F9",
    padding: "20px", 
    position: "relative", 
};


export const addButtonStyle: CSSProperties = {
    backgroundColor: "#CDFBFA",
}

export const removeButtonContainerStyle: CSSProperties = {
    position: 'absolute', 
    right: '20px',
    bottom: '20px',
    padding: '0',
};


export const removeButtonStyle: CSSProperties = {
    backgroundColor: "#CDFBFA",
}


export const saveButtonStyle: CSSProperties = {
    position: 'absolute', 
    right: '40px', 
    bottom: '10px',
    backgroundColor: "#CDFBFA",
};
