import * as React from 'react';
import { Box, Button, Divider, TextField } from '@mui/material';
import reporter from "./../service/Report.service"

export default function QueryForm(props) {

    const defaultValues = {
        text: '',
        keyword: ''
    };

    const [formValues, setFormValues] = React.useState(defaultValues);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        reporter.getReport(formValues.text, formValues.keyword)
            .then((data) => {props.putResult(data.data);}, (data) => alert(data));
        console.log(formValues);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            padding={2}
            onSubmit={handleSubmit}
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
                    id="text-input"
                    name="text"
                    label="Text"
                    multiline
                    rows={6}
                    onChange={handleTextChange}
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
                <span style={{ color: "#808080" }}>Search by your keyword</span>
                <TextField
                    id="keyword-input"
                    name="keyword"
                    label="Keyword"
                    onChange={handleTextChange}
                />
                <Button variant="contained" color="primary" type="submit" style={{ marginLeft: '30px' }}>
                    Search 🔎
                </Button>
            </Box>
        </Box>
    );
}
