const express = require("express");
const router = express.Router();
const Joi = require("joi");
const listContacts = require("../controllers/listContacts");
const getContactById = require("../controllers/getContactById");
const addContact = require("../controllers/addContact");
const deleteContact = require("../controllers/deleteContact");
const updateContact = require("../controllers/updateContact");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: `Validation error: ${error.message}` });
    }

    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", deleteContact);

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: `Validation error: ${error.message}` });
    }

    const result = await updateContact(req.params.contactId, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
