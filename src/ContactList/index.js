import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Tabledata } from "../Mock";
import { useNavigate } from "react-router-dom";

const contacts = [
  { id: 1, name: "John Doe", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", phone: "987-654-3210" },
  // Add more contacts as needed
];

const ContactList = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <img
          src="https://www.zucol.in/assets/img/img/Logo_blue.png"
          alt=""
          srcset=""
          className="fixed w-full opacity-15 "
        />
        <div className="bg-white mx-14 ">
          <p className="flex justify-center items-center pt-3 font-bold text-2xl text-red-300">
            All Contact List
          </p>
          <div className="pt-5">
            <TableContainer
              component={Paper}
              className="!p-4 bg-white shadow-md h-[64%] !overflow-x-scroll overflow-y-scroll max-h-screen"
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead
                  className=" !bg-opacity-80"
                  style={{
                    background: "linear-gradient(90deg ,#CFEDFB, #F1EBFF)",
                  }}
                >
                  <TableRow className="">
                    <TableCell>Sr No.</TableCell>
                    <TableCell>Fisrt Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Mobile Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>View Detail</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Tabledata.map((i) => (
                    <TableRow
                      key={i.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i.id}
                      </TableCell>

                      <TableCell>{i.Apply} </TableCell>
                      <TableCell>{i.Candidate} </TableCell>
                      <TableCell>{i.Mobile} </TableCell>
                      <TableCell>{i.Qualification}</TableCell>
                      <TableCell>{i.address}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="info"
                          size="small"
                          onClick={() => {
                            navigate("/contactdetails");
                          }}
                        >
                          view
                        </Button>
                      </TableCell>

                      <TableCell className="!text-blue-400 cursor-pointer">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={handleClickOpen}
                        >
                          {i.Edit}
                        </Button>
                      </TableCell>
                      <TableCell className="!text-red-600 cursor-pointer">
                        <Button
                          variant="contained"
                          color="warning"
                          size="small"
                        >
                          {i.Delete}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        className=" flex justify-center items-center !w-full !h-96"
        PaperProps={{ className: "w-[600px] h-[240px]" }}
      >
        <DialogTitle className="flex items-center justify-between">
          <h1 className="text-[#CC3484] font-bold"> Update Contact</h1>
          <CloseIcon
            onClick={handleClose}
            className="!rounded-full   bg-[#01A5E8] text-white"
          />
        </DialogTitle>
        <DialogContent className="!p-4">
          <FormControl fullWidth className="!p-4">
            <InputLabel
              id=""
              className="!flex !justify-center !tems-center !p-4"
            >
              <TextField
                id=""
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </InputLabel>
          </FormControl>
        </DialogContent>
        <DialogActions className="flex !px-8  !justify-between !items-center">
          <Button
            variant="contained"
            className="bg-gradient-to-r from-[#FC585C] to-[#CC3484] !text-white"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            save
          </Button>
          <Button
            variant="conatined"
            color="primary"
            className="bg-gradient-to-r from-[#0077E1] to-[#0092E5] !text-white"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactList;
