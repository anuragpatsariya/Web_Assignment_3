/* jshint browser:true */
/* globals _ */
/*----------------------------( Exercise 1 )---------------------------------------------------*/
var excercise1 = function(nums) {
    "use strict";
    var sum = 0,
        avg = 0,
        len = nums.length,
        i;
    for (i = 0; i < len; i++) {
        sum += nums[i];
    }
    avg = sum / len;
    return avg;
};

(function() {
    "use strict";
    document.getElementById("exercise1").innerHTML += "<strong><em>Exercise 1</em></strong><br> The average of the array=[2, 3, 4, 5] is: <strong>" + excercise1([2, 3, 4, 5]).toString() + "</strong>";
})();

/*----------------------------( Exercise 2 )---------------------------------------------------*/
var excercise2 = function(nums) {
    "use strict";
    var largest = -Infinity,
        len = nums.length,
        i;

    for (i = 0; i < len; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
};

(function() {
    "use strict";
    document.getElementById("exercise2").innerHTML += "<strong><em>Exercise 2</em></strong><br> The maximum element in array=[3, 4, 6, 98, 12, 6] is: <strong>" + excercise2([3, 4, 6, 98, 12, 6]).toString() + "</strong>";
})();

//using underscore.js
var us_excercise2 = function(nums) {
    "use strict";
    return _.max(nums);
};

(function() {
    "use strict";
    document.getElementById("exercise2").innerHTML += " </br><em> Using underscore.js: </em><strong>" + us_excercise2([3, 4, 6, 98, 12, 6]).toString() + "</strong>";
})();

/*-----------------------------( Exercise 3 )-----------------------------------------------------*/
var excercise3 = function(nums) {
    "use strict";
    var i,
        len = nums.length;
    for (i = 0; i < len; i++) {
        if (nums[i] % 2 === 0) {
            return true;
        }

    }
    return false;
};
(function() {
    "use strict";
    document.getElementById("exercise3").innerHTML += "<strong><em>Exercise 3</em></strong><br> The array=[5, 77, 99, 87, 66, 57, 23] contains atleast a even number is: <strong>" + excercise3([5, 77, 99, 87, 66, 57, 23]).toString() + "</strong>";
})();

//using underscore.js
var us_excercise3 = function(nums) {
    "use strict";
    return _.some(nums, function(n) {
        return n % 2 === 0;
    });
};
(function() {
    "use strict";
    document.getElementById("exercise3").innerHTML += "</br><em> Using underscore.js: </em><strong>" + us_excercise3([5, 77, 99, 87, 66, 57, 23]).toString() + "</strong>";
})();
/*--------------------------------( Exercise 4 )---------------------------------------------------*/
var excercise4 = function(nums) {
    "use strict";
    var i,
        len = nums.length;
    for (i = 0; i < len; i++) {
        if (nums[i] % 2 !== 0) {
            return false;
        }

    }
    return true;
};
(function() {
    "use strict";
    document.getElementById("exercise4").innerHTML += "<strong><em>Exercise 4</em></strong><br> The array=[52, 772, 992, 872, 66, 5712, 24] contains all even number is: <strong>" + excercise4([52, 772, 992, 872, 66, 5712, 24]).toString() + "</strong>";
})();

//using underscore.js
var us_excercise4 = function(nums) {
    "use strict";
    return _.every(nums, function(n) {
        return n % 2 === 0;
    });
};
(function() {
    "use strict";
    document.getElementById("exercise4").innerHTML += "</br><em> Using underscore.js: </em><strong>" + us_excercise4([52, 772, 992, 872, 66, 5712, 24]).toString() + "</strong>";
})();
/*----------------------------------( Exercise 5 )------------------------------------------------------*/
var arrayContains = function(arr_str, str) {
    "use strict";
    var i;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            return true;
        }
    }
    return false;
};
(function() {
    "use strict";
    document.getElementById("exercise5").innerHTML += "<strong><em>Exercise 5</em></strong><br> The array=[\"hello\", \"world\", \"wide\", \"web\"] contains \"wide\" is: <strong>" + arrayContains(["hello", "world", "wide", "web"], "wide").toString() + "</strong>";
})();
/*---------------------------------( Exercise 6 )--------------------------------------------------------*/
var arrayContainsTwo = function(arr_str, str) {
    "use strict";
    var i;
    var count = 0;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            count = count + 1;
            if (count >= 2) {
                return true;
            }
        }
    }
    return false;
};
(function() {
    "use strict";
    document.getElementById("exercise6").innerHTML += "<strong><em>Exercise 6<br>Part 1: </em></strong> The array=[\"hello\", \"abc\", \"web\", \"web\"] contains \"web\" atleast two times is: <strong>" + arrayContainsTwo(["hello", "abc", "web", "web"], "web").toString() + "</strong>";
})();


//Now for three count
var arrayContainsThree = function(arr_str, str) {
    "use strict";
    var i;
    var count = 0;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            count = count + 1;
            if (count >= 3) {
                return true;
            }
        }
    }
    return false;
};
(function() {
    "use strict";
    document.getElementById("exercise6").innerHTML += "<br><strong><em>Part 2: </em></strong> The array=[\"hello\", \"web\", \"web\", \"web\"] contains \"web\" atleast three times is: <strong>" + arrayContainsThree(["hello", "web", "web", "web"], "web").toString() + "</strong>";
})();

//Now for N  count
var arrayContainsNTimes = function(arr_str, str, n) {
    "use strict";
    var i;
    var count = 0;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            count = count + 1;
        }
    }
    if (count === n) {
        return true;
    }
    return false;

};
(function() {
    "use strict";
    document.getElementById("exercise6").innerHTML += "<br><strong><em>Part 3: </em></strong> The array=[\"hello\", \"web\", \"web\", \"web\"] contains \"web\" n=4 times is: <strong>" + arrayContainsNTimes(["world", "web", "web", "web"], "web", 4).toString() + "</strong>";
})();