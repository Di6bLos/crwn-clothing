

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
}

const ButtonInput = ({value, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
        >{value}</button>
    )
}

export default ButtonInput;