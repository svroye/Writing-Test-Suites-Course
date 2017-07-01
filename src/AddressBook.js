function AddressBook(){
	this.contacts= [];
	this.addContact = addNewContact;
	this.getContact = getContactAtIndex;
}


function addNewContact(contact){
	this.contacts.push(contact);
}

function getContactAtIndex(index){
	return this.contacts[index];
}

