import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchContacts } from "../src/redux/contactsOps";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { selectError, selectLoading } from "./redux/contactsSlice";
import HomePage from "./pages/HomePage/HomePage";
import { AppBar } from "./components/AppBar/AppBar";

function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  {
    if (isLoading) return "Loading...";
  }
  {
    if (error) return "Erorr...  " + error;
  }

  return (
    <>
    <AppBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
     {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />*/}
    </>
  );
}

export default App;
