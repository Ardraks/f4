import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import baseurl from '../../Api';
import { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Register from '../../pages/register/Register';





const UserView = () => {


 var[selected,setSelected]=useState()
 var[update,setUpdate]=useState(false)  
var [users,setUsers] = useState([]);


useEffect(()=>{
    axios.get(baseurl+'/register/registerview')
    .then(response =>{
console.log(response.data)
        setUsers(response.data) })
    .catch(err=>console.log(err))
},[])


const updatevalues = (value) =>{
    console.log("updated:",value)
    setSelected(value);
    setUpdate(true);
  }

  
const deleteValues=(id)=>{
    console.log("deleted",id)
    axios.put(baseurl+'/register/updatestatus/'+id)
    .then((response)=>{
    alert("Deleted")
    //to reload window
    window.location.reload(false);
    })}

    
  
 var result=
 <div>
<Typography variant='h5'>Userdetails</Typography><br></br>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
<TableRow>

<TableCell>username</TableCell>
<TableCell>email</TableCell>
<TableCell>password</TableCell>
<TableCell >Status</TableCell>
<TableCell>edit</TableCell>
<TableCell>delete</TableCell>

</TableRow>
</TableHead>
<TableBody>
{users.map((value,index)=>{
return(
<TableRow key={index}>
<TableCell>{value.username}</TableCell>
<TableCell>{value.email}</TableCell>
<TableCell>{value.password}</TableCell>
<TableCell>{value.status}</TableCell>
<TableCell><ModeEditIcon color='success'onClick={()=>updatevalues(users)}/></TableCell>
<TableCell><DeleteForeverIcon color='error'
onClick={()=>deleteValues(users._name)}/></TableCell>
</TableRow>
)
})}
</TableBody>
</Table>
</TableContainer>

  </div>


if(update)
result=<Register data={selected} method='put'/> 
return (result)
}
export default UserView