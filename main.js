let pname1 = document.getElementById("person1name");
let pname2 = document.getElementById("person2name");


// Variables to store the player names dynamically
let Name1 = "Player 1";
let Name2 = "Player 2";

// Listen for changes in the textboxes and update the player names dynamically
person1name.addEventListener("input", () => {
    Name1 = pname1.value || "Player 1"; // Default to "Player 1" if empty
});

person2name.addEventListener("input", () => {
    Name2 = pname2.value || "Player 2"; // Default to "Player 2" if empty
});

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let result = document.getElementById("result");

// first chance is "X"
let chance = "X";
let gameOver = false; // Flag to track if the game is over

// changing the chance to others
function change_chance()
{
	if(chance == "X")
		chance = "O";
	else
		chance = "X";
}

//function to check the win
function checkwin()
{
	if((btn1.innerText === btn2.innerText && btn1.innerText === btn3.innerText && btn1.innerText!=="") ||
		(btn4.innerText === btn5.innerText && btn4.innerText === btn6.innerText && btn4.innerText!=="")||
		(btn7.innerText === btn8.innerText && btn7.innerText === btn9.innerText && btn7.innerText!=="")||
		(btn1.innerText === btn5.innerText && btn5.innerText === btn9.innerText && btn1.innerText!=="")||
		(btn3.innerText === btn5.innerText && btn5.innerText === btn7.innerText && btn3.innerText!=="")||
        (btn1.innerText === btn4.innerText && btn4.innerText === btn7.innerText && btn1.innerText!=="")||
        (btn2.innerText === btn5.innerText && btn5.innerText === btn8.innerText && btn2.innerText!=="")||
        (btn3.innerText === btn6.innerText && btn6.innerText === btn9.innerText && btn3.innerText!==""))
	{
		if(chance === 'X')
		{
			result.innerText = `${Name1} is winner`;
		}
		else
		{
			result.innerText = `${Name2} is winner`;
		}
		gameOver = true; // Set game over flag to true
		disableButtons(); // Disable all buttons
	}
	else if (
        btn1.innerText !== "" &&
        btn2.innerText !== "" &&
        btn3.innerText !== "" &&
        btn4.innerText !== "" &&
        btn5.innerText !== "" &&
        btn6.innerText !== "" &&
        btn7.innerText !== "" &&
        btn8.innerText !== "" &&
        btn9.innerText !== ""
    ) {
        result.innerText = "Match Draw..!";
        gameOver = true;
    }
}
function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
}

btn1.onclick = function(){
	if(btn1.innerText==="")
	{
	btn1.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn2.onclick = function(){
	if(btn2.innerText==="")
	{
	btn2.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn3.onclick = function(){
	if(btn3.innerText==="")
	{
	btn3.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn4.onclick = function(){
	if(btn4.innerText==="")
	{
	btn4.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn5.onclick = function(){
	if(btn5.innerText==="")
	{
	btn5.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn6.onclick = function(){
	if(btn6.innerText==="")
	{
	btn6.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn7.onclick = function(){
	if(btn7.innerText==="")
	{
	btn7.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn8.onclick = function(){
	if(btn8.innerText==="")
	{
	btn8.innerText = chance;
	checkwin();
	change_chance();
	}
};
btn9.onclick = function(){
	if(btn9.innerText==="")
	{
	btn9.innerText = chance;
	checkwin();
	change_chance();
	}
};


