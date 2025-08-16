import { useState, useEffect, useCallback } from 'react';

export interface HighScore {
  id: string;
  score: number;
  date: string;
  questionsAnswered: number;
}

const STORAGE_KEY = 'stfu-quiz-highscores';
const MAX_SCORES = 10;

export const useHighScores = () => {
  const [scores, setScores] = useState<HighScore[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setScores(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading high scores:', error);
      setScores([]);
    }
  }, []);

  const saveScore = useCallback((score: number, questionsAnswered: number) => {
    const newScore: HighScore = {
      id: Date.now().toString(),
      score,
      date: new Date().toISOString(),
      questionsAnswered
    };

    setScores(prev => {
      const updated = [...prev, newScore]
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_SCORES);
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Error saving high scores:', error);
      }
      
      return updated;
    });
  }, []);

  const clearScores = useCallback(() => {
    setScores([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing high scores:', error);
    }
  }, []);

  const isNewHighScore = useCallback((score: number): boolean => {
    if (scores.length < MAX_SCORES) return true;
    return score > scores[scores.length - 1].score;
  }, [scores]);

  return {
    scores,
    saveScore,
    clearScores,
    isNewHighScore
  };
};