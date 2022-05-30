import { createContext} from 'react';

export const QuizContext = createContext({
    gameState: "",
    setGameState: (gameState: string) => {},
    score: 0,
    setScore:(score: number) => {}

});