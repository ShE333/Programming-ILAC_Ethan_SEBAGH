
public class CustomExc extends Exception{
    public CustomExc(){
        this("This value is off range [1 10].");
    }
    public CustomExc(String msg){
        super(msg);
    }
}
