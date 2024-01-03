import React from 'react';
import { HomeTab, PostCardCrid } from '../components/main';
import axios from 'axios';

export default function Main() {
    return (
        <div>
            <HomeTab />
            <PostCardCrid />
        </div>
    );
}
