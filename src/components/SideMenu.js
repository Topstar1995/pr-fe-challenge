import React from 'react'
import { FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { useDepartmentFilter } from '../context/DepartmentFilterContext';
import * as employeeService from '../services/employeeService';
import { Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053'
  },
  filterSelect: {
    color: "#FFF",
    marginTop: "250px",
    marginLeft: "20px",
    marginRight: "20px",
    color: "#FFF",
    borderColor: "#FFF",
    "& .MuiInputBase-root": {
      color: "#FFF"
    },
    "& .MuiFormLabel-root": {
      color: "#FFF"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF"
    }
  }
});

export default function SideMenu() {
  const { departmentFilter, setDepartmentFilter } = useDepartmentFilter();

  const classes = useStyles()
  const handleInputChange = (e) => {
    setDepartmentFilter(e.target.value);
  }
  return (
    <div className={classes.sideMenu}>
      <FormControl className={classes.filterSelect} variant='outlined'>
        <InputLabel>Department</InputLabel>
        <Select
          label="Department"
          value={departmentFilter}
          onChange={handleInputChange}
          color="primary"
          variant='outlined'
        >
          <MenuItem value=''>None</MenuItem>
          {employeeService.getDepartmentCollection()?.map((item) => (
            <MenuItem key={item.departmentId} value={item.departmentId}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
