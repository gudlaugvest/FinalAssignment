import { CSSProperties } from "react";

export const heading: CSSProperties = {
    color: "white",
} 

export const container: CSSProperties = {
    display: "grid",
    gridGap: "20px",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "100vh",
    backgroundColor: "#78B4AC",
};

export const login: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "20px",
};

export const buttons: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1rem",
};