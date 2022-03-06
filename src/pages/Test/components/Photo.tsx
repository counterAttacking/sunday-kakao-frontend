type PhotoType = {
    address: string;
    description: string;
};

const Photo = (props: PhotoType) => {
    const { address, description } = props;
    return (
        <div>
            <img src={address} />
            <article>{description}</article>
        </div>
    );
};

export default Photo;