import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const add = createAction('phonebook/add', (name, number) => {
    return {
        payload: {
            id: nanoid(),
            name,
            number,
        },
    };
});

const remove = createAction('phonebook/remove');

const changeFilter = createAction('phonebook/changeFilter');

export default { add, remove, changeFilter };
