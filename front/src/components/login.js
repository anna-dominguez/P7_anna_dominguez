import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"

import { connect } from "react-redux"
import { login } from "../actions/auth"

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.state = {
      email: "",
      password: "",
      loading: false,
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleLogin(e) {
    e.preventDefault()

    this.setState({
      loading: true,
    })

    this.form.validateAll()

    const { dispatch, history } = this.props

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.email, this.state.password))
        .then(() => {
          history.push("/profile")
          window.location.reload()
        })
        .catch(() => {
          this.setState({
            loading: false
          })
        })
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { isLoggedIn, message } = this.props

    if (isLoggedIn) {
      return <Redirect to="/profile" />
    }

    return (
      <div className="col-md-12">
        <div className="card card-container bg-dark text-white">
          <h3>Connection</h3>
          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c
            }}
          >
            <div className="form-group">
               <label class="visually-hidden" for="inlineFormInputEmail">Email</label>
              <Input
                type="email"
                className="form-control text-white  border-secondary"
                style={{backgroundColor:'#343a40'}}
                name="email"
                placeholder="Email"
                id="inlineFormInputGroupUsername"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label class="visually-hidden" for="inlineFormInputPassword">Mot de passe</label>
              <Input
                type="password"
                 className="form-control text-white  border-secondary"
                style={{backgroundColor:'#343a40'}}
                name="password"
                id="inlineFormInputGroupPassword"
                placeholder="Mot de passe"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-secondary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Se connecter</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c
              }}
            />
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.auth
  const { message } = state.message
  return {
    isLoggedIn,
    message
  }
}

export default connect(mapStateToProps)(Login)