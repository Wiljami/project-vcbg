package fi.skd.buttongame;


import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
@Component
public class GameState {
    private int points = 20;
    private boolean win = false;
    private int lastWin = -1;
    private int clicksToNextWin = 0;

    public GameState() {
    }

    public GameState(GameState state) {
        setPoints(state.getPoints());
        setWin(state.isWin());
        setLastWin(state.getLastWin());
        setClicksToNextWin(state.getClicksToNextWin());
    }

    public void reset() {
        setPoints(20);
        setWin(false);
        setLastWin(-1);
        setClicksToNextWin(0);
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
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
