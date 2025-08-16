'use client';

import { useQuizGame } from '~/hooks/useQuizGame';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export default function QuizGame() {
  const {
    gameState,
    getCurrentQuestion,
    answerQuestion,
    resetGame,
    closeGameOverPopup,
    closeExplanationPopup,
    getSessionProgress,
    getTotalProgress
  } = useQuizGame();

  const currentQuestion = getCurrentQuestion();
  const sessionProgress = getSessionProgress();
  const totalProgress = getTotalProgress();

  // Explanation Popup for incorrect answers
  if (gameState.showExplanationPopup && gameState.lastQuestionExplanation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-orange-600">Incorrect Answer</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg font-medium">
              {gameState.lastQuestionExplanation}
            </p>
            <p className="text-sm text-gray-600">
              Current Score: {gameState.score}
            </p>
            <Button onClick={closeExplanationPopup} className="w-full">
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Game Over Popup
  if (gameState.showGameOverPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-red-600">Game Over</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg font-medium">
              STFU you hole knowledgebase is to low, game over.
            </p>
            <p className="text-sm text-gray-600">
              Final Score: {gameState.score}
            </p>
            <div className="space-y-2">
              <Button onClick={resetGame} className="w-full">
                Start New Game
              </Button>
              <Button onClick={closeGameOverPopup} variant="outline" className="w-full">
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Game Completed
  if (gameState.gameCompleted) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-green-600">Congratulations!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg font-medium">
              You completed all 100 questions!
            </p>
            <p className="text-xl font-bold">
              Final Score: {gameState.score}
            </p>
            <Button onClick={resetGame} className="w-full">
              Play Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main Game UI
  if (!currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <Card>
          <CardContent className="text-center p-8">
            <p>Loading question...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {/* Game Stats */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>Session: {gameState.currentSession}/{gameState.totalSessions}</div>
        <div>Score: {gameState.score}</div>
        <div>Question: {sessionProgress.current + 1}/{sessionProgress.total}</div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Session Progress</span>
            <span>{Math.round(sessionProgress.percentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${sessionProgress.percentage}%` }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Total Progress</span>
            <span>{Math.round(totalProgress.percentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${totalProgress.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Question {gameState.currentQuestionIndex + 1}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Statement */}
          <div className="text-center">
            <p className="text-lg font-medium leading-relaxed">
              {currentQuestion.statement}
            </p>
          </div>

          {/* Answer Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => answerQuestion(true)}
              className="px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700"
              disabled={gameState.gameOver}
            >
              Yes
            </Button>
            <Button
              onClick={() => answerQuestion(false)}
              className="px-8 py-4 text-lg font-semibold bg-red-600 hover:bg-red-700"
              disabled={gameState.gameOver}
            >
              STFU
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reset Game Button */}
      <div className="text-center">
        <Button onClick={resetGame} variant="outline" size="sm">
          Reset Game
        </Button>
      </div>
    </div>
  );
}