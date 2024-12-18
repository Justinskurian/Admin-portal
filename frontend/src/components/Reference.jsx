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
import { toast } from "react-toastify";

const Reference = () => {
  const location = useLocation();
  const [title,setTitle]=useState("")
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);

  const navigate = useNavigate();

   
 const submitImage=async(e)=>{

  e.preventDefault();
  const formData=new FormData();

  formData.append('title',title);
  formData.append('file',file);

    const result=await axiosInstance
        .post("http://localhost:3000/mentor/material/add", formData,
          {
            headers:{"Content-Type":"multipart/form-data"},
          }
        );
        if(result.data.status == "ok")
        {
          alert("uploaded succesfully");
          window.location.reload();
          getPdf()
        }

      }  ;
      const showPdf = (pdf) => {
        console.log(pdf)
        window.open(`http://localhost:3000/files/${pdf}`, "_blank", "noreferrer");
      };

      useEffect(() => {
   
        getPdf();
          
      }, []);
  const getPdf=async ()=>{
    
    const result=await axiosInstance
    .get("http://localhost:3000/mentor/material/get");
    console.log(result.data.data);

    setAllImage(result.data.data);

  };

  const click2 = (id) => {
    axiosInstance
      .delete(`http://localhost:3000/mentor/material/del/${id}`)

      .then(() => {
        alert("Deleted successfully");
        getPdf();
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
<form onSubmit={submitImage}>
      <center>
        <br />
        <br />
        <br />
        <br />
        <Typography  className="login">Reference Material</Typography>
        <br />
        <br />

        <TextField
          type="text"
          id="outlined-basic1"
          label="Title"
          variant="outlined"
          sx={{ width: "500px" }}
          onChange={(e) => 
            setTitle( e.target.value )
          }
        />
        <br />
        <br />
        <TextField
          type="file"
          inputProps={{accept:"application/pdf"}}
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "500px" }}

          onChange={(e) => 
            setFile(e.target.files[0] )
          }
        />
        <br />
        <br />
        <br />

        <Button className="button" type='submit'>
          submit
        </Button>
      </center>

      
      </form>
      <div style={{marginLeft:"500px"}}>
<h6 className="login"> Uploaded pdf</h6>
<div>
{allImage==null
?""
:allImage.map((data)=>{
  return(

<div>
  <h3 >
    {data.title}</h3>
<button className="button" onClick={()=>showPdf(data.file)}>Show pdf</button>
<button className="button" style={{ marginLeft: "30px"} } onClick={()=>click2(data._id)}>Delete</button>
</div>
  );
})}

</div>


      </div>
    </div>
  );
};

export default Reference;