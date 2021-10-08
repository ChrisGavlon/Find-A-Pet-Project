import DisplayForm from "./DisplayForm";

function MyForms({formList}) {

    return(
        <div className="MyForms">
        <h1 className="MyForms-header">Your Forms</h1>
        {formList.map(form => <DisplayForm form={form} key={form.email} />)}
        </div>
    )
}

export default MyForms;