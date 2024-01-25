import React from "react";

import AddContact from "../AddConatct";
import ContactList from "../ContactList";
import ContactDetail from "../DetailsContact";
import EditContact from "../EditContact";
import Home from "../Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/addcontact",
    element: <AddContact />,
  },
  {
    id: 3,
    path: "/contactlist",
    element: <ContactList />,
  },
  {
    id: 4,
    path: "/contactdetails",
    element: <ContactDetail />,
  },
  {
    id: 4,
    path: "/editcontact",
    element: <EditContact />,
  },
  {
    id: 5,
    path: "/signup",
    element: <SignUp />,
  },
  {
    id: 6,
    path: "/signin",
    element: <SignIn />,
  },
];

export default routes;
