import { useState, useCallback } from 'react';
import { QuizQuestion, quizQuestions } from '~/data/quiz-questions';

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
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    currentSession: 1,
    totalSessions: 4, // 40 questions / 10 per session = 4 sessions
    questionsInSession: 0,
    maxQuestionsPerSession: 10,
    gameOver: false,
    gameCompleted: false,
    showGameOverPopup: false,
    showExplanationPopup: false,
    lastQuestionExplanation: null,
  });

  const getCurrentQuestion = useCallback((): QuizQuestion | null => {
    if (gameState.currentQuestionIndex >= quizQuestions.length) {
      return null;
    }
    return quizQuestions[gameState.currentQuestionIndex];
  }, [gameState.currentQuestionIndex]);

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
      const allQuestionsComplete = nextQuestionIndex >= quizQuestions.length;

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
  }, [gameState, getCurrentQuestion]);

  const resetGame = useCallback(() => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      currentSession: 1,
      totalSessions: 4,
      questionsInSession: 0,
      maxQuestionsPerSession: 10,
      gameOver: false,
      gameCompleted: false,
      showGameOverPopup: false,
      showExplanationPopup: false,
      lastQuestionExplanation: null,
    });
  }, []);

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
      const allQuestionsComplete = nextQuestionIndex >= quizQuestions.length;

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
  }, [gameState.questionsInSession, gameState.maxQuestionsPerSession]);

  const getTotalProgress = useCallback(() => {
    return {
      current: gameState.currentQuestionIndex,
      total: quizQuestions.length,
      percentage: (gameState.currentQuestionIndex / quizQuestions.length) * 100,
    };
  }, [gameState.currentQuestionIndex]);

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