public class TypeCastingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d;  // double to int
        System.out.println("Double value: " + d);
        System.out.println("After casting to int: " + i);

        int x = 42;
        double y = (double) x;  // int to double
        System.out.println("Int value: " + x);
        System.out.println("After casting to double: " + y);
    }
}
