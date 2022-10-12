import classes from "./SecondSlide.module.css"
import {useEffect, useRef, useState} from "react";

const SecondSlide = () => {

	const [slider, setSlider] = useState({
		min: 0, max: 330,
		step: 1, value: 0
	})

	const sliderValueChanged = (val) => {
		setSlider({
			...slider,
			value: +val
		})
	}

	const scrollRef = useRef(null)

	useEffect(() => {
		scrollRef.current.scrollTop = slider.value
	}, [slider.value])


	return (
		<div className={classes.container}>
			<div className={classes.caption}>
				<p>Текст</p>
				<p>Сообщения</p>
			</div>
			<div className={classes.scrollText}>
				<div className={classes.scroll}>
					<div className={classes.sliderWrapper}>
						<input className={classes.slider}
						       type="range" min={slider.min} max={slider.max}
						       step={slider.step} value={slider.value}
						       onChange={e => {
							       sliderValueChanged(e.target.value)
						       }}
						/>
					</div>
				</div>
				<div className={classes.bgText}>
					<div className={classes.text} ref={scrollRef}>
						<b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit. Accusantium, aut
						consequatur corporis optio perspiciatis provident reiciendis reprehenderit rerum. Cupiditate
						enim iste maxime praesentium vero. Ad eligendi id minima necessitatibus obcaecati.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut debitis delectus
						deleniti dolores ducimus facere fugit illo, minima quaerat sed ullam. Eaque esse ex expedita
						in quae velit!<br/><br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dolorum fuga nam
						numquam optio pariatur quaerat quas, quasi quidem quo ratione reprehenderit sapiente sint
						sit ullam voluptas, voluptatibus voluptatum!
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque doloribus
						explicabo libero officiis sed similique soluta sunt ut, voluptate? Alias aliquid ea facilis
						impedit molestiae numquam quis, vero voluptate.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam cum, dolore
						doloremque ea eius et eum exercitationem inventore, obcaecati perspiciatis qui quisquam
						repudiandae tempora tenetur, totam voluptates voluptatum.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda aut cum dolorem
						eos error, id officiis placeat qui, quisquam sint tenetur. Debitis, expedita fugiat illum
						magnam mollitia perspiciatis vel.
					</div>
					<div className={classes.gradientBack}></div>
				</div>
			</div>
		</div>
	)
}

export default SecondSlide
