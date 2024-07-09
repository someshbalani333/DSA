
public class Factorial {
    public static int findFactorial(int n) {
        int res = 1;
        while(n > 0) {
            res *= n;
            n--;
        }
        return res;
    }
    public static void main(String[] args) {
        System.out.println(findFactorial(5));
    }
}
