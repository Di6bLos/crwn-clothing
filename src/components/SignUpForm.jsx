const SignUpForm = () => {
    return (
        <div className="form-container">
            <h1>Sign Up With Email</h1>
            <form onSubmit={() => {console.log()}} className="sign-up-form">
                <fieldset>
                    <label htmlFor="display-name-input">Name</label>
                    <input id="display-name-input" type="text" required/>
                
            
                    <label htmlFor="email-input">Email</label>
                    <input id="email-input" type="email" required/>
                
            
                    <label htmlFor="password-input">Password</label>
                    <input id="password-input" type="password" required/>
                
            
                    <label htmlFor="confirm-password-input">Confirm Password</label>
                    <input id="confirm-password-input" type="password" required/>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm