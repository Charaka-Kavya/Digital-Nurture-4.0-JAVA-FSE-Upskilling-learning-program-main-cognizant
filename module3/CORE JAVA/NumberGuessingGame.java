import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random rand = new Random();
        int number = rand.nextInt(100) + 1;  // random number 1-100
        Scanner scanner = new Scanner(System.in);
        int guess = 0;

        System.out.println("Guess a number between 1 and 100:");

        while (guess != number) {
            System.out.print("Enter your guess: ");
            guess = scanner.nextInt();

            if (guess < number)
                System.out.println("Too low! Try again.");
            else if (guess > number)
                System.out.println("Too high! Try again.");
            else
                System.out.println("Congratulations! You guessed it.");
        }

        scanner.close();
    }
}
