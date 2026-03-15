import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="spinner"></div>
            <p className="loading-text">Preparando tu experiencia...</p>
        </div>
    );
};

export {LoadingScreen};