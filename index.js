// Your code here
// defines saturdayFun function declaration as specified
function saturdayFun(activity= "roller-skate"){

    return(`This Saturday, I want to ${activity}!`)
}
activity();
activity("bathe my dog")

// defines mondayWork function expression as specified
function mondayWork (mondayTask = "go to the office"){
    return (`This Monday, I will ${mondayTask}.`)
}
mondayWork ();
mondayWork("work from home");

//defines wrapAdjective function according to the specification
 function wrapAdjective (style = "*") {
    return function (somethingNice = "special"){
        return (`You are ${style}${somethingNice}${style}!`)
    }
}