import { ContactsList } from "./Phonebook/Contacts/ContactsList";
import { Filter } from "./Phonebook/Filter/Filter";
import { Form } from "./Phonebook/Form/Form";
import { Section } from "./Phonebook/Section/Section";

export const App = () => {
  
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        
        <Section title="Phonebook">
            <Form />
        </Section>
        <Section title="Contacts">
          <Filter title="Find contacts by name" />
          <ContactsList   />
        </Section>
      </div>
    );
}
