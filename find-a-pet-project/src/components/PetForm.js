import { useState } from 'react'

function PetForm({addNewForm}){
    const [formData, setFormData] = useState ({
        name: '',
        address: '',
        phone: '',
        email: '',
        reason: '',
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addNewForm(formData)
    }

return(
    <form onSubmit={handleSubmit} className="new-form">
        <strong> Name of Pet:</strong>
        <br/>
        <input className="new-form" type="text" name="name" placeholder="name" value={formData.name}  onChange={handleChange}/>
        <br/>
        <strong> Your Address:</strong>
        <br/>
        <input className="new-form" type="text" placeholder="address" name="address" value={formData.address} onChange={handleChange}/>
        <br/>
        <strong> Your Phone:</strong>
        <br/>
        <input className="new-form" type="text" placeholder="xxx-xxx-xxxx" name="phone" value={formData.phone} onChange={handleChange}/>
        <br/>
        <strong> Your Email:</strong>
        <br/>
        <input className="new-form" type="text" placeholder="example@exam.com" name="email" value={formData.email} onChange={handleChange}/>
        <br/>
        <strong> Reason For Interest:</strong>
        <br/>
        <textarea className="new-form" cols="30" rows="6" name="reason" value={formData.reason} onChange={handleChange}/>
        <br/>
        <button type="submit" className="new-form">Submit</button>
    </form>
)
}

export default PetForm;

