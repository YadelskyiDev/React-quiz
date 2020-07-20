import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'


class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        
                        <Input 
                            label="Email"

                        />

                        <Input 
                            label="Password"
                            errorMessage={'TEST'}
                        />

                        <Button 
                        type="success" 
                        onClick={this.loginHandler}
                        >Ввійти
                        </Button>
                        
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >Реєстрація
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Auth