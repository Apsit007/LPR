import React from 'react';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography } from '@mui/material';

interface TextBoxProps {
    id?: string;
    label?: string;
    variant?: "outlined" | "filled" | "standard";
    className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ id = "custom-textbox", label, variant = "outlined", className, ...props }) => {
    return (
        <div className='flex flex-col w-full'>
            <Typography variant='subtitle1' color='white'>{label}</Typography>
            <TextField
                id={id}
                variant={variant}
                slots={{
                    input: OutlinedInput, // Define the input component
                }}
                slotProps={{
                    input: {
                        className: `bg-white w-full h-[40px] min-w-[100px] ${className}`, // Custom styling for the input
                        style: { color: 'black' }, // Ensure text is white
                    }
                }}
                {...props}
            />
        </div>
    );
};

export default TextBox;