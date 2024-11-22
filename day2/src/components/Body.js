import {people} from './data';
import People from './People';

export default function Body(){
    return(
        <>
        <h3>List of famous People</h3>
        {
            people.map(item=><People detail={item}></People>)
        }
        </>
    );
}
