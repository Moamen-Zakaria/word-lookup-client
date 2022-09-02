import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, List, ListItem, ListItemText } from '@mui/material';

//props expected noOfOccurrences, listOfWords
export default function Result(props) {
    return (
        <Box padding={2} sx={{ flexGrow: 1, minWidth: `90%` }}>
            <Divider sx={{ color: "gray" }}>Result</Divider>
            <br />
            <span style={{ color: "#1976d2" }}>Number of occurrences: {props.noOfOccurrences}</span>
            <br />
            <br />
            <List dense={true}>
                {props.listOfWords.map((word) => (
                    <>
                        <ListItem key={`item-${word}`}>
                            <ListItemText primary={`${word}`} />
                        </ListItem>
                        <Divider variant="fullWidth" component="li" />
                    </>
                ))}
            </List>
        </Box>
    );
}
