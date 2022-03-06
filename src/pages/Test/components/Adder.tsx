import { ChangeEvent, useState } from "react";

const Adder = () => {
    const [operand1, setOperand1] = useState<number>(0);
    const [operand2, setOperand2] = useState<number>(0);

    const operand1Changed = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length > 0) {
            setOperand1(Number.parseInt(event.currentTarget.value));
        } else {
            setOperand1(0);
        }
    };
    const operand2Changed = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length > 0) {
            setOperand2(Number.parseInt(event.currentTarget.value));
        } else {
            setOperand2(0);
        }
    };

    return (
        <section>
            <input type="text" onChange={operand1Changed} />
            +
            <input type="text" onChange={operand2Changed} />
            =
            <label>{operand1 + operand2}</label>
        </section>
    )
};

export default Adder;