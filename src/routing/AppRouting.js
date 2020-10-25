import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DetailPage } from '../pages/DetailPage';
import { HomePage } from '../pages/HomePage';

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/:id" exact component={DetailPage} />
        </BrowserRouter>
    )
}
