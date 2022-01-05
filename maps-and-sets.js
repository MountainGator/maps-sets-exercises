//What does the following code return?

// new Set([1,1,2,2,3,4]) // [1,2,3,4]

// What does the following code return?

// [...new Set("referee")].join("") // 'ref'

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// m looks like {[1,2,3] => true, [1,2,3] => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate (arr) {
    let check = new Set(arr);
    return check.size !== arr.length ? true : false;
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount (str) {
    const isVowel = (char) => {
        return 'aeiou'.indexOf(char) !== -1;
    }
    const lowercase = str.toLowerCase();
    const lowerArr = [...lowercase];
    const onlyVowels = lowerArr.filter((char) => isVowel(char));
    
    const vowCow = onlyVowels.reduce((acc,next) => {
        if (acc[next]){
        acc[next]++;
        } else {
            acc[next] = 1;
            }
            return acc;
        }, {});
    
    return vowCow;
}

