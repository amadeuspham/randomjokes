import React, {useState} from 'react';
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiFillInfoCircle } from "react-icons/ai";
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import './styles/Header.css';
import AboutCard from './AboutCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export default function Header(){
	const classes = useStyles();
	const [openBackdrop, setOpenBackdrop] = useState(false);

	return (
    	<header className="Header">
				<IconContext.Provider value={{ color: "black" }}>
					<div className="HeaderIconSection">
						<div aria-label="Info about this website" aria-pressed="false" role='button' className="HeaderIcon">
							<AiFillInfoCircle 
								data-testid="info-icon" 
								tabIndex={0} 
								onClick={() => setOpenBackdrop(!openBackdrop)}
								onKeyDown={event => {return event.keyCode != 13 || setOpenBackdrop(!openBackdrop)}}
							/>
						</div>
					</div>
				</IconContext.Provider>
				<Backdrop 
					className={classes.backdrop} 
					open={openBackdrop} 
					onClick={() => setOpenBackdrop(false)}
				>
					<AboutCard />
	    	</Backdrop>
				<a className="App-link" href="/randomjokes" rel="noopener noreferrer">
					Random Jokes
				</a>
				<IconContext.Provider value={{ color: "black" }}>
					<div className="HeaderIconSection">
						<a 
							aria-label="Visit Github repo of this website" 
							role='button'
							href="https://github.com/amadeuspham/randomjokes/" 
							target="_blank" 
							rel="noopener noreferrer" 
							data-testid="github-icon"
						>
							<AiFillGithub />
						</a>
						<a 
							aria-label="Visit author's LinkedIn profile" 
							role='button'
							href="https://www.linkedin.com/in/amadeuspham/" 
							target="_blank" 
							rel="noopener noreferrer"  
							data-testid="linkedin-icon"
						>
							<AiFillLinkedin />
						</a>
					</div>
				</IconContext.Provider>
    	</header>
	);
}