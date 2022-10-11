import classes from "./ThirdSlide.module.css";
import {ReactComponent as Calendar} from "../../sources/icons/icon1.svg"
import {ReactComponent as Dinner} from "../../sources/icons/icon2.svg"
import {ReactComponent as Bottle} from "../../sources/icons/bottle.svg"
import Button from "../../components/Button/Button";
import {useState} from "react";
import ModalContainer from "../../components/Modal/ModalContainer";


const ThirdSlide = () => {

	const [modalActive, setModalActive] = useState(false)

	return (<>
			<div className={classes.container}>
				< Bottle/>
				<div className={classes.caption}>
					<div className={classes.keyMessage}>Ключевое сообщение</div>
					<div className={classes.nameMessage}>Brend<b>xy</b></div>
				</div>
				<div className={classes.blocks}>
					<div className={classes.blockOne}>
						<Dinner/>
						<p>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
							ultricies</p>
					</div>
					<div className={classes.blockTwo}>
						<Calendar/>
						<p>A arcu <br/> cursus vitae</p>
					</div>
				</div>
				<div className={classes.button} onClick={() => {
					setModalActive(true)
				}}>
					<Button name="Побробнее">+</Button>
				</div>
			</div>
			<ModalContainer active={modalActive} setActive={setModalActive}/>
		</>
	)
}

export default ThirdSlide
