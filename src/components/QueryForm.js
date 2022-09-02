import * as React from 'react';
import { Box, Divider, TextField } from '@mui/material';

export default function QueryForm() {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            padding={2}
        >
            <Box>
                <br />
                <Divider sx={{ color: "gray" }}>Search your article</Divider>
                <br />
            </Box>
            <Box
                display="flex"
                sx={{
                    '.MuiTextField-root': { width: '100%' },
                }}
                justifyContent="center">
                <TextField
                    label="Text"
                    multiline
                    rows={6}
                />
            </Box>
            <Box >
                <br />
            </Box>
            <Box
                display="flex"
                justifyContent="left"
                sx={{
                    '.MuiTextField-root': { marginLeft: 2.3 },
                }}
                alignItems="center"
            >
                <span  style={{color: "#808080"}}>Search by your keyword</span>
                <TextField 
                    label="Keyword"
                />
            </Box>
        </Box>
    );
}
