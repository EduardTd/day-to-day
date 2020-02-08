import React, {useRef, useState} from "react"
import { useForm } from 'react-hook-form'

import Wrapper from "./styledComponents/Wrapper"
import Content from "./styledComponents/Content"
import Form from "./styledComponents/Form";
import TimeInputEl from "./TimeInputEl"

// import Field from "./Field";
import TimeField from "./TimeField";

function PopUp({visible, setVisibility}) {
    const title = undefined;
    const note = undefined;
    const startTime = undefined;
    const endTime = undefined;

    const { register, handleSubmit, reset, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const timeRef = useRef(register({
        required: true,
        maxLength: 8,
        minLength: 4,
    }));

    if (!visible) {
        return null;
    }

    const hideForm = (event) => {
        // event.preventDefault();
        // setVisibility(false);
        // reset();
    };

    const onSubmit = (data, event) => {
        hideForm(event);
    };




    return (
        <Wrapper>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/*<Field defaultValue={title} label={'Title'} reset={resetAll} >*/}
                        <input type="text"
                               name="title"
                               placeholder={'Enter title...'}
                               ref={register({
                                   required: true,
                                   maxLength: 8,
                                   minLength: 4,
                               })}
                        />
                    {errors.title && <span>This field is required</span>}
                    {/*</Field>*/}
                    {/*<Field defaultValue={note} label={'Note'} reset={resetAll} >*/}
                        <textarea name={'note'}
                                  placeholder={'Enter note...'}
                                  ref={register}
                        />
                    {/*</Field>*/}
                    {/*<TimeField defaultValue={startTime} label={'Start Time'} >*/}
                        <input type="number"
                               name={'startTime'}
                        />
                    {/*</TimeField>*/}
                    {/*<TimeField defaultValue={endTime} label={'End Time'} endTime >*/}
                        <TimeInputEl type="number"
                                     name="endTime"
                                     forwardRef={timeRef}
                                     endTime
                        />
                        {errors.endTime && <span>This field is required</span>}
                    {/*</TimeField>*/}
                    <button onClick={hideForm}>Cancel</button>
                    <button type="submit">Save</button>
                </Form>
            </Content>
        </Wrapper>
    );
}

export default PopUp;