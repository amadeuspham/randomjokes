import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

interface FilterButtonProps {
	currentType: string;
	changeCurrentType: (newType: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		styledButton: {
		    background: "#FFEE88",
		    '&:hover': {
		      background: "#e3d26f",
		    },
		    borderRadius: 20,
		    border: 0,
		    color: '#64236e',
		    height: 40,
		    padding: '0 30px',
		    marginTop: '30px',
		    fontWeight: 'bold',
		},
		styledMenuItem: {
			'&:focus': {
				backgroundColor: "#FFEE88",
				color: "black",
				'&:hover': {
					backgroundColor: "#e3d26f",
					color: "black",
				},
			},
		},
	}),
);

export default function FilterButton(props: FilterButtonProps) {
	const {currentType, changeCurrentType}: FilterButtonProps = props;
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const classes = useStyles();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChangeType = (oldType:string, newType: string) => {
		if (oldType !== newType) {
			changeCurrentType(newType);
		}
		handleClose();
	}

	const jokeType = currentType.charAt(0).toUpperCase() + currentType.slice(1) + " jokes";

	return (
		<div >
			<Button 
				data-testid="filter-button"
				aria-controls="joke-filter-menu" 
				aria-haspopup="true" 
				onClick={handleClick}
				className={classes.styledButton}
			>
				{jokeType}
			</Button>
			<Menu
				id="joke-filter-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem 
					data-testid="all-jokes-choice"
					className={classes.styledMenuItem}
					onClick={() => handleChangeType(currentType, "all")} 
					selected={currentType === "all"}
				>
					All jokes
				</MenuItem>
				<MenuItem 
					data-testid="general-jokes-choice"
					className={classes.styledMenuItem}
					onClick={() => handleChangeType(currentType, "general")} 
					selected={currentType === "general"}
				>
					General jokes
				</MenuItem>
				<MenuItem 
					data-testid="programming-jokes-choice"
					className={classes.styledMenuItem}
					onClick={() => handleChangeType(currentType, "programming")} 
					selected={currentType === "programming"}
				>
					Programming jokes
				</MenuItem>
			</Menu>
		</div>
	)
}