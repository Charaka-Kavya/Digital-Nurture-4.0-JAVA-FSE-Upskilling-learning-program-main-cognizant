public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2;  // multiplication first, then addition
        System.out.println("Result of 10 + 5 * 2 = " + result);

        int result2 = (10 + 5) * 2; // parentheses change precedence
        System.out.println("Result of (10 + 5) * 2 = " + result2);
    }
}
