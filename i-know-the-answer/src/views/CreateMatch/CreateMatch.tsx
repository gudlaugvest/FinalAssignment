import React, { useState } from "react";
import { Heading, FormControl, FormLabel, Input, Button, Box, Radio } from "@chakra-ui/react";
import { sideBanner, createMatchStyle, questionsStyle, questionContentStyle, addButtonStyle, removeButtonContainerStyle, removeButtonStyle, saveButtonStyle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Questions } from "../../types/match";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { createNewMatch } from "../../services/MatchServices";

const CreateMatchView = () => {
    const user = useSelector((state: IRootState) => state.user);
    const [title, setTitle] = useState<string>("");
    const [titleImage, setTitleImage] = useState<string>("");
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [items, setItems] = useState<string[]>([""]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    

    async function createMatch() {
        const match = { title, titleImage, questions, items };
        // const newMatch = await createNewMatch(match);
        setErrorMessage("");
        navigate("/dashboard");
    }

    return (
        <div className="createMatch-container">
            <div className="side-banner" style={sideBanner}></div>
            <div className="create-match" style={createMatchStyle}>
                <Heading>Create Match</Heading>
                <FormControl>
                    <FormLabel>Title of the match</FormLabel>
                    <Input placeholder="Enter title of the match" type="text" backgroundColor={"white"}/>
                    <FormLabel>Match image</FormLabel>
                    <Input type="file"/>
                </FormControl>
                <div style={questionsStyle}>
                    <Heading size="md">Questions</Heading>
                    <Button style={addButtonStyle}>Add</Button>
                    <FormLabel>Question 1</FormLabel>
                </div>
                <div style={questionContentStyle}>
                    <Box>
                        <FormLabel>Title of the question</FormLabel>
                        <Input placeholder="Enter the title of the question" type="text" />
                        <FormLabel>Answer 1</FormLabel>
                        <Input placeholder="Enter the answer" />
                        <Radio>Right answer?</Radio>
                        <FormLabel>Answer 2</FormLabel>
                        <Input placeholder="Enter the answer" />
                        <Radio>Right answer?</Radio>
                        <FormLabel>Answer 3</FormLabel>
                        <Input placeholder="Enter the answer" />
                        <Radio>Right answer?</Radio>
                        <FormLabel>Answer 4</FormLabel>
                        <Input placeholder="Enter the answer" />
                        <Radio>Right answer?</Radio>
                    </Box>
                    <div style={removeButtonContainerStyle}>
                        <Button style={removeButtonStyle}>Remove</Button>
                    </div>
                </div>
                    <Button onClick={() => createMatch()} variant={"contained"} style={saveButtonStyle}>Save</Button>
            </div>
        </div>
    );
};

export default CreateMatchView;