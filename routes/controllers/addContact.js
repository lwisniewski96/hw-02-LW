const addContact = (newContact) => {
  const id = generateUniqueId();
  const contactWithId = { ...newContact, id };

  contacts.push(contactWithId);

  return contactWithId;
};

const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

module.exports = addContact;
