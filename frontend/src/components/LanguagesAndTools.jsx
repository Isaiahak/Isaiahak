import { useState, useEffect, useRef } from 'react'
import svg0 from '../assets/svg_0.svg'

const svg_files = import.meta.glob('../assets/*.svg', {
	eager: true,
	import: 'default'
})

const svgs = Object.entries(svg_files).reduce((svgs, [path, component]) => {
	const num = path.replace('../assets/', '').replace('.svg', '')
	svgs[num] = component;
	return svgs
}, {})

function LanguagesAndTools() {
	const [shiftAmount, setShiftAmount] = useState(0)
	const imageRef = useRef(null)
	const imageWidth = useRef(0)
	const [stopShift, setStopShift] = useState(false)

	const [images, setImages] = useState(svgs)
	console.log(svg0)

	useEffect(() => {
		/*
		function changeAmount() {
			if (shiftAmount >= (imageWidth.current)) {
				shiftImages()
			}
			setShiftAmount(prevShiftAmount => prevShiftAmount >= (imageWidth.current) ? 0 : prevShiftAmount + 1)
		}
		function shiftImages() {
			const last = images[images.length - 1]
			removeImages(last)
			setImages(prevImages => [last, ...prevImages])
		}

		function removeImages(img) {
			setImages(prevImages => prevImages.filter(image => image !== img))
		}

		const test = setInterval(() => {
			if (!stopShift) {
				changeAmount()
			}
		}, 10)
		return () => clearInterval(test)
		*/
	}, [shiftAmount, imageWidth, images, stopShift])

	useEffect(() => {
		if (imageRef.current) {
			const rect = imageRef.current.getBoundingClientRect()
			imageWidth.current = rect.width
		}
	}, [])

	return (
		<div className=" w-[90%] h-20 md:h-[6rem] md:w-[60rem] gap-2 md:gap-4 bg-primary overflow-hidden  self-center mt-[2rem] md:mt-[2rem] border-2 rounded-md border-border round-md flex flex-col hover:border-white" onMouseOver={() => setStopShift(true)} onMouseLeave={() => setStopShift(false)}>
			<h1 className="self-center ">Tools/Languages I am familiar with </h1>
			<div style={{ transform: `translateX(${shiftAmount}px)` }}
				className="flex flex-row flex-nowrap ">
				{images}
			</div>
		</div>
	)
}

export default LanguagesAndTools;
