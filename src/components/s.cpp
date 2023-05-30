#include <bits/stdc++.h>
using namespace std;

class Solution {
private:
    string toRomanDigit(int n){
        switch(n){
            case 1: return "I"; break;
            case 2: return "II"; break;
            case 3: return "III"; break;
            case 4: return "IV"; break;
            case 5: return "V"; break;
            case 6: return "VI"; break;
            case 7: return "VII"; break;
            case 8: return "VIII"; break;
            case 9: return "IX"; break;
            case 10: return "X"; break;
            case 20: return "XX"; break;
            case 30: return "XXX"; break;
            case 40: return "XL"; break;
            case 50: return "L"; break;
            case 60: return "LX"; break;
            case 70: return "LXX"; break;
            case 80: return "LXXX"; break;
            case 90: return "XC"; break;
            case 100: return "C"; break;
            case 200: return "CC"; break;
            case 300: return "CCC"; break;
            case 400: return "CD"; break;
            case 500: return "D"; break;
            case 600: return "DC"; break;
            case 700: return "DCC"; break;
            case 800: return "DCCC"; break;
            case 900: return "CM"; break;
            case 1000: return "M"; break;
        }
        return "";
    }

    string appendMany(string str, string item, int freq){
        int i=0;
        for(i=0; i<freq; i++){
            str += item;
        }
        return str;
    }
public:
    string intToRoman(int num) {
        string roman="";
        
        int firstDigit = num / 1000;
        appendMany(roman, toRomanDigit(1000), firstDigit);

        num -= firstDigit*1000;
        firstDigit = num / 100;
        roman += toRomanDigit(firstDigit*100);

        num -= firstDigit*100;
        firstDigit = num / 10;
        roman += toRomanDigit(firstDigit*10);

        num -= firstDigit*10;
        firstDigit = num % 10;
        roman += toRomanDigit(firstDigit);

        return roman;
    }
};

int main() {
    Solution s;
    cout << s.intToRoman(1994) << endl;
    return 0;
}