import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../../scss/partials/MainHome.scss";

function MainHome() {
    return (
        <>
            <div className="container-left-home">
                <div className="inner-container">
                    <div className="top-sec">
                        <h3 className="starting-text">Hi all. I am</h3>
                        <h1 className="name">Alessio Caringella</h1>
                        <h2 className="front-end">&gt; Front-end developer</h2>
                        <h2 className="back-end">&gt; Back-end developer</h2>
                    </div>
                    <div className="bottom-sec">
                        <h4 className="comment">// complete game to continue</h4>
                        <h4 className="comment">// you can also see it on my Github page</h4>
                        <h5><span className="const">const </span><span className="const-name">githublink </span>= <a className="const-value" href="#">"https://github.com/Alecaring"</a></h5>
                    </div>
                </div>
            </div>
            <div className="container-right-home">
                <img src="/background_blurs.svg" alt="" />
                <div className="container-game">
                    <div className="dot1 dot">x</div>
                    <div className="dot2 dot">x</div>
                    <div className="dot3 dot">x</div>
                    <div className="dot4 dot">x</div>

                    {/* contenitore destra */}
                    <div className="inner-game-container">
                        <div className="game-cell"></div>
                        <div className="game-button-start">
                            <button>start game</button>
                        </div>
                    </div>
                    {/* contenitore sinistra */}
                    <div className="inner-rules-container">
                        <div className='main-container-to-flex'>
                            <div className="rules">
                                <p className="comment">// use keyboard</p>
                                <p className="comment">// arrows to play</p>
                                <div className="keyboard-arrows">
                                    <div className="cont-up">
                                        <FontAwesomeIcon className='arrows' icon={faChevronUp} />
                                    </div>
                                    <div className="cont-down">
                                        <FontAwesomeIcon className='arrows' icon={faChevronLeft} />
                                        <FontAwesomeIcon className='arrows' icon={faChevronDown} />
                                        <FontAwesomeIcon className='arrows' icon={faChevronRight} />
                                    </div>
                                </div>
                            </div>
                            <div className='container-food-left'>
                                <p className="comment">// food left</p>
                                <div className="inner-food-container">
                                    <div className="food1 food"></div>
                                    <div className="food2 food"></div>
                                    <div className="food3 food"></div>
                                    <div className="food4 food"></div>
                                    <div className="food5 food"></div>
                                    <div className="food6 food"></div>
                                    <div className="food7 food"></div>
                                    <div className="food8 food"></div>
                                    <div className="food9 food"></div>
                                    <div className="food10 food"></div>
                                </div>

                            </div>
                        </div>
                            <button>skip</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainHome; 