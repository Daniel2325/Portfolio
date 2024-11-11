import './LoadingScreen.css';
import devops from "../../assets/images/devops.png";

const LoadingScreen = () => {
    return (
        <>
            <div className="loading-screen">
                {/*<img src={devops} alt="Cargando..." className="loading-gif"/>*/}
                <p className="loading-text">Preparando tu experiencia DevOps...</p>

            </div>

        </>
    );
};

export {LoadingScreen};