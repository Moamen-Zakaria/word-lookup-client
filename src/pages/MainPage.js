import * as React from 'react';
import QueryForm from '../components/QueryForm';
import Result from '../components/Result';

export default function MainPage() {

    const [result , setResult] = React.useState();


    return (
        <>
            <QueryForm />
            <br />
            <Result noOfOccurrences={22} listOfWords={[`abc`, `def`, `ghi`]} />
        </>
    );
}
