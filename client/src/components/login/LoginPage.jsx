import {useDispatch} from "react-redux";
import {Box, Button, Stack} from "@mui/material";
import isEmail from "validator/es/lib/isEmail.js";
import {useNavigate} from "react-router-dom";
import LabeledInputField from "./LabeledInputField.jsx";
import {useState} from "react";
import {userActions} from "../../redux/userSlice.jsx";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [inputErrors, setInputErrors] = useState({username: "", email: ""});
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsernameInput(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailInput(event.target.value);
    }

    const areFieldsValid = () => {
        let isValid = true;

        if (!usernameInput) {
            setInputErrors(prevErrors => ({
                ...prevErrors,
                username: "Invalid username"
            }));

            isValid = false;
        }

        if (!isEmail(emailInput)) {
            setInputErrors(prevErrors => ({
                ...prevErrors,
                email: "Invalid email address"
            }));

            isValid = false;
        }

        return isValid;
    }

    const resetErrors = () => {
        setInputErrors({username: "", email: ""});
    }

    const handleLogin = () => {
        resetErrors();

        if (!areFieldsValid()) {
            return;
        }

        //no authentication required
        dispatch(userActions.login({email: emailInput, username: usernameInput}));

        navigate("/");
    }

    const handleKeyDown = (e) => {
        if (e.code === "Enter") {
            handleLogin();
        }
    };

    return (
        <Box height='100%' display='flex' alignItems='center' justifyContent='center'>
            <Stack direction="column" spacing={3} alignItems="center" padding={6} paddingTop={2} paddingBottom={2}
                   border={2} maxWidth={380}>

                <LabeledInputField label="Username" id="username-field" type="text" error={inputErrors.username}
                                   onChange={handleUsernameChange}
                                   onKeyDown={handleKeyDown} autofocus={true} />
                <LabeledInputField label="Email" id="email-field" type="email" error={inputErrors.email}
                                   onChange={handleEmailChange} onKeyDown={handleKeyDown} autofocus={false}/>

                <Box>
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default LoginPage;