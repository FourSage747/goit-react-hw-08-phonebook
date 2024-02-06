export const Contacts = ({id, name, phone, handDelete}) => {
    return (
        <li>{name}: {phone} <button type="button" onClick={()=>handDelete(id)}>Delete</button></li>
    )
}