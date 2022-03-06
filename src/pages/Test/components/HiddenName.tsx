import { ChangeEvent, useState } from "react";

const HiddenName = () => {
    const [hiddenName, setHiddenName] = useState<string>();

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.value;
        if (name.length > 2) {
            const firstName = name.substring(0, 1);
            const middleName = name.substring(1, name.length - 1);
            const lastName = name.substring(name.length - 1, name.length);
            const blockedName = "*".repeat(middleName.length)
            setHiddenName(`${firstName}${blockedName}${lastName}`);
        } else {
            setHiddenName(name);
        }
    };

    return (
        <section>
            <input type="text" onChange={inputChanged} />
            <label>{hiddenName}</label>
        </section>
    );
};

export default HiddenName;