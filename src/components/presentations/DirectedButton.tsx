import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import './styles/DirectedButton.css';

interface DirectedButtonProps {
	direction: string;
	pickJoke: (direction: string) => void;
}

export default function DirectedButton(props: DirectedButtonProps){
	const {direction, pickJoke}: DirectedButtonProps = props;

	if (direction === 'back') {
		return (
			<div className="DirectedButton" onClick={() => pickJoke("back")}>
				<IoIosArrowUp className="DirectionIcon"/>
			</div>	
		)
	}

	return (
		<div className="DirectedButton" onClick={() => pickJoke("forward")}>
			<IoIosArrowDown className="DirectionIcon"/>
		</div>	
	)

}