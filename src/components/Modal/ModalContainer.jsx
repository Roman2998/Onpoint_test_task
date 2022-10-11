import Modal from "./Modal";
import {useState} from "react";

const ModalContainer = (props) => {
	const benefitsData = {
		"benefits": [
			{
				title: "01",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
			},
			{
				title: "02",
				text: "Faucibus pulvinar elementum integer enim"
			},
			{
				title: "03",
				text: "Faucibus pulvinar elementum integer enim"
			},
			{
				title: "04",
				text: "Mi bibendum neque egestas congue quisque egestas diam"
			},
			{
				title: "05",
				text: "Venenatis lectus magna fringilla urna"
			},
			{
				title: "06",
				text: "Venenatis lectus magna fringilla urna"
			},
		]
	}

	const [startPosition, setStartPosition] = useState(0)
	const [endPosition, setEndPosition] = useState(3)

	const prevBenefits = () => {
		if (startPosition > 0) {
			setStartPosition(startPosition - 3)
			setEndPosition(endPosition - 3)
		}
	}
	const nextBenefits = () => {
		if (endPosition < 6) {
			setStartPosition(startPosition + 3)
			setEndPosition(endPosition + 3)
		}
	}

	return (
		<Modal active={props.active} setActive={props.setActive}
		       benefits={benefitsData.benefits}
		       startPosition={startPosition} endPosition={endPosition}
		       prevBenefits={prevBenefits} nextBenefits={nextBenefits}/>
	)
}
export default ModalContainer
