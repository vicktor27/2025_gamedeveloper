import Counter from "./Counter";
import { useState } from "react";

const Section = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (  
        <>
        <section>
            <h1>Seccion del Contador</h1>
            <Counter></Counter>
        </section>
        </>
    );
}
export default Section;