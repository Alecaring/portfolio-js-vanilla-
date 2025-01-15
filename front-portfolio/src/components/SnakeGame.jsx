import "../scss/partials/snakeGame.scss";
import { useGame } from '../contexts/GameContext';

const SnakeGame = () => {


    const {
        isGame,
        setIsGame,
        gridSizeX,
        gridSizeY,
        cellWidth,
        cellHeight,
        initialSnake,
        initialFood,
        snake,
        direction,
        food,
        gameOver,
        foodEaten,
        resetGame,
        renderGrid,
    } = useGame();



    return (
        <div className="snake-game">
            {gameOver ? (
                <div className="game-over">
                    <h2>Game Over!</h2>
                    {/* <button onClick={resetGame}>Restart</button> */}
                </div>
            ) : (
                <>
                    <div
                        className="grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${gridSizeX}, ${cellWidth}px)`,
                            gridTemplateRows: `repeat(${gridSizeY}, ${cellHeight}px)`,
                            width: `${gridSizeX * cellWidth}px`,
                            height: `${gridSizeY * cellHeight}px`,
                        }}
                    >
                        {renderGrid()}
                    </div>
                </>
            )}
        </div>
    );
};

export default SnakeGame;
