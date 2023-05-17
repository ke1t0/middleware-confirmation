const UserList = async () => {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.id}: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
