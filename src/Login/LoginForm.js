import React from 'react';
import { connect } from 'react-redux';
import { startSetToken, clearToken } from './CredentialActions';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      error: ''
    };
    this.onIdChange = this.onIdChange.bind(this);
    this.onPwChange = this.onPwChange.bind(this);
    this.login      = this.login.bind(this);
    this.logout     = this.logout.bind(this);
  };

  onIdChange(evt) {
    const id = evt.target.value;
    this.setState(() => ({ id }));
  }

  onPwChange(evt) {
    const pw = evt.target.value;
    this.setState(() => ({ pw }));
  }

  login(evt) {
    this.props.startSetToken(this.state.id, this.state.pw);
    console.log(`Login with id ${this.state.id}/${this.state.pw}.`);
    this.setState(() => ({ pw: '' }))
  };

  logout(evt) {
    this.props.clearToken();
    this.setState(() => ({ id: '', pw: '', error: '' }))
  }

  render() {
    return (
      <div>
        <form>
          <input type="input"
                 placeholder="user id"
                 autoFocus
                 value={this.state.id}
                 onChange={this.onIdChange}
                 />
          <input type="password"
                 value={this.state.pw}
                 onChange={this.onPwChange}
                 />
          <p></p>
          <button type="button" onClick={this.login}>Login</button>
          <button type="button" onClick={this.logout}>Logout</button>
        </form>
        <p>{this.state.error}</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startSetToken: (id, pw) => dispatch(startSetToken(id, pw)),
  clearToken: () => dispatch(clearToken())
});

const mapStateToProps = (state, props) => ({
  credentials: state.credentials
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);