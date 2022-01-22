const UsersList = ({ users }) => {
    if (users.length > 0) {
      return (
        <ul className="">
          {users.map(user => <li className="border-b border-stone-500 border-opacity-50 last:border-b-0 p-4 text-white" key={user}>{user}</li>)}
        </ul>
      );
    }
  
    return (
      <p className="p-4">No results!</p>
    );
  };

export default UsersList;