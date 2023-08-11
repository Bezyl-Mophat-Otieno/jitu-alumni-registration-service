// register the member 


const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const cohortTitle = document.querySelector('#cohortTitle');
const cohortNumber = document.querySelector('#cohortNumber');
const register = document.querySelector('#register');
const alerts = document.querySelector('.alerts');
 

register.addEventListener('click', async (e) => {
    e.preventDefault();

    try {

        const res =  fetch('http://localhost:4500',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: fname.value,
                lname: lname.value,
                email: email.value,
                cohortTitle: cohortTitle.value,
                cohortNumber: cohortNumber.value      
            })
         })
            const data = await res.json();
            console.log(data);
            if(data?.status === 'success'){
                alerts.innerHTML = `${data.message}`;
                setTimeout(() => {
                    alerts.style.display = '';
                }, 3000);
            }else{
                alerts.innerHTML = `${data.message}`;
                setTimeout(() => {
                    alerts.style.display = '';
                }, 3000);
            }
        
    } catch (error) {
        console.log(error);
   
    }
});
