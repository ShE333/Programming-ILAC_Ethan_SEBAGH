import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        // CREATING THE LIST
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(5);
        numbers.add(8);
        numbers.add(14);
        numbers.add(11);
        numbers.add(2);
        System.out.println("Original list: " + numbers);

        // SORTING THE LIST
        System.out.println("\nLet's sort the list:");
        Collections.sort(numbers);
        System.out.println("Sorted list: " + numbers);

        // LOOP THROUGH LIST AND CALCULATE THE SQUARE ROOTS
        System.out.println("\nLet's calculate the square roots:");
        for (int i = 0; i < numbers.size(); i++) {

            int num = numbers.get(i);
            double sqrt = Math.sqrt(num);
            System.out.println("Square root of " + num + " is " + sqrt);

        }

        // LOOKING FOR THE EVEN NUMBERS
        System.out.println("\nLet's sort the even numbers:");
        for (int i = 0; i < numbers.size(); i++) {

            int num = numbers.get(i);
            if (num % 2 == 0) {
                System.out.println("Even number: " + num);
            }
        }
    }
}
