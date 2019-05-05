
function isPalindrome(s){
	s = s.toLowerCase();
	var chars = s.split('');
    for (i = 0; i < chars.length/2; i++) {
      if (chars[i] != chars[chars.length-(i+1)]) return false;
    }
	return true;
}

function isPalindrome2(s){
	s = s.toLowerCase();
	return (s == s.split('').reverse().join(''));
}

function isPalindrome3(s){
	s = s.toLowerCase();
	return (s.length < 2) ? true : s.charAt(0) == s.charAt(s.length-1) && isPalindrome3(s.substr(1,s.length-2));
}

console.log("John", isPalindrome("John"), isPalindrome2("John"), isPalindrome3("John"));
console.log("Hannah", isPalindrome("Hannah"), isPalindrome2("Hannah"), isPalindrome3("Hannah"));
console.log("Kiwik", isPalindrome("Kiwik"), isPalindrome2("Kiwik"), isPalindrome3("Kiwik"));