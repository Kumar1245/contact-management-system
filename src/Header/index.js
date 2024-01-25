import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setState } from "../../Redux/Actions/State";
// import { setUserData } from "../../Redux/Actions/UserData";
// import { axiosInstance } from "../../Config/axio";
const Header = () => {
  const [open, setOpen] = useState(false);
  //   const dispatch = useDispatch();

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  //   const [profile, setProfile] = useState({});
  //   const [search, setSearch] = useState("");
  //   const [products, setProducts] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = () => {};
  const handleClose = () => {
    setAnchorEl(null);
  };

  const token = localStorage.getItem("token");

  //   const profileData = async () => {
  //     await axios
  //       .get(`https://api-eduvila.onrender.com/profile?token=${token}`)
  //       .then((res) => {
  //         setProfile(res?.data?.[0]);
  //         dispatch(setUserData(res?.data?.[0]));
  //       })
  //       .catch((error) => {
  //         alert("Data error");
  //       });
  //   };

  //   const searchProduct = () => {
  //     axiosInstance.get(`products/search?q=${search}`).then((res) => {
  //       setProducts(res.data.products);
  //     });
  //   };

  //   useEffect(() => {
  //     search !== "" && searchProduct();
  //   }, [search]);
  //   // const state = useSelector((state) => state.state);

  //   const userData = useSelector((state) => state.userData);

  // console.log(state, "Mkx");
  //   console.log(userData, "Mkx2");

  //   useEffect(() => {
  //     localStorage.getItem("token") && profileData();
  //   }, [localStorage.getItem("token")]);

  // useEffect(() => {
  //   dispatch(setState({ name: "Pankaj" }));
  // }, []);
  //   console.log(typeof search, "search");

  //   const handleLogout = () => {
  //     localStorage.clear();
  //     handleClose();
  //     navigate("/signin");
  //     setProfile({});
  //     dispatch(setUserData({}));
  //     dispatch(setState(false));
  //   };
  return (
    <>
      <div className=" lg:flex md:flex hidden justify-between gap-3 p-4  bg-orange-700">
        <span>
          <img
            src="https://png.pngtree.com/png-vector/20210430/ourmid/pngtree-online-video-conferencing-page-illustration-png-image_3250577.png"
            alt=""
            className="h-20 rounded-lg"
          />
        </span>

        <span className="p-4">
          <input
            type="text"
            placeholder="Serach By Contact.."
            value=""
            className="border w-96 p-2  outline-green-400 rounded-lg"
            onChange={(event) => handleChange(event.target.value)}
          />
          {/* {search?.length !== 0 && (
            <List className="!absolute !z-50 !w-96 border bg-white">
              {products?.map((i) => {
                return (
                  <ListItemButton
                    onClick={() => {
                      navigate(`/productdetail/${i.id}`);
                      setSearch("");
                    }}
                  >
                    <img src={i.thumbnail} alt="" className="h-10 w-10" />
                    {i.title}
                  </ListItemButton>
                );
              })}
            </List>
          )} */}
        </span>
        <span className=" flex items-center gap-3 p-4 ">
          <p className="cursor-pointer text-xl text-white hover:text-green-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-2">
            <Link to="/">Home</Link>
          </p>
          <p className="cursor-pointer text-xl text-white hover:text-green-500   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-2 ">
            <Link to="/addcontact">AddContact</Link>
          </p>
          <p className="cursor-pointer text-xl text-white hover:text-green-500  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-2">
            <Link to="/contactlist">ContactList</Link>
          </p>
          <p className="cursor-pointer text-xl text-white hover:text-green-500  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-2">
            {localStorage.getItem("token") ? (
              <Avatar alt="" src="b" onClick={handleClick} />
            ) : (
              <Link to="/signup">SignUp</Link>
            )}
          </p>
        </span>
      </div>
      {/* <div className=" lg:flex md:flex hidden  mx-14 border items-center ">
        <span className="bg-green-400 w-48 p-2">Shop By Categories</span>

        <span className="flex hover:bg-green-600 h-10 text-lg pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          Offer
        </span> */}
      {/* </div> */}
      <div className=" flex  lg:hidden md:hidden justify-between gap-3 p-4 bg-orange-700">
        <span>
          <img
            src="https://png.pngtree.com/png-vector/20210430/ourmid/pngtree-online-video-conferencing-page-illustration-png-image_3250577.png"
            alt=""
            className="h-14 rounded-lg "
          />
        </span>
        <MenuIcon
          onClick={() => setOpen(true)}
          className="text-white text-lg"
        />
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>About Us</ListItemButton>

          <ListItemButton>Contact Us</ListItemButton>
          <ListItemButton>Services</ListItemButton>
        </List>
      </Drawer>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ListItem className="!flex !outline-none !flex-col !w-60 !gap-3">
          <Avatar alt="" src="b" />
          <p>Pankaj</p>
          <p>pankajsingh471999@gmail.com</p>
        </ListItem>
        <MenuItem onClick={() => navigate("/")}>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      {/* <div className="flex flex-col justify-center pt-4 border gap=[-16px] "> */}
      {/* <img
          alt=""
          src={`https://source.unsplash.com/random/900x700/?fruit/${image}`}
          className="h-96 w-full"
        />
        <div className="flex gap-2 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <img
                alt=""
                src={`https://source.unsplash.com/random/900x700/?fruit/${i}`}
                className="h-16 w-16"
                // onClick={() => setImage(i)}
              />
            );
          })}
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Header;
