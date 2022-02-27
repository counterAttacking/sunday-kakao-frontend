type TitleType = {
    title: string;
    subTitle?: string;
};

const Title = (props: TitleType) => {
    const { title, subTitle } = props;
    return (
        <div>
            <h1>
                {title}
            </h1>
            <hr />
            {subTitle !== undefined && <h3>{subTitle}</h3>}
        </div>
    );
};

export default Title;