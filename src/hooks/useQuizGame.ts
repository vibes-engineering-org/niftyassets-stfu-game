import { useState, useCallback, useMemo } from 'react';
import { Web3QuizQuestion, generateRandomizedQuestions } from '~/data/web3-quiz-questions';

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  currentSession: number;
  totalSessions: number;
  questionsInSession: number;
  maxQuestionsPerSession: number;
  gameOver: boolean;
  gameCompleted: boolean;
  showGameOverPopup: boolean;
  showExplanationPopup: boolean;
  lastQuestionExplanation: string | null;
}

export const useQuizGame = () => {
  // Generate randomized questions once when the hook is created
  const gameQuestions = useMemo(() => generateRandomizedQuestions(), []);
  
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    currentSession: 1,
    totalSessions: 10, // 120 questions / 12 per session = 10 sessions
    questionsInSession: 0,
    maxQuestionsPerSession: 12,
    gameOver: false,
    gameCompleted: false,
    showGameOverPopup: false,
    showExplanationPopup: false,
    lastQuestionExplanation: null,
  });

  const getCurrentQuestion = useCallback((): Web3QuizQuestion | null => {
    if (gameState.currentQuestionIndex >= gameQuestions.length) {
      return null;
    }
    return gameQuestions[gameState.currentQuestionIndex];
  }, [gameState.currentQuestionIndex, gameQuestions]);

  const answerQuestion = useCallback((userAnswer: boolean) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion || gameState.gameOver || gameState.gameCompleted) {
      return;
    }

    const isCorrect = userAnswer === currentQuestion.correctAnswer;
    const scoreChange = isCorrect ? 1 : -1;
    const newScore = gameState.score + scoreChange;

    setGameState(prev => {
      const newQuestionsInSession = prev.questionsInSession + 1;
      const sessionComplete = newQuestionsInSession >= prev.maxQuestionsPerSession;
      const nextQuestionIndex = prev.currentQuestionIndex + 1;
      const allQuestionsComplete = nextQuestionIndex >= gameQuestions.length;

      // If answer is incorrect, show explanation popup
      if (!isCorrect) {
        return {
          ...prev,
          score: newScore,
          showExplanationPopup: true,
          lastQuestionExplanation: currentQuestion.explanation,
        };
      }

      // Check if game is over due to low score
      if (newScore <= -10) {
        return {
          ...prev,
          score: newScore,
          gameOver: true,
          showGameOverPopup: true,
        };
      }

      // Check if all questions are completed
      if (allQuestionsComplete) {
        return {
          ...prev,
          score: newScore,
          currentQuestionIndex: nextQuestionIndex,
          questionsInSession: newQuestionsInSession,
          gameCompleted: true,
        };
      }

      // Check if session is complete
      if (sessionComplete) {
        return {
          ...prev,
          score: newScore,
          currentQuestionIndex: nextQuestionIndex,
          currentSession: prev.currentSession + 1,
          questionsInSession: 0,
        };
      }

      // Normal progression
      return {
        ...prev,
        score: newScore,
        currentQuestionIndex: nextQuestionIndex,
        questionsInSession: newQuestionsInSession,
      };
    });
  }, [gameState, getCurrentQuestion, gameQuestions.length]);

  const resetGame = useCallback(() => {
    // Generate new randomized questions for the new game
    const newQuestions = generateRandomizedQuestions();
    
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      currentSession: 1,
      totalSessions: 10,
      questionsInSession: 0,
      maxQuestionsPerSession: 12,
      gameOver: false,
      gameCompleted: false,
      showGameOverPopup: false,
      showExplanationPopup: false,
      lastQuestionExplanation: null,
    });
    
    // Replace current questions with new randomized set
    gameQuestions.splice(0, gameQuestions.length, ...newQuestions);
  }, [gameQuestions]);

  const closeGameOverPopup = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      showGameOverPopup: false,
    }));
  }, []);

  const closeExplanationPopup = useCallback(() => {
    setGameState(prev => {
      const newQuestionsInSession = prev.questionsInSession + 1;
      const sessionComplete = newQuestionsInSession >= prev.maxQuestionsPerSession;
      const nextQuestionIndex = prev.currentQuestionIndex + 1;
      const allQuestionsComplete = nextQuestionIndex >= gameQuestions.length;

      // Check if game is over due to low score
      if (prev.score <= -10) {
        return {
          ...prev,
          showExplanationPopup: false,
          lastQuestionExplanation: null,
          gameOver: true,
          showGameOverPopup: true,
        };
      }

      // Check if all questions are completed
      if (allQuestionsComplete) {
        return {
          ...prev,
          showExplanationPopup: false,
          lastQuestionExplanation: null,
          currentQuestionIndex: nextQuestionIndex,
          questionsInSession: newQuestionsInSession,
          gameCompleted: true,
        };
      }

      // Check if session is complete
      if (sessionComplete) {
        return {
          ...prev,
          showExplanationPopup: false,
          lastQuestionExplanation: null,
          currentQuestionIndex: nextQuestionIndex,
          currentSession: prev.currentSession + 1,
          questionsInSession: 0,
        };
      }

      // Normal progression
      return {
        ...prev,
        showExplanationPopup: false,
        lastQuestionExplanation: null,
        currentQuestionIndex: nextQuestionIndex,
        questionsInSession: newQuestionsInSession,
      };
    });
  }, []);

  const getSessionProgress = useCallback(() => {
    return {
      current: gameState.questionsInSession,
      total: gameState.maxQuestionsPerSession,
      percentage: (gameState.questionsInSession / gameState.maxQuestionsPerSession) * 100,
    };
  }, [gameState.questionsInSession, gameState.maxQuestionsPerSession, gameQuestions.length]);

  const getTotalProgress = useCallback(() => {
    return {
      current: gameState.currentQuestionIndex,
      total: gameQuestions.length,
      percentage: (gameState.currentQuestionIndex / gameQuestions.length) * 100,
    };
  }, [gameState.currentQuestionIndex, gameQuestions]);

  return {
    gameState,
    getCurrentQuestion,
    answerQuestion,
    resetGame,
    closeGameOverPopup,
    closeExplanationPopup,
    getSessionProgress,
    getTotalProgress,
  };
};