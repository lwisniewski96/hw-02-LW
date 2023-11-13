const updateContact = (contactId, updatedFields) => {
  const index = contacts.findIndex((c) => c.id === contactId);
  if (index !== -1) {
    // Zaktualizuj pola kontaktu
    contacts[index] = { ...contacts[index], ...updatedFields };

    // Zwróć zaktualizowany kontakt
    return contacts[index];
  } else {
    throw new Error("Contact not found");
  }
};

module.exports = updateContact;
