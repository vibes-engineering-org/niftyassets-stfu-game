'use client';

import { useHighScores, HighScore } from '~/hooks/useHighScores';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { ShareCastButton } from '~/components/share-cast-button';

interface HighScoresProps {
  currentScore?: number;
  questionsAnswered?: number;
  onClose: () => void;
  onPlayAgain: () => void;
}

export function HighScores({ currentScore, questionsAnswered, onClose, onPlayAgain }: HighScoresProps) {
  const { scores, saveScore, clearScores, isNewHighScore } = useHighScores();
  
  // Save current score if provided
  if (currentScore !== undefined && questionsAnswered !== undefined && !scores.find(s => s.score === currentScore && s.questionsAnswered === questionsAnswered)) {
    saveScore(currentScore, questionsAnswered);
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const shareText = currentScore !== undefined 
    ? `Just scored ${currentScore} points on the $STFU Quiz! Think you can beat me? 🧠\n\nPlay now: [your-app-url]`
    : "Check out the $STFU Quiz - test your Web3 knowledge!";

  const isNewHigh = currentScore !== undefined && isNewHighScore(currentScore);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {currentScore !== undefined && (
        <Card className={`border-2 ${isNewHigh ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'}`}>
          <CardHeader>
            <CardTitle className={`text-center ${isNewHigh ? 'text-yellow-800' : 'text-gray-800'}`}>
              {isNewHigh ? '🎉 New High Score!' : 'Game Complete!'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-blue-600">
                {currentScore} points
              </p>
              <p className="text-sm text-gray-600">
                Questions answered: {questionsAnswered}
              </p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <ShareCastButton 
                text={shareText}
                className="w-full"
              />
              
              <Button 
                onClick={onPlayAgain}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Play Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-center">High Scores</CardTitle>
        </CardHeader>
        <CardContent>
          {scores.length === 0 ? (
            <p className="text-center text-gray-500">No scores yet. Play the game to set your first high score!</p>
          ) : (
            <div className="space-y-2">
              {scores.map((score, index) => (
                <div
                  key={score.id}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    index === 0 ? 'bg-yellow-100 border border-yellow-300' : 
                    index === 1 ? 'bg-gray-100 border border-gray-300' : 
                    index === 2 ? 'bg-orange-100 border border-orange-300' : 
                    'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-lg w-8 text-center">
                      #{index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-lg">
                        {score.score} points
                      </p>
                      <p className="text-sm text-gray-600">
                        {score.questionsAnswered} questions • {formatDate(score.date)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-6 flex space-x-2">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="flex-1"
            >
              Close
            </Button>
            {scores.length > 0 && (
              <Button 
                onClick={clearScores}
                variant="destructive"
                size="sm"
              >
                Clear All
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}