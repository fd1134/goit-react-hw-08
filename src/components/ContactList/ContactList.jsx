import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map((item) => (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
