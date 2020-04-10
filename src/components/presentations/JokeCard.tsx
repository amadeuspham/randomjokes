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
			<div data-testid="joke-card-loading" className="JokeCard">
				<CircularProgress/>
			</div>
		)
	}

	return (
		<ReactCardFlip isFlipped={reveal}>
			<div data-testid="joke-card-setup" className="JokeCard" onClick={() => setReveal(!reveal)}>
				<p>{joke.setup}</p>
			</div>

			{reveal 
				?	<div data-testid="joke-card-punchline" className="JokeCard JokeCardReveal" onClick={() => setReveal(!reveal)}>
						<p>{joke.punchline}</p>
					</div>
				:	<div data-testid="joke-card-punchline" className="JokeCard JokeCardReveal"/>
			}
		</ReactCardFlip>
	);
}