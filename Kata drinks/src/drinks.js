function drinks(age){
	age = parseInt(age, 10)
	var drink="";
	if (age<14){
		drink='Toddy';
	}
	else if(age<18){
		drink='Coke';
	}
	else if(age<21){
		drink='Beer';
	}
	else{
		drink='Whiskey';
	}
	return drink;
}