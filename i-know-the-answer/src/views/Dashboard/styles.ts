import { CSSProperties } from "react";

export const sideBanner: CSSProperties = {
    width: '200px', 
    height: '100vh', 
    backgroundColor: '#78B4AC', 
    position: 'absolute',
    left: 0, 
};


export const dashboard: CSSProperties = {
    marginLeft: '200px', 
    padding: '20px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr auto',
};

export const headerContainer: CSSProperties = {
    gridColumn: '1 / -1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export const buttonStyle: CSSProperties = {
    backgroundColor: "#CDFBFA",
}
