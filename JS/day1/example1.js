//Objects 
	john = {
	firstName : 'John',
	lastName : 'Paul'    
	};

	console.log(john);

	function Person( firstName, lastName ){
		this.firstName = firstName;
		this.lastName = lastName;

	}

	john = new Person( 'John', 'Smith' );

	console.log(john);

	mark = new Object();
	mark.nameFirst = 'Mark';
	mark.lastName = 'doe';

	console.log(mark);
		

		