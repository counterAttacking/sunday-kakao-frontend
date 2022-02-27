type AdultType = {
    age: number;
};

const Adult = (props: AdultType) => {
    const { age } = props;
    return (
        <section>
            {age >= 20 ? <label>성인</label> : <label>미성년자</label>}
        </section>
    );
};

export default Adult;