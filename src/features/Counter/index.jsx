import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {increase,decrease} from './counterSlice'


CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch()
    const handleIncreaseClick = () => {
        const action = increase();
        console.log(action);
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        console.log('Da click');
        dispatch(decrease());
    }
    return (
        <div>
            Counter: {count}
            <div>
                <button onClick = {handleIncreaseClick}>Increase</button>
                <button onClick = {handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;