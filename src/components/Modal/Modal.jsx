import classes from "./Modal.module.css"
import Pagination from "../Pagination/Pagination";

const Benefit = ({title, text}) => {
	return (
		<div className={classes.benContainer}>
			<div className={classes.benTitle}>{title}</div>
			<div className={classes.benText}>{text}</div>
		</div>
	)
}

const Modal = ({active, setActive, benefits, startPosition, endPosition, prevBenefits, nextBenefits}) => {

	return (
		<div className={active ? `${classes.modal} ${classes.active}` : classes.modal}>
			<div className={classes.modalContent} onClick={e => e.stopPropagation()}>
				<div className={classes.close} onClick={() => setActive(false)}>+</div>
				<div className={classes.modalTitle}>
					<div className={classes.keyMessage}>Преимущества</div>
					<div className={classes.nameMessage}>Brend<b>xy</b></div>
				</div>
				<div className={classes.modalDescription}>
					{benefits.slice(startPosition, endPosition).map(b => (<Benefit title={b.title} text={b.text}/>))}
				</div>
				<div className={classes.modalPagination}>
					<Pagination prevBenefits={prevBenefits} nextBenefits={nextBenefits}/>
				</div>

			</div>

		</div>
	)
}
export default Modal
