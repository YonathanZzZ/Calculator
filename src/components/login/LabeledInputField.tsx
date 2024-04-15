import {Stack, TextField} from "@mui/material";
import React from "react";

interface LabeledInputFieldProps {
    label: string;
    id: string;
    type: string;
    error: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    autofocus: boolean;
}

const LabeledInputField = ({label, id, type, error, onChange, onKeyDown, autofocus}: LabeledInputFieldProps) => (
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