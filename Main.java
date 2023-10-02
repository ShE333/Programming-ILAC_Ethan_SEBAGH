import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static int AvgArray (String myStr) {
        String[] StrArray = myStr.split(" ");
        ArrayList<Integer> intList = new ArrayList<>();
        for (String number : StrArray) {
            intList.add(Integer.parseInt(number));
        }
        int total = 0;
        for (int number : intList) {
            total += number;
        }

        return total / intList.size();
    }


    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a list of integer :");
        String userInput = input.nextLine();
        int average = AvgArray(userInput);
        System.out.println("Average of the list: " + average);
    }
}