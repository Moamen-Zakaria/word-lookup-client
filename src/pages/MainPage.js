import * as React from 'react';
import QueryForm from '../components/QueryForm';
import Result from '../components/Result';

export default function MainPage() {

    const [result, setResult] = React.useState();

    const putResult = (report) => {
        debugger;
        setResult(<Result noOfOccurrences={report.noOfOccurrences} listOfWords={report.listOfWords} />);
    }

    return (
        <>
            <QueryForm putResult={putResult} />
            <br />
            {/* <Result noOfOccurrences={22} listOfWords={[`abc`, `def`, `ghi`]} /> */}
            {result}
        </>
    );
}
