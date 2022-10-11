import './App.css';
import {ReactComponent as HeaderLogo} from "./sources/global.svg";
import {ReactComponent as FooterLogo} from "./sources/Shape1.svg";
import {useRef, useState} from "react";
import FirstSlide from "./slides/FirstSlide/FirstSlide";
import SecondSlide from "./slides/SecondSlide/SecondSlide";
import ThirdSlide from "./slides/ThirdSlide/ThirdSlide";
import Button from "./components/Button/Button";


function App() {

	const firstSlide = useRef(null)
	const secondSlide = useRef(null)

	const [animate, setAnimate] = useState(false)

	const goFirstSlide = () => {
		firstSlide.current.scrollIntoView({behavior: "smooth"})
		setAnimate(false)
	}
	const goSecondSlide = () => {
		secondSlide.current.scrollIntoView({behavior: "smooth"})
		setAnimate(true)
	}

	return (
		<div className="slidesContainer">
			<header>
				<HeaderLogo onClick={goFirstSlide}/>
			< /header>
			<div className="slides">
				<div className="slide" ref={firstSlide}>
					<div className="layA"></div>
					<div className="layB"></div>
					<div className="layC"></div>
					<div className="layD"></div>
					<div className="layE"></div>
					<div className="layF"></div>
					<div className="layG"></div>
					<div className="layH"></div>
					<FirstSlide/>
					<div onClick={goSecondSlide} className="buttonFirstSlide">
						<Button name="Что дальше?">></Button>
					</div>
				</div>
				<div className="slide" ref={secondSlide} >
					<div className={animate  ? "layJ animation" : "layJ"}></div>
					<div className={animate  ? "layK animation" : "layK" }></div>
					<div className={animate  ? "layL animation" : "layL" }></div>
					<div className={animate  ? "layM animation" : "layM" }></div>
					<div className={animate  ? "layN animation" : "layN" }></div>
					<SecondSlide/>
				</div>
				<div className="slide">
					<div className="bubbleA"></div>
					<div className="bubbleB"></div>
					<div className="bubbleC"></div>
					<div className="bubbleD"></div>
					<div className="bubbleE"></div>
					<div className="bubbleF"></div>
					<div className="bubbleG"></div>
					<div className="bubbleH"></div>
					<ThirdSlide/>
				</div>
			</div>
			<footer>
				<FooterLogo/>
			</footer>
		</div>
	);
}

export default App;
