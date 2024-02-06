import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = state => state.contacts.items;
export const getFilter = state => state.filter;

export const filterSelector = createSelector(
    [contactsSelector, getFilter],
    (contacts, filter) => {
        return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    }
)