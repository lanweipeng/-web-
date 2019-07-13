export async function fetch_form(form) {
    console.log('j')
    let formData = new FormData(form)
    console.log(formData)
    let res = await fetch(form.action, {
        method: form.method,
        body: formData
    })
    console.log(res)
    return await res.json();
}