import React from 'react';
import LoginView from '../views/Login/LoginView';
import RegisterView from '../views/Register/RegisterView';
import DashboardView from '../views/Dashboard/DashboardView';
import CreateMatchView from '../views/CreateMatch/CreateMatch';
import { MainLayout } from '../layouts/main-layout';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route>
            <Route path="/" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/create-match" element={<CreateMatchView />} />
            <Route path="/*" element={<MainLayout />} />
        </Route>
    </>
    )
)
