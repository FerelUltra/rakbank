import {RateProps} from "../types";

export const Rate =  ({startAnimation, setEstimations}: RateProps) => {
    const setBadEstimation = () =>{
        startAnimation()
        setEstimations(prevState => [...prevState, 'bad'])
    }
    const setNeutralEstimation = () =>{
        startAnimation()
        setEstimations(prevState => [...prevState, 'neutral'])
    }
    const setGoodEstimation = () =>{
        startAnimation()
        setEstimations(prevState => [...prevState, 'good'])
    }
    return (
        <div className='rate'>
            <button className='button thumb-up' onClick={setGoodEstimation}/>
            <button className='button thinking' onClick={setNeutralEstimation}/>
            <button className='button thumb-down' onClick={setBadEstimation}/>
        </div>
    )
}
