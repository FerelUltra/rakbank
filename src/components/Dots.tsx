import {DotsProps} from "../types";

export const Dots = ({steps, stepCount}: DotsProps) => {
    return (
        <div style={{top: `calc(50% - ${steps.length * 0.75}vw)` }} className='dots'>
            {steps.map((_, index)=>{
                return <div className={index + 1 === stepCount ? 'active-dot' : 'dot'}></div>
            })}
        </div>
    )
}
