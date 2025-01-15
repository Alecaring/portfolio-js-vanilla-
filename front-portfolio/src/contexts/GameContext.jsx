import { createContext, useContext, useState, useEffect } from "react";



const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [isGame, setIsGame] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);

    // Dimensione della griglia del gioco
    const gridSizeX = 26; // numero di colonne
    const gridSizeY = 35; // numero di righe
    const cellWidth = 10; // larghezza cella
    const cellHeight = 10; // altezza cella

    // Stati iniziali
    const initialSnake = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
    ];
    const initialFood = { x: 7, y: 7 };

    const [snake, setSnake] = useState(initialSnake);
    const [direction, setDirection] = useState('RIGHT');
    const [food, setFood] = useState(initialFood);
    const [gameOver, setGameOver] = useState(false);
    const [foodEaten, setFoofEaten] = useState(0);
    const [arrayFood, setArrayFood] = useState([]);

    // Funzione per reimpostare il gioco
    const resetGame = () => {
        setSnake(initialSnake); // Resetta il serpente
        setDirection('RIGHT'); // Reimposta la direzione iniziale
        setFood(initialFood); // Reimposta il cibo
        setGameOver(false); // Reimposta lo stato di gioco
        setArrayFood([]);
    };

    // Gestisci il movimento del serpente
    useEffect(() => {
        if (gameOver) return;

        const moveSnake = setInterval(() => {
            setSnake((prevSnake) => {
                let newSnake = [...prevSnake];
                const head = { ...newSnake[0] };

                switch (direction) {
                    case 'UP':
                        head.y -= 1;
                        break;
                    case 'DOWN':
                        head.y += 1;
                        break;
                    case 'LEFT':
                        head.x -= 1;
                        break;
                    case 'RIGHT':
                        head.x += 1;
                        break;
                    default:
                        break;
                }

                // Controlla se il serpente mangia il cibo
                if (head.x === food.x && head.y === food.y) {
                    const newFood = generateFood();
                    setFoofEaten((prevFoodEaten) => (prevFoodEaten || 0) + 1);
                    setFood(newFood);

                } else {
                    newSnake.pop();
                }

                // Controlla la collisione con il bordo e con se stesso
                if (
                    head.x < 0 ||
                    head.x >= gridSizeX ||
                    head.y < 0 ||
                    head.y >= gridSizeY ||
                    newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
                ) {
                    clearInterval(moveSnake);
                    setGameOver(true);
                }

                return [head, ...newSnake];
            });
        }, 200);

        return () => clearInterval(moveSnake);
    }, [direction, food, gameOver]);

    useEffect(() => {
        setArrayFood((prevFoodArray) => {
            // Aggiungi solo se il valore non esiste già nell'array
            if (!prevFoodArray.includes(foodEaten)) {
                return [...prevFoodArray, foodEaten];
            }
            return prevFoodArray;
        });
    }, [foodEaten]);

    useEffect(() => {
        console.log('Array food aggiornato:', arrayFood);
    }, [arrayFood]); // Log quando l'array viene aggiornato


    // Funzione per generare un nuovo cibo
    const generateFood = () => {
        const newFood = {
            x: Math.floor(Math.random() * gridSizeX),
            y: Math.floor(Math.random() * gridSizeY),
        };
        return newFood;
    };

    // Gestione dei tasti per il movimento
    useEffect(() => {
        const handleKeydown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'DOWN') setDirection('UP');
                    break;
                case 'ArrowDown':
                    if (direction !== 'UP') setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [direction]);

    // Funzione per disegnare la griglia e il serpente
    const renderGrid = () => {
        const grid = [];
        for (let y = 0; y < gridSizeY; y++) {
            for (let x = 0; x < gridSizeX; x++) {
                const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
                const isFood = food.x === x && food.y === y;

                grid.push(
                    <div
                        key={`${x}-${y}`}
                        className={`grid-cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : 'transparent'}`}
                        style={{
                            width: `${cellWidth}px`,
                            height: `${cellHeight}px`,
                            backgroundColor: isSnake ? 'green' : isFood ? 'red' : 'transparent',
                        }}
                    ></div>
                );
            }
        }
        return grid;
    };


    return (
        <GameContext.Provider value={{
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
            arrayFood,
            isSkipped, 
            setIsSkipped
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);