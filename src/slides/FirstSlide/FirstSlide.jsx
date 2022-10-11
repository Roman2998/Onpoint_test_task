import classes from "./FirstSlide.module.css"

const FirstSlide = () => {
	return (
		<div className={classes.container}>
			<p className={classes.hello}>Привет,</p>
			<p className={classes.text}>Это <b>не</b> коммерческое задание</p>

		</div>
	)
}

export default FirstSlide
