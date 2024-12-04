
// Character Check

function checkVowel() {
    let x = document.getElementById("input").value
    if (x == "") {
        alert("Enter a letter")
    } else {
        if (x == 'a' || x == "e" || x == "i" || x == "o" || x == 'u' || x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
            alert("This is a vowel");
        } else {
            alert("This is a consonent");
        }
    }
}

// Positive or Negative

function checkPosNos() {
    let x = document.getElementById("input1").value

    let x1 = parseInt(x);

    if (x1 > 0) {
        alert("Number is Positive");
    } else if (x1 == 0) {
        alert("Number is Zero");
    } else {
        alert("Number is Ngative");
    }
}

// Area of triangle

function checkAreaTriangle() {
    let x = document.getElementById("height").value
    let y = document.getElementById("length").value

    var z1 = ((1 / 2) * x * y);

    if (z1 > 0) {
        return alert(" Area of triangle is = " + z1 + " unitsquare ");
    } else {
        alert("Input cannot be Negative")
    }
}

// Percentage of Subjects

function checkPercentage() {
    let a = document.getElementById('sub1').value
    let b = document.getElementById('sub2').value
    let c = document.getElementById('sub3').value
    let d = document.getElementById('sub4').value
    let e = document.getElementById('sub5').value

    let a1 = parseInt(a);
    let b1 = parseInt(b);
    let c1 = parseInt(c);
    let d1 = parseInt(d);
    let e1 = parseInt(e);

    var per = ((a1 + b1 + c1 + d1 + e1) / 5);

    if (per >= 0 && a1 > 0 && b1 > 0 && c1 > 0 && d1 > 0 && e1 > 0) {
        return alert("Your overall percentage is " + per);
    } else {
        return alert("Input cannot be negative");
    }
}

// Simple Interest

function checkSimple() {
    let x = document.getElementById('principle').value
    let y = document.getElementById('years').value
    let z = document.getElementById('interest').value

    let x1 = parseFloat(x);
    let z1 = parseFloat(z);
    let y1 = parseFloat(y);

    //final principle amount
    var int1 = (x1 + (z1 / 100) * x1 * y1); // interest earned

    alert("Final Amount:" + (int1))
}

// Check Date Month Year 

function checkDate() {
    let x = document.getElementById('date').value
    let y = document.getElementById('month').value
    let z = document.getElementById('year').value

    let x1 = parseInt(x)
    let y1 = parseInt(y)
    let z1 = parseInt(z)

    if ((z1 > 2200 || z1 < 1900) || (x1 <= 0 || x1 > 31) || (y1 < 1 || y1 > 12)) {
        alert("Not Valid");
    } else {
        alert("Valid")
    }
}

// Compound Interest

function checkCompound() {
    var r = document.getElementById('interest1').value
    var t = document.getElementById('tenure').value
    var p = document.getElementById('principle1').value
    var n = document.getElementById('number1').value

    var nt = (n * t)
    var rn = ((r / 100) / n)
    // var rn = (r1 / n)/
    var xnt = (1 + rn)
    var com = Math.pow(xnt, nt)

    var final = (p * com)

    alert(" Final Amount: " + final);
}

// Reverse a Number

function checkReverse() {
    let rev = 0;
    let num = document.getElementById('revnum').value;
    let lastDigit;

    while (num != 0) {
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    alert("Reverse Number: " + rev)
}

// function checkReverse(){
//     let arr = document.getElementById("revnum").value
  
//     rev = arr.toString().split("").reverse().join("")
  
//     alert("Reverse Number: " + rev)
//   }

// Armstrong Number

function checkArmstrong() {
    let x = document.getElementById('arm').value;
    let c = x.toString().length;
    var sum = 0
    let temp = x;

    while (temp > 0) {
        var y = (temp % 10)
        sum += y ** c
        temp = parseInt(temp / 10);
    } if (sum == x) {
        alert('Number is Armstrong')
    } else {
        alert('Number is not armstrong')
    }
}

// Prime Number

function checkPrime() {
    //fetch number
    let x = document.getElementById('prime').value;
    //validation
    if (x <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    if (x == 1) {
        alert(" Prime Number.");
    }
    //flag

    var flag = 0
    var i = 2;

    do {
        if (x % i == 0) {
            flag = 1;
            break;
        }
        i++;
    } while (i <= x - 1);

    if (flag == 1) {
        alert("Not a Prime Number.")
    } else {
        alert("Prime Number.")
    }
}

function checkFib() {
    let x = document.getElementById('fib').value;
    let x1 = 0, x2 = 1, xn;
    let ans = []

    xn = x1 + x2;

    while (xn <= x) {

        x1 = x2;
        x2 = xn;
        xn = x1 + x2;

        ans.push(x2)

        document.getElementById("answer").innerHTML = ans;
    }
}

function checkGcd() {
    let GCD;
    let x = document.getElementById('gcd1').value;
    let y = document.getElementById('gcd2').value;

    for (i = 1; i <= x && i <= y; i++) {
        if (x % i == 0 && y % i == 0) {
            GCD = i
        }
    } alert(GCD);
}

function checkLcm() {
    let gcd;
    let x = document.getElementById("lcm1").value;
    let y = document.getElementById("lcm2").value;

    for (i = 1; i <= x && i <= y; i++) {
        if (x % i == 0 && y % i == 0) {
            gcd = i
        }
    }
    let lcm = (x * y) / gcd
    alert(lcm)
}

function checkPalin() {
    var str = document.getElementById("palindrome").value

    let rev = str.toString().split("").reverse().join("")
    // console.log(rev)

    let strVal = str.toString()

    if (strVal == rev) {
        alert("Palindrome")
    } else {
        alert("Not Palindrome")
    }
}

function convertMac() {
    var num = document.getElementById("mac").value
              
    var arr = []
              
    for ( var i = 0; i < num.length; i = i + 2){
        arr.push(num.substr(i, 2))
    } arr = arr.join(":")
              
    alert(arr)
  }

