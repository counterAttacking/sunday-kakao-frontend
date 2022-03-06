import { ChangeEvent, useState } from "react";

const WelcomeName = () => {
    const [greeting, setGreeting] = useState<string>("");

    const nameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.value;
        if (name.length > 0) {
            setGreeting(`반갑습니다 ${name}님`);
        } else {
            setGreeting("");
        }
    }

    return (
        <section>
            <input type="text" onChange={nameChanged} />
            <label>{greeting}</label>
        </section>
    );
};

export default WelcomeName;