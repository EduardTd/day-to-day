import React, {useContext} from "react";
import {useForm} from 'react-hook-form';
import validate from "./utils/validate";
import getFormattedTime from "./utils/getFormattedTime"

import Wrapper from "./styledComponents/Wrapper";
import Content from "./styledComponents/Content";
import Form from "./styledComponents/Form";
import {DateContext} from "../../containers/EventCalendarPage/DateContext";

function PopUp({visible, setVisibility}) {
    const dateContext = useContext(DateContext);
    const title = '';
    const note = '';
    const startTime = getFormattedTime('', dateContext);
    const endTime = getFormattedTime('', dateContext, true);

    const { register, handleSubmit, reset, errors, setValue } = useForm({
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
                               maxTextLength: 255
                           }))}
                    />
                    {errors.title && <span>{errors.title.message}</span>}

                    <textarea name="note"
                              placeholder={'Enter note...'}
                              ref={register(validate({
                                  maxTextLength: 255
                              }))}
                    />
                    {errors.note && <span>{errors.note.message}</span>}

                    <input type="time"
                           name="startTime"
                           ref={register(validate({
                               time: true
                           }))}
                    />
                    {errors.startTime && <span>{errors.startTime.message}</span>}

                    <input type="time"
                           name="endTime"
                           ref={register(validate({
                                time: true
                           }))}
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