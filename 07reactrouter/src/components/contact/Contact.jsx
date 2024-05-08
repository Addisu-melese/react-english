import {useParams} from 'react-router-dom'
const Contact=()=>{
    const {contactId}=useParams()
    return (
        <div>Contact {contactId}</div>
    )
}
export default Contact