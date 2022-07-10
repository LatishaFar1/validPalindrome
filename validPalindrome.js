// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


function isValidPalindrome(s){
     // Return the value of the string converted to lower case.
    // Remove special symbols and extra spaces.
    let string = s.toLowerCase().replace(/[\W_]/g, "");
	
	// One pointer starts from the beginning. One pointer starts from the end.
    let pointer1 = 0;
    let pointer2 = string.length-1;
    
	// Compare two pointers.
    while(pointer1 < pointer2){
        if(string[pointer1]!==string[pointer2]){
            return false;
        } 
        pointer1++;
        pointer2--;
    }
    return true;

}