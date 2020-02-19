package fi.skd.buttongame;


import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

@Component
public class GameState {
    private boolean win = false;
    private int lastWin = -1;
    private int clicksToNextWin = 0;

    public GameState() {
    }

    public GameState(GameState state) {
        setWin(state.isWin());
        setLastWin(state.getLastWin());
        setClicksToNextWin(state.getClicksToNextWin());
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
