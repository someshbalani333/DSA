
public class Palindrome {

    public static boolean checkPalindrome(int n) {
      int num = n;
      int res = 0;
      while(num > 0) {
        int lastDigit = num%10;
        res = res*10 + lastDigit;
        num = num/10;
      }
      return (res == n);
    }

    public static void main(String[] args) {
        System.out.println(checkPalindrome(121));
        System.out.println(checkPalindrome(9873));
    }
}
