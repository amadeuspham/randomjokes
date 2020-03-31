import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactCardFlip from 'react-card-flip';

import './styles/JokeCard.css';
import {Joke} from '../containers/ContainerJokeWindow';

interface JokeCardProps {
	joke: Joke;
	loading: boolean;
}

export default function JokeCard(props: JokeCardProps) {
	const {joke, loading}:JokeCardProps = props;
	const [reveal, setReveal] = useState(false);

	useEffect(() => {
		if (reveal) setReveal(!reveal);
	}, [joke]);

	if (loading) {
		console.log("load")
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