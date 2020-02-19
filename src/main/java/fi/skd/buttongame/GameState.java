package fi.skd.buttongame;

import org.springframework.stereotype.Component;

@Component
public class GameState {
    private boolean win;
    private int lastWin;
    private int clicksToNextWin;

    public GameState() {
    }

    public boolean isWin() {
        return win;
    }

    public void setWin(boolean win) {
        this.win = win;
    }

    public int getLastWin() {
        return lastWin;
    }

    public void setLastWin(int lastWin) {
        this.lastWin = lastWin;
    }

    public int getClicksToNextWin() {
        return clicksToNextWin;
    }

    public void setClicksToNextWin(int clicksToNextWin) {
        this.clicksToNextWin = clicksToNextWin;
    }
}
