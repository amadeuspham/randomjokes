import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import './styles/JokeWindow.css';
import {Joke} from '../containers/ContainerJokeWindow';
import JokeCard from './JokeCard';
import FilterButton from './FilterButton';

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
	const [reveal, setReveal] = useState(false);

	const joke: Joke = allJokes[currentPos];

	const changeJoke = (direction: string) => {
		setReveal(false);
		pickJoke(direction)
	}

	return (
		<div className="JokeWindow">
			<Grid container className="JokeWindowMain">
				<Grid item>
					<div className="DirectedButton" onClick={() => changeJoke("back")}>
						<IoIosArrowUp className="DirectionIcon"/>
					</div>	
				</Grid>
				<Grid item>
					<JokeCard joke={joke} loading={loading} reveal={reveal} setReveal={setReveal}/>
				</Grid>
				<Grid item>
					<div className="DirectedButton" onClick={() => changeJoke("forward")}>
						<IoIosArrowDown className="DirectionIcon"/>
					</div>	
				</Grid>
			</Grid>
			<FilterButton currentType={currentType} changeCurrentType={changeCurrentType}/>
		</div>
	)
}