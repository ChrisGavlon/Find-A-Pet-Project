function DisplayForm({form}){
    return(
        <div className="displayed-form">
            <h3>Form For {form.name}</h3>
            <p>{form.reason}</p>
            <strong>Phone Given: {form.phone}</strong>
            <strong>Email Given: {form.email}</strong>
        </div>
    )
}

export default DisplayForm;