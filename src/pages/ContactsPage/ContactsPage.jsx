import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

import { Box, Container } from "@mui/material";
import { Toaster } from "react-hot-toast";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const [editContact, setEditContact] = useState(null);

  const handleEditContact = (contact) => {
    formRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    setEditContact(contact);
  };

  const formRef = useRef(null);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          py: 5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <ContactForm
          editContact={editContact}
          handleEditContact={handleEditContact}
          formRef={formRef}
        />
        <Box sx={{ flex: 1 }}>
          <SearchBox />
          <ContactList handleEditContact={handleEditContact} />
        </Box>
      </Box>
      <Toaster />
    </Container>
  );
};

export default ContactsPage;
