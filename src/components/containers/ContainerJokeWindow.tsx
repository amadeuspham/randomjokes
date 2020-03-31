import React from 'react';
import JokeWindow from '../presentations/JokeWindow';

export interface Joke {
	id: number;
	type: string;
	setup: string;
	punchline: string;
}

interface JokeWindowState {
	allJokes: Array<Joke>;
	loading: boolean;
	currentPos: number,
	currentType: string,
}

export default class ContainerJokeWindow extends React.Component {
	state: JokeWindowState = {
		allJokes: [],
		loading: true,
		currentPos: 0,
		currentType: "all",
	}

	componentDidMount(){
		this.loadTenJokes();
	}

	loadTenJokes = (direction: string = "forward") => {
		const {allJokes, currentType}: JokeWindowState = this.state;
		let urlString: string = "https://official-joke-api.appspot.com/random_ten";

		if (currentType === "general") {
			urlString = "https://official-joke-api.appspot.com/jokes/general/ten";
		} else if (currentType === "programming") {
			urlString = "https://official-joke-api.appspot.com/jokes/programming/ten";
		}

		fetch(urlString)
	    .then(response => response.json())
	    .then(tenJokes => {
	    	if (direction === "forward") {
				this.setState({
					allJokes: [...allJokes, ...tenJokes],
					loading: false,
				})
	    	} else {
				this.setState({
					allJokes: [...tenJokes, ...allJokes],
					loading: false,
				})
	    	}
	    });
	}

	pickJoke = (direction: string) => {
		const {currentPos, allJokes}: JokeWindowState = this.state;
		if (direction === "back") {
			if (currentPos === 0) {
				this.setState({loading: true}, () => this.loadTenJokes(direction));
				this.setState({currentPos: 9})
			} else {
				this.setState({currentPos: currentPos - 1});
			}
		} else if (direction === "forward") {
			if (currentPos === allJokes.length - 2) {
				this.setState({loading: true}, () => this.loadTenJokes(direction));
			}
			this.setState({currentPos: currentPos + 1});
		}
	}

	changeCurrentType = (newType: string) => {
		this.setState(
			{allJokes: [], loading: true, currentPos: 0, currentType: newType}, 
			() => this.loadTenJokes());
	}

	render() {
		const {allJokes, loading, currentPos, currentType}:JokeWindowState = this.state;

		return (
			<JokeWindow 
				allJokes={allJokes} 
				currentPos={currentPos}
				loading={loading} 
				pickJoke={this.pickJoke}
				currentType={currentType}
				changeCurrentType={this.changeCurrentType}
			/>
		);
	}
}