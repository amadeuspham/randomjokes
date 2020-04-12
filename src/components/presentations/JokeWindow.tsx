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

	const handlers = {
	  NEXT_JOKE: (event: KeyboardEvent | undefined) => changeJoke("forward"),
	  PREV_JOKE: (event: KeyboardEvent | undefined) => changeJoke("back"),
	  TOGGLE_JOKE: (event: KeyboardEvent | undefined) => setReveal(!reveal),
  };

	return (
		<div className="JokeWindow">
			<Grid container className="JokeWindowMain">
				<Grid item>
					<div 
						data-testid="up-button" 
						aria-label="Previous joke" 
						tabIndex={0}
						role='button' 
						className="DirectedButton" 
						onClick={() => changeJoke("back")}
						onKeyDown={event => {return event.keyCode != 13 || changeJoke("back")}}
					>
						<IoIosArrowUp className="DirectionIcon"/>
					</div>	
				</Grid>
				<Grid item>
					<JokeCard joke={joke} loading={loading} reveal={reveal} setReveal={setReveal}/>
				</Grid>
				<Grid item>
					<div 
						data-testid="down-button" 
						aria-label="Next joke" 
						tabIndex={0}
						role='button' 
						className="DirectedButton" 
						onClick={() => changeJoke("forward")}
						onKeyDown={event => {return event.keyCode != 13 || changeJoke("forward")}}
					>
						<IoIosArrowDown className="DirectionIcon"/>
					</div>	
				</Grid>
			</Grid>
			<FilterButton currentType={currentType} changeCurrentType={changeCurrentType}/>
		</div>
	)
}