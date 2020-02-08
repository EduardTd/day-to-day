import React from "react";
import {useForm} from 'react-hook-form';
import validate from "./utils/validate"

import Wrapper from "./styledComponents/Wrapper";
import Content from "./styledComponents/Content";
import Form from "./styledComponents/Form";
import TimeInputEl from "./TimeInput";

function PopUp({visible, setVisibility}) {
    const title = 'asdf';
    const note = 'a2563456sdf';
    const startTime = '21:00';
    const endTime = '21:56';

    const { register, handleSubmit, reset, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            title,
            note,
            startTime,
            endTime
        }
    });

    if (!visible) {
        return null;
    }

    const hideForm = (event) => {
        event.preventDefault();
        setVisibility(false);
        reset();
    };

    const onSubmit = (data, event) => {
        hideForm(event);
    };

    return (
        <Wrapper>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                           name="title"
                           placeholder={'Enter title...'}
                           ref={register(validate({
                               required: true,
                               maxTextLength: 5
                           }))}
                    />
                    {errors.title && <span>{errors.title.message}</span>}

                    <textarea name="note"
                              placeholder={'Enter note...'}
                              ref={register(validate({
                                  maxTextLength: 5
                              }))}
                    />
                    {errors.note && <span>{errors.note.message}</span>}

                    <TimeInputEl type="text"
                                 name="startTime"
                                 register={register(validate({
                                     required: true,
                                     time: true
                                 }))}
                    />
                    {errors.startTime && <span>{errors.startTime.message}</span>}

                    <TimeInputEl type="text"
                                 name="endTime"
                                 register={register(validate({
                                    required: true,
                                    time: true
                                 }))}
                                 endTime
                    />
                    {errors.endTime && <span>{errors.endTime.message}</span>}

                    <button onClick={hideForm}>Cancel</button>
                    <button type="submit">Save</button>
                </Form>
            </Content>
        </Wrapper>
    );
}

export default PopUp;