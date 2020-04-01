import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactCardFlip from 'react-card-flip';

import './styles/JokeCard.css';
import {Joke} from '../containers/ContainerJokeWindow';

interface JokeCardProps {
	joke: Joke;
	loading: boolean;
	reveal: boolean;
	setReveal: (reveal: boolean) => void;
}

export default function JokeCard(props: JokeCardProps) {
	const {joke, loading, reveal, setReveal}:JokeCardProps = props;

	if (loading) {
		return (
			<div className="JokeCard">
				<CircularProgress/>
			</div>
		)
	}

	return (
		<ReactCardFlip isFlipped={reveal}>
			<div className="JokeCard" onClick={() => setReveal(!reveal)}>
				<p>{joke.setup}</p>
			</div>

			{reveal 
				?	<div className="JokeCard JokeCardReveal" onClick={() => setReveal(!reveal)}>
						<p>{joke.punchline}</p>
					</div>
				:	<div className="JokeCard JokeCardReveal"/>
			}
		</ReactCardFlip>
	);
}