package fi.skd.buttongame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Autowired
	ButtonGame buttonGame;

	@Autowired
	GameState gameState;

	@CrossOrigin
	@RequestMapping("/game")
	public GameState game() {
		buttonGame.play(gameState);
		return new GameState(gameState);
	}
}
