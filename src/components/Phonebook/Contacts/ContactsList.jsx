import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from './Contacts';
// import { deleteContacts } from "components/redux/Reducer";
import { deleteContactsThunk, getContactsThunk } from 'components/redux/thunk';
import { useEffect } from 'react';
import { filterSelector } from 'components/redux/selector';
import { ColorRing } from 'react-loader-spinner';

export const ContactsList = () => {
  //   const { filter } = useSelector(state => state.contacts);
  const { isLoading } = useSelector(state => state.contacts);
  const filterContacts = useSelector(filterSelector);

  const dispatch = useDispatch();

  //   const getFilterContacts = () => {
  //     return items.filter(el =>
  //       el.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   };

  const handDelete = id => {
    dispatch(deleteContactsThunk(id));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />}
      {!isLoading && <ul>
        {filterContacts.map(el => (
          <Contacts
            key={el.id}
            id={el.id}
            name={el.name}
            phone={el.phone}
            handDelete={handDelete}
          />
        ))}
      </ul>}
    </>
  );
};
