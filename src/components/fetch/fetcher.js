import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useEffect, useState } from "react"

export default function Fetcher() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleClick();
  }, [])

  function handleClick() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => { return response.json() })
      .then((resJson) => {
        setUsers(resJson.data);
      })
  }

  function handlePop(){
    var u = [...users];
    u.pop();
    setUsers(u);
  }

  function handePush(){
    var u = [...users];
    u.push({
      avatar: "",
      firstName: "Akash",
      email: "akash@gmail.com"
    })
    setUsers(u);
  }

  function handleSplice(){
    var u = [...users];
    var index = parseInt(prompt("enter the index you want to remove"));
    u.splice(index, 1);
    setUsers(u);
  }

  return (
    <div>
      {/* <button onClick={() => { handleClick() }}>get users</button> */}

      <List>
        {users.map((user, index) => {
          return (
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  variant="circular"
                  src={user.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={user.first_name}
                secondary={user.email}
              />
            </ListItem>
          )
        })}
      </List>

      <Button variant="contained" onClick={handlePop}>pop</Button>
      <Button variant="contained" onClick={handePush}>push</Button>
      <Button variant="contained" onClick={handleSplice}>splice</Button>
    </div>
  )
}