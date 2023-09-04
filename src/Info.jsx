import "./styles.css"

const Info = ({name, bio}) => {
    return (
        <div className="portafolio-txt">
            <h1> {name} </h1>
            <p> {bio} </p>
        </div>
    );
}

export default Info;