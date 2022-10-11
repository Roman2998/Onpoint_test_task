import classes from "./Button.module.css";

const Button = ({name,children}) => {
	return (
		<div className={classes.container}>
			<button className={classes.button}>{name}</button>
			<div className={classes.ellipse}>
				<div className={classes.children}>{children}</div>
			</div>
		</div>
	)
}

export default Button;
