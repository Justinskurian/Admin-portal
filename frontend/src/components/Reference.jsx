import {
  AppBar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinterceptors";

const Reference = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    title: "",
    file: "",
  });
  useEffect(() => {
    if (location.state != null) {
      setForm({
        ...form,
        title: location.state.val.title,
        file: location.state.val.file,
      });
    } else {
      setForm({ ...form, title: "", file: "" });
    }
  }, []);
  const navigate = useNavigate();

  function click1() {
    console.log(form);
    if (location.state == null) {
      axiosInstance
        .post("http://localhost:3000/mentor/material/add", form)

        .then((res) => {
          alert(res.data);
          window.location.reload();
          navigate("/reference");

          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/mentor/material/get", data)

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const click2 = (id) => {
    axiosInstance
      .delete(`http://localhost:3000/mentor/material/del/${id}`)

      .then(() => {
        window.location.reload();
        navigate("/reference");

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            marginTop: "1%",
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <div className="logo">
              <img
                src="src/images/logo.jpg"
                alt="Logo"
                className="logo-image"
              />
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  color: "#0099cc",
                  fontWeight: 600,
                  fontSize: "2.1rem",
                  textAlign: "left",
                  marginTop: "5px",
                  lineHeight: "1.1",
                }}
              >
                ICTAK
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "1.1rem",
                  textAlign: "left",
                }}
              >
                PROJECT PORTAL
              </Typography>
            </Box>
            <Link to={"/login"}>
              <Button className="button">Logout</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <center>
        <br />
        <br />
        <br />
        <br />
        <Typography className="login">Reference Material</Typography>
        <br />
        <br />

        <TextField
          type="text"
          id="outlined-basic1"
          label="Title"
          variant="outlined"
          sx={{ width: "500px" }}
          value={form.title}
          onChange={(e) => {
            setForm({ ...form, title: e.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          type="file"
          accept="application/pdf"
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "500px" }}
          value={form.file}
          onChange={(e) => {
            setForm({ ...form, file: e.target.value });
          }}
        />
        <br />
        <br />
        <br />

        <Button className="button" onClick={click1}>
          submit
        </Button>
      </center>

      <TableContainer id="t1">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="right">File</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="right">{row.file}</TableCell>

                <Button
                  className="deleteButton"
                  onClick={() => click2(row._id)}
                >
                  Delete
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Reference;
