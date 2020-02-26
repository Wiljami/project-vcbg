package fi.skd.buttongame;

import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

@Service
public class ButtonGame {
    public GameState play() {
        GameState state = new GameState();
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
        state.setWin(winner);
        state.setClicksToNextWin(10 - remainder);

        return state;
    }

    private synchronized int runCounter() {
        int counter = -1;
        File counterFile = new File("counter.txt");

        if (!counterFile.exists()) {
            try {
                counterFile.createNewFile();
                counter = 1;
                DataOutputStream dos = new DataOutputStream(new FileOutputStream(counterFile));
                dos.writeInt(counter);
            } catch (IOException e) {
                e.printStackTrace();
                System.out.println("Something went wrong with creating the counter file.");
            }
        } else {
            try {
                DataInputStream dis = new DataInputStream(new FileInputStream(counterFile));
                counter = dis.readInt() + 1;
                System.out.println(counter);
                DataOutputStream dos = new DataOutputStream(new FileOutputStream(counterFile));
                dos.writeInt(counter);
            } catch (IOException e) {
                e.printStackTrace();
                System.out.println("Something went wrong with reading the counter file.");
            }
        }
        return counter;
    }
}
