import java.util.ArrayList;
import java.util.stream.Collectors;

public class Main2 {

    public static void main(String[] args) {

        // CREATING THE LIST
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(5);
        numbers.add(8);
        numbers.add(14);
        numbers.add(11);
        numbers.add(2);
        System.out.println("Original list: " + numbers);

        // SORTING THE LIST USING STREAM
        System.out.println("\nLet's sort the list:");
        ArrayList<Integer> sorted = numbers.stream()
                .sorted()
                .collect(Collectors.toCollection(ArrayList::new));
        System.out.println("Sorted list: " + sorted);

        // LOOP THROUGH LIST AND CALCULATE THE SQUARE ROOTS
        System.out.println("\nLet's calculate the square roots:");
        sorted.stream()
                .forEach(num -> {
                    double sqrt = Math.sqrt(num);
                    System.out.println("Square root of " + num + " is " + sqrt);
                });

        // LOOKING FOR THE EVEN NUMBERS
        System.out.println("\nLet's sort the even numbers:");
        sorted.stream()
                .forEach(num -> {
                    if (num % 2 == 0) {
                        System.out.println("Even number: " + num);
                    }
                });
    }
}
