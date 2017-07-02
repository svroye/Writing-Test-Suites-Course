describe('Address Book', function(){

	it('should be able to add a contact', function(){
		var addressBook = new AddressBook(),
			newContact = new Contact();

		addressBook.addContact(newContact);

		expect(addressBook.getContact(0)).toBe(newContact);
	});

	it('should be able to delete a contact', function(){
		var addressBook = new AddressBook(),
			newContact = new Contact();

		addressBook.addContact(newContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined();

	});
});