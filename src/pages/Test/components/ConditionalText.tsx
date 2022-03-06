import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
    const [inputStr, setInputStr] = useState<string>("");

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputStr(event.currentTarget.value);
    };

    return (
        <section>
            <input type="text" onChange={inputChanged} />
            {inputStr.length > 5 && <label>{inputStr}</label>}
        </section>
    );
};

export default ConditionalText;