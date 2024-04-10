import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser } from "../services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { setUser } from "../redux/features/user/user-slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getMatchesThunk, setMatches } from "../redux/features/match/match-slice";


export function MainLayout() {
    const user = useSelector((state: IRootState) => state.user);
    const match = useSelector((state: IRootState) => state.match);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const navigate = useNavigate();
  
    useEffect(() => {
      (async () => {
        if (Object.keys(user).length > 0) {
          return;
        }
        const session = await getUser();
  
        if (!session) {
          navigate("/");
        } else {
          dispatch(setUser(session));
        }
      })();
      dispatch(getMatchesThunk());
    }, [dispatch, navigate, user]);

  
    return (
      <Container height="100%">
        <Outlet />
      </Container>
    );
  }