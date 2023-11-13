const deleteContact = (contactId) => {
  const index = contacts.findIndex((c) => c.id === contactId);
  if (index !== -1) {
    const deletedContact = contacts.splice(index, 1)[0];
    return { message: "Contact deleted", deletedContact };
  } else {
    throw new Error("Contact not found");
  }
};

module.exports = deleteContact;
