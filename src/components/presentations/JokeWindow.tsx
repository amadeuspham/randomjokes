import React from 'react';
import Grid from '@material-ui/core/Grid';

import './styles/JokeWindow.css';
import {Joke} from '../containers/ContainerJokeWindow';
import JokeCard from './JokeCard';
import FilterButton from './FilterButton';
import DirectedButton from './DirectedButton';

interface JokeWindowProps {
	allJokes: Array<Joke>;
	currentPos: number;
	loading: boolean;
	pickJoke: (direction: string) => void;
	currentType: string;
	changeCurrentType: (newType: string) => void;
}

export default function JokeWindow(props: JokeWindowProps) {
	const {allJokes, currentPos, loading, pickJoke, currentType, changeCurrentType}:JokeWindowProps = props;

	const joke: Joke = allJokes[currentPos];

	return (
		<div className="JokeWindow">
			<Grid container className="JokeWindowMain">
				<Grid item>
					<DirectedButton direction="back" pickJoke={pickJoke}/>
				</Grid>
				<Grid item>
					<JokeCard joke={joke} loading={loading}/>
				</Grid>
				<Grid item>
					<DirectedButton direction="forward" pickJoke={pickJoke}/>
				</Grid>
			</Grid>
			<FilterButton currentType={currentType} changeCurrentType={changeCurrentType}/>
		</div>
	)
}