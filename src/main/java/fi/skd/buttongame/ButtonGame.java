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
        String filename = "counter.txt";
        File counterFile = new File(filename);
        int ch;

        if (!counterFile.exists()) {
            try {
                counterFile.createNewFile();
                FileWriter fw = new FileWriter(counterFile);
                counter = 1;
                fw.write(String.valueOf(counter));
                fw.close();
            } catch (IOException e) {
                System.out.println("Something went wrong with creating the counter file.");
            }
        } else {
            try {
                FileReader fr=new FileReader(filename);
                StringBuilder stringBuilder = new StringBuilder();
                while ((ch=fr.read())!=-1) {
                    stringBuilder.append((char) ch);
                }
                fr.close();
                counter = Integer.parseInt(stringBuilder.toString());
                counter++;
                FileWriter fw = new FileWriter(counterFile);
                fw.write(String.valueOf(counter));
                fw.close();
            } catch (IOException e) {
                System.out.println("Something went wrong with the counter file.");
            }
        }

        return counter;
    }
}
