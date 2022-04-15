import { useEffect, useState } from "react"

export default function Fetcher() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleClick();
  }, [])

  function handleClick() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => { return response.json() })
      .then((resJson) => {
        setUsers(resJson.data);
      })
  }

  return (
    <div>
      {/* <button onClick={() => { handleClick() }}>get users</button> */}

      {users.map((user, index) => {
        return (<div>{user.first_name} {user.last_name}</div>)
      })}
    </div>
  )
}