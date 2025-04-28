import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ item }) => {
  deleteContact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <div className={css.contactItem}>
      <div className={css.contactItem1}>
        <p>
          <FaUser className={css.icon} /> {item.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} /> {item.number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
