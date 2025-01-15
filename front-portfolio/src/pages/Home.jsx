import CommonInnerSectionLayoutLeftSide from "../components/layouts/CommonInnerSectionLayoutLeftSide";
import CommonInnerSectionLayoutRightSide from "../components/layouts/CommonInnerSectionLayoutRightSide";
import CommonSectionLayout from "../components/layouts/CommonSectionLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../scss/partials/commonSectionLayout.scss";
import "../scss/partials/home.scss";
import { useGame } from "../contexts/GameContext";
import SnakeGame from "../components/SnakeGame";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";

const Home = () => {

  const { isGame, setIsGame, resetGame, arrayFood, isSkipped, setIsSkipped } = useGame();
  

  return (
    <section className="container-main">

      <CommonSectionLayout>

        <CommonInnerSectionLayoutLeftSide>
          <div className="container-left-home">
            <img src="/backgroundBlurs.svg" alt="" />
            <div className="inner-container">
              <div className="top-sec">
                <h3 className="starting-text">Hi all. I am</h3>
                <h1 className="name">Alessio <br /> Caringella</h1>

                <h2 className="front-end text-blu-lilla">&gt; Front-end developer</h2>
                <h2 className="back-end text-purple">&gt; Back-end developer</h2>
              </div>
              <div className="bottom-sec">
                <h4 className="text-blu-pietra mobile-to-hide">// complete game to continue</h4>
                <h4 className="text-blu-pietra">// you can also see my Github page</h4>
                <h5><span className="text-blu-lilla">const </span><span className="text-turchese-chiaro">githublink </span>= <a className="text-terracotta-chiara" href="#">"https://github.com/Alecaring"</a></h5>
              </div>
            </div>
          </div>
        </CommonInnerSectionLayoutLeftSide>

        <CommonInnerSectionLayoutRightSide>
          <div className="container-right-home">
            {/* <img src="/backgroundBlurs.svg" alt="" /> */}

            {!isSkipped ? (
              <div className="container-game">
                <div className="dot1 dot">x</div>
                <div className="dot2 dot">x</div>
                <div className="dot3 dot">x</div>
                <div className="dot4 dot">x</div>

                <div className="inner-game-container">
                  {!isGame ? (
                    <>
                      <div className="game-cell">
                        <img src="/Snake.svg" alt="" />
                        <div className="food"></div>
                      </div>
                    </>
                  ) : (
                    <SnakeGame />
                  )}
                  <div className="game-button-start">
                    {!isGame ? (
                      <Button onClick={() => setIsGame(true)} btxTxt="start game" />
                      // <button onClick={() => setIsGame(true)}>start game</button>

                    ) : (
                      <Button onClick={resetGame} btxTxt="restart game" />
                      // <button onClick={resetGame}>restart game</button>

                    )}
                  </div>
                </div>
                <div className="inner-rules-container">
                  <div className='main-container-to-flex'>
                    <div className="rules">
                      <p className="text-blu-pietra">// use keyboard</p>
                      <p className="text-blu-pietra">// arrows to play</p>
                      <div className="keyboard-arrows">
                        <div className="cont-up">
                          <Icon className="arrows" icon={faChevronUp} />
                        </div>
                        <div className="cont-down">
                          <Icon className="arrows" icon={faChevronLeft} />
                          <Icon className="arrows" icon={faChevronDown} />
                          <Icon className="arrows" icon={faChevronRight} />
                        </div>
                      </div>
                    </div>
                    <div className='container-food-left'>

                      {!isGame ? (
                        <>
                          <p className="text-blu-pietra">// food left</p>
                          <div className="inner-food-container">
                            {[...Array(10)].map((_, index) => (
                              <div key={index} className={`food${index + 1} food`}></div>
                            ))}
                          </div>
                        </>

                      ) : (

                        <>
                          <p className="text-blu-pietra">// food left</p>
                          <div className="inner-food-container">
                            {arrayFood.map((s, index) => {
                              return <div key={index} className={`food${index + 1} food`}></div>
                            })}
                          </div>
                          <p>{arrayFood.length}</p>
                        </>
                      )}


                    </div>
                  </div>
                  <Button btxTxt="skip" onClick={() => setIsSkipped(true)} />
                </div>

              </div>

            ) : (





              <Slider/>






            )}

          </div>
        </CommonInnerSectionLayoutRightSide>

      </CommonSectionLayout>
    </section >
  )
};

export default Home;
