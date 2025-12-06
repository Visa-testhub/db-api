function IsPalindrome(str)
{
	if (typeof str !== 'string')
	{
		return false;
	}

	let n = 0;
	while (n < str.length / 2)
	{
		// Added lovercase check to make it CI
		if (str.charAt(n).toLowerCase() !== str.charAt(str.length - n - 1).toLowerCase())
		{
			return false;
		}
		n++;
	}
	
	return true;
}

const rl = require('readline').createInterface(
{
	input: process.stdin,
	output: process.stdout
}
);

rl.question("Enter a string: ", str => 
{
	if (IsPalindrome(str))
	{
		console.log("The string is a palindrome.");
	}
	else
	{
		console.log("The string is not a palindrome.");
	}

	rl.close();
}
);