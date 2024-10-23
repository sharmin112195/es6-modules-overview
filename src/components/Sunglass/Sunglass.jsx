import Watch from '../Watch/Watch';
import './Sunglass.css'
import {add, multiply, divideTheFirstNumberByTheSecondNumber as divide} from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add (first,second);
    const mult = multiply (first, second)
    const leave = divide (first,second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;