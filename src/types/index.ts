import {Dispatch, SetStateAction} from "react";

export interface Step {
    text: string
}

export interface CarouselProps {
    steps: Step[],
    estimations: Estimation[],
    startTestAgain: ()=> void
}

export interface RateProps {
    startAnimation: () => void
    setEstimations: Dispatch<SetStateAction<Estimation[]>>
}

export interface DotsProps {
    steps: Step[],
    stepCount: number,
}

export type Estimation = 'bad' | 'neutral' | 'good'

export type Result = { text: string, estimation: Estimation }[]
