import { useParams } from "react-router-dom"

export default function NumberGraber (){

    //const params = useParams();
    const {banana, id, potato} = useParams();
    return(
        <div>
            <h1>The number that this component grabbed is: {banana}</h1>
            <h1>And the id is: {id}</h1>
            <h1>And potatoes: {potato}</h1>
        </div>    
    )
}