import {CarouselProps, Result, Step} from "../types";
import {forwardRef} from "react";

type Ref = HTMLDivElement

export const Carousel = forwardRef<Ref, CarouselProps>(({steps, estimations, startTestAgain}, ref) => {
    const result: Result = steps.map((step, index) => {
        return {text: step.text, estimation: estimations[index]}
    })
    return (
        <div className='carousel' ref={ref}>
            {steps.map((step: Step) => {
                return <div className='carousel-step'>{step.text}</div>
            })}
            <div className='carousel-step result'>
                {result.map(({text, estimation}) => {
                    return <span>{text}: {estimation}</span>
                })}
                <button className='start-again-button' onClick={startTestAgain}>test again</button>
            </div>
        </div>
    )
})
