import {Stack, TextField} from "@mui/material";

const LabeledInputField = ({label, id, type, error, onChange, onKeyDown, autofocus}) => (
    <Stack direction="row" width="100%" spacing={1} alignItems="center" justifyContent="space-between">
        <label>{label}</label>
        <TextField
            id={id}
            variant="filled"
            label={label}
            type={type}
            error={Boolean(error)}
            helperText={error}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={autofocus}
        />
    </Stack>
);

export default LabeledInputField;