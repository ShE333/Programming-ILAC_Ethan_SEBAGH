import java.util.Scanner;

public class Main {
    private static void getFactorial(int nmbr) throws CustomExc {
        int i;
        int fact = 1;

        if(nmbr<1 || nmbr > 10){
            throw new CustomExc();
        }
        for(i=1;i<=nmbr;i++){
            fact=fact*i;
        }
        System.out.println("Factorial of "+nmbr+" is: "+fact);
    }
    public static void main(String[] args) throws CustomExc {

        System.out.println("Enter an integer between 1 & 10:");

        Scanner input = new Scanner(System.in);
        int i = input.nextInt();

        getFactorial(i);
    }
}