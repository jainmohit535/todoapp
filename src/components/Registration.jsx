class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <label>User Name</label>
        <input type="textbox" />
        <label>Password</label>
        <input type="password" />
        <input type="button" />
      </form>
    );
  }
}

export default UserRegistration;
