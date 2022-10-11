import classes from "./Pagination.module.css"
import {useState} from "react";

const Pagination = ({prevBenefits, nextBenefits}) => {

	const [active, setActive] = useState(true)

	const activeFirstDot = () => {
		prevBenefits()
		setActive(true)
	}

	const activeSecondDot = () => {
		nextBenefits()
		setActive(false)
	}

	return (
		<div className={classes.container} onClick={e => e.stopPropagation()}>
			<input className={classes.button} onClick={activeFirstDot} type="button" value="<"/>
			<ol className={classes.pageDots}>
				<li className={active ? `${classes.dot} ${classes.active}` : classes.dot}></li>
				<li className={!active ? `${classes.dot} ${classes.active}` : classes.dot}></li>
			</ol>
			<input className={classes.button} onClick={activeSecondDot} type="button" value=">"/>
		</div>
	)
}
export default Pagination
