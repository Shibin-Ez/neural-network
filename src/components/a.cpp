#include <iostream>
using namespace std;

int main() {
    string newStr="", str = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.";
    int i;
    for(i=0; str[i]!='\0'; i++){
        if(str[i] > 'z' || str[i] < 'a'){
            newStr += str[i];
        } else if (str[i]== 'y'){
            newStr += 'a';
        } else if (str[i]== 'z'){
            newStr += 'b';
        } else {
            newStr += (str[i] + 2);
        }
    }

    cout<<newStr<<endl; 
}   