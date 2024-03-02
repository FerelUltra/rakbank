import './App.css'
import {Carousel} from "./components/Carousel.tsx";
import {steps} from "./config";
import {useRef, useState} from "react";
import {Dots} from "./components/Dots.tsx";
import {Estimation, Result} from "./types";
import {Rate} from "./components/Rate.tsx";
import {postEstimations} from "./api";

function App() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [stepCount, setStepCount] = useState(1)
    const [estimations, setEstimations] = useState<Estimation[]>([])
    const startAnimation = async () => {
        if (ref.current && steps.length > stepCount) {
            ref.current.classList.add('next')
            ref.current.style.transform = `translate(0,${-100 * stepCount}%)`
            setStepCount(prev => prev + 1)
        } else if (ref.current && steps.length === stepCount) {
            ref.current.style.transform = `translate(0,${-100 * stepCount}%)`
            const requestBody: Result = steps.map((step, index) => {
                return {text: step.text, estimation: estimations[index]}
            })
            setStepCount(prev => prev + 1)
            await postEstimations(requestBody)
        }
    }
    const startTestAgain = () => {
        setStepCount(1)
        if(ref.current){
            ref.current.style.transform = `translate(0,0)`
        }
        setEstimations([])
    }
    return (
        <div className='app'>
            <Carousel startTestAgain={startTestAgain} steps={steps} estimations={estimations} ref={ref}/>
            <Rate startAnimation={startAnimation} setEstimations={setEstimations}/>
            <Dots stepCount={stepCount} steps={steps}/>
        </div>
    )
}

export default App
