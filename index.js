import Contacts from "./contacts"
import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await Contacts.listContacts();
      console.table(allContacts);
      break; 
      // ...
      

    case "get":
      // ... id
      const oneContact = await Contacts.getContactById(id);
      console.log(oneContact);
      break;
    

    case "add":
      // ... name email phone
      const addNewContact = await Contacts.addContact(name, email, phone);
      console.log(addNewContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await Contacts.removeContact(id);
      console.log(deleteContact);
      break;

      default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);