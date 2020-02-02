import React, {useState, useEffect, useContext} from "react"

import Wrapper from "./styledComponents/Wrapper"
import Content from "./styledComponents/Content"
import Form from "./styledComponents/Form";

import Field from "./Field";

import { useInput } from "./useInput";
import { DateContext } from "../../containers/EventCalendarPage/DateContext";

function PopUp({visible, setVisibility}) {
    const [resetAll, setResetAll] = useState(false);

    const { value:startTime, bind:bindStartTime, reset:resetStartTime } = useInput('');
    const { value:endTime, bind:bindEndTime, reset:resetEndTime } = useInput('');

    const dateContext = useContext(DateContext);
    const currentDate = dateContext.value;

    const title = undefined;
    const note = undefined;

    if (!visible) {
        return null;
    }

    let currentHour = currentDate.getHours();

    const time = {
        start: `${('0' + currentHour).slice(-2)}:00`,
        end: `${('0' + (currentHour + 1)).slice(-2)}:00`
    };

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
                    <div>
                        <label>Start Time</label>
                        <input type="text" {...bindStartTime} value={time.start} />
                    </div>
                    <div>
                        <label>End Time</label>
                        <input type="text" {...bindEndTime} value={time.end} />
                    </div>
                    <button onClick={hideForm}>Cancel</button>
                    <button type="submit">Save</button>
                </Form>
            </Content>
        </Wrapper>
    );
}

export default PopUp;