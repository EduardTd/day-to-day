import React, {useState} from "react"

import Wrapper from "./styledComponents/Wrapper"
import Content from "./styledComponents/Content"
import Form from "./styledComponents/Form";

import Field from "./Field";
import TimeField from "./TimeField";

function PopUp({visible, setVisibility}) {
    const title = undefined;
    const note = undefined;
    const startTime = undefined;
    const endTime = undefined;

    const [resetAll, setResetAll] = useState(false);

    if (!visible) {
        return null;
    }

    const hideForm = (event) => {
        event.preventDefault();
        setVisibility(false);
        setResetAll(false);
    };

    const handleSubmit = (event) => {
        hideForm(event);
    };

    return (
        <Wrapper>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <Field defaultValue={title} label={'Title'} reset={resetAll} >
                        <input type="text" placeholder={'Enter title...'} />
                    </Field>
                    <Field defaultValue={note} label={'Note'} reset={resetAll} >
                        <textarea placeholder={'Enter note...'} />
                    </Field>
                    <TimeField defaultValue={startTime} label={'Start Time'} reset={resetAll} >
                        <input type="text" />
                    </TimeField>
                    <TimeField defaultValue={endTime} label={'End Time'} reset={resetAll} endTime >
                        <input type="text" />
                    </TimeField>
                    <button onClick={hideForm}>Cancel</button>
                    <button type="submit">Save</button>
                </Form>
            </Content>
        </Wrapper>
    );
}

export default PopUp;