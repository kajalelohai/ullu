import React from 'react';
import {WordsCollection} from './Data/index';

export function Card() {
    return <div>{WordsCollection.map(collection => collection.word)}</div>;
}