// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let i=0;
function timer()
{
    console.clear();
    i++;
    console.log(i);
    setTimeout(timer,10);
}
timer();