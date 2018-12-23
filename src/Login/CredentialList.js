import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const ts = (t) => moment(t * 1000).format('llll');

export const CredentialList = props => {
  return (
    <div>
      {
        props.token ? (
          <div>
            <h1>Credentials</h1>
            <p>ID: {props.claims.sub}</p>
            <p>Scopes: {props.claims.scope ? props.claims.scope.join() : ''}</p>
            <p>Issued At: {props.claims.iat ? ts(props.claims.iat) : ''}</p>
            <p>Expires At: {props.claims.exp ? ts(props.claims.exp) : ''}</p>
            <p>Token Issuer: {props.claims.iss ? (props.claims.iss) : ''}</p>
          </div>
        ) : (
          <p>No Credentials; read-only access</p>
        )
      }
    </div>
  );
}

const mapStateToProps = state => ({ 
  token: state.credentials.token,
  claims: state.credentials.claims
})

export default connect(mapStateToProps)(CredentialList);