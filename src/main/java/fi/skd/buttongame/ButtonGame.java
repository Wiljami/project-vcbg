package fi.skd.buttongame;

import org.springframework.stereotype.Service;

@Service
public class ButtonGame {

    private int counter;

    public GameState play(GameState state) {
        if (state.getPoints() <= 0) {
            return state;
        }
        int value = runCounter();
        int remainder = value % 10;
        int winnings = 0;
        boolean winner = false;

        if (remainder == 0) {
            winnings = 5;
            winner = true;
            if (value % 100 == 0) {
                winnings = 40;
                if (value % 500 == 0) {
                    winnings = 100;
                }
            }
        }

        state.setLastWin(winnings);
        state.setPoints(state.getPoints() - 1 + winnings);
        state.setWin(winner);
        state.setClicksToNextWin(10 - remainder);

        return state;
    }

    private synchronized int runCounter() {
        counter++;
        return counter;
    }
}
