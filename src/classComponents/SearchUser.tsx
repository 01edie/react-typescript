import { Component, ReactNode } from "react";

interface User {
  name: string;
  age: number;
}

interface SearchUserProps {
  users: User[];
}

interface SearchUserStates {
  name: string;
  user: User | undefined;
}

class SearchUser extends Component<SearchUserProps> {
  state: SearchUserStates = {
    name: "",
    user: undefined,
  };
  search = (): void => {
    this.setState({user:this.props.users.find(e=>e.name===this.state.name)})
  }
  render(): ReactNode {
    const {name, user} = this.state
    return (
      <div>
        UserSearch
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({name:e.target.value})}
          />
          <div>
            <button onClick={this.search}>Search</button>
          </div>
        </div>
        <div>{user?.name ?? "No results found"}</div>
        <div>{user?.age}</div>
      </div>
    );
  }
}

export default SearchUser;
