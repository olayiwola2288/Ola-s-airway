const flightSearch = () =>{
    if (from.value =="" || to.value =="" || departure.value =="" || adult.value =="" || child.value =="" || infant.value =="") {
        alert(`
        please select departing port?
        please select arriver port?
        At list one passenger
        And please select departing date?`)
    }else{

        let flightObj = {
            flightFrom: from.value,
            flightTo: to.value,
            departure: departure.value,
            child: child.value,
            infant: infant.value,
            adult: adult.value
        }


        localStorage.setItem('flight', JSON.stringify(flightObj))
        window.location.href = 'flight.html'
    }
}

const loadFlight = () => {
    const ticketArr =  JSON.parse(localStorage.getItem("flight"))

    displayDate.innerHTML = `
    ${ticketArr.flightFrom} <i class="fa-solid fa-plane"></i> ${ticketArr.flightTo} at ${ticketArr.departure}
    `
    
}
const modalFunction = () =>{
    const ticketArr =  JSON.parse(localStorage.getItem("flight"))

    modalForm.value =`${ticketArr.flightFrom}`
    modalTo.value = `${ticketArr.flightTo}`
    modalDate.value = `${ticketArr.departure}`
    modalAdult.value = `${ticketArr.adult}`
    modalInfant.value = `${ticketArr.infant}`
    modalChild.value = `${ticketArr.child}`

    localStorage.removeItem('flight')
} 

function printFormData() {
    let flightType = document.querySelector('input[name="flight-type"]:checked').nextSibling.textContent.trim();
    let from = document.getElementById('modalForm').value;
    let to = document.getElementById('modalTo').value;
    let date = document.getElementById('modalDate').value;
    let adultCount = document.getElementById('modalAdult').value;
    let childCount = document.getElementById('modalChild').value;
    let infantCount = document.getElementById('modalInfant').value;

    let output = `Flight Type: ${flightType}\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nAdults: ${adultCount}\nChildren: ${childCount}\nInfants: ${infantCount}`;

    if (modalInfant.value == '' || modalChild.value == "" || modalAdult.value =="" ||modalDate.value =="" || modalTo.value =="" || modalForm.value =="") {
        alert('some thing went wrong try gain')
    }else{
        alert(output)
        window.print()
    }
}

