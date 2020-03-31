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
					<a href="#">
						<AiFillInfoCircle onClick={() => setOpenBackdrop(true)}/>
					</a>
				</div>
			</IconContext.Provider>
			<Backdrop 
				className={classes.backdrop} 
				open={openBackdrop} 
				onClick={() => setOpenBackdrop(false)}
			>
				<AboutCard />
    		</Backdrop>
			<a className="App-link" href="/" rel="noopener noreferrer">
				Random Jokes
			</a>
			<IconContext.Provider value={{ color: "black" }}>
				<div className="HeaderIconSection">
					<a href="https://github.com/amadeuspham/randomjokes/" target="_blank" rel="noopener noreferrer">
						<AiFillGithub />
					</a>
					<a href="https://www.linkedin.com/in/amadeuspham/" target="_blank" rel="noopener noreferrer">
						<AiFillLinkedin />
					</a>
				</div>
			</IconContext.Provider>
    	</header>
	);
}