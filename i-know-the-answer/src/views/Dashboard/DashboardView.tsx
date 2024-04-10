import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { sideBanner, dashboard, buttonStyle, headerContainer } from "./styles";
import { Button, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { MatchList } from "../../components/MatchList";
import { AsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

const DashboardView = () => {
    const user = useSelector((state: IRootState) => state.user);
    return (
        <div className="dashboard-container">
            <div className="side-banner" style={sideBanner}></div>
            <div className="dashboard" style={dashboard}>
                <div style={headerContainer}>
                    <Heading>Dashboard</Heading>
                    <Link to="/create-match">
                        <Button style={buttonStyle}>Create Match</Button>
                    </Link>
                </div>
                    <MatchList/>
            </div>
        </div>
    );
};

export default DashboardView;
function dispatch(getMatchesThunk: AsyncThunk<any, void, AsyncThunkConfig>): unknown {
    throw new Error("Function not implemented.");
}

