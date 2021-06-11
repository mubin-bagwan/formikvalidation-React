import React,{useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


const columns = [
    { id: 'id', label: 'id', minWidth: 170 },
    { id: 'first_name', label: 'First_Name', minWidth: 100 },
    {
      id: 'last_name',
      label: 'Last_Name',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'gender',
      label: 'Gender',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'ip_address',
        label: 'IP_ADDRESS',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
  ];

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    search:{
        marginTop:"50px",
        marginBottom:"50px",
        textAlign:"center"
    }
  });
  

export default function ServerData(){

    const [data,setData]=useState([]);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [q,setQ]=useState("");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    useEffect(()=>{
        fetch(`http://localhost:3000/user_info`)
        .then((response)=>response.json())
        .then((json)=>setData(json))
    },[])

    // console.log(q);

    function search(rows){
        return rows.filter((row)=> 
        row.first_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
        row.last_name.toLowerCase().indexOf(q.toLowerCase()) > -1  ||
        row.email.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
        row.gender.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
        row.ip_address.toLowerCase().indexOf(q) > -1
        )
    }

return(
    <Paper className={classes.root}>
    <TextField 
        className={classes.search}
        id="outlined-basic" 
        label="Search Here" 
        placeholder="Search For Name"
        variant="outlined"
        fullWidth
        value={q}
        onChange={(e)=>setQ(e.target.value)}
    />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {search(data).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
)
}