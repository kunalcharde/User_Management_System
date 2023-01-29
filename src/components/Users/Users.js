import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Users.css"
import { axiosClient } from "../../axiosClient";
import { ADD_USERS_LIST } from "../../store/actions";
import CustomizedTables from "../ui/Table/Table";
const Users = () => {
  const [collection, setCollection] = useState([]);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosClient.get("users?page=1").then((resp) => {
      dispatch({ type: ADD_USERS_LIST, payload: resp.data });
      setCollection(resp?.data?.data);
    });
  }, []);

  const tableData = [
    [
      "ID",
      (item) => {
        return item.id;
      },
    ],
    [
      "Email",
      (item) => {
        return item.email;
      },
    ],
    [
      "First Name",
      (item) => {
        return item.first_name;
      },
    ],
    [
      "Last Name",
      (item) => {
        return item.last_name;
      },
    ],
  ];

  const handleFiltersChange = (e) => {
    const {value } = e.target;
    let newCollection = [...collection];
        if(value===""){
            setCollection(collection)
        }
        else{
            newCollection = collection.filter((dataRow,idx) => dataRow.id === parseInt(value)).map((dataRow) => dataRow);
            setCollection(newCollection);
        }
  };

  return (
    <div>
        <div className="input-serach">
            <input placeholder="Search" className="input" onChange= {handleFiltersChange}/>
        </div>
      <CustomizedTables collection={collection}/>
    </div>
  );
};

export default Users;