const getContactById = (contactId) => {
  const contact = contacts.find((c) => c.id === contactId);
  if (contact) {
    return contact;
  } else {
    throw new Error("Contact not found");
  }
};

module.exports = getContactById;
