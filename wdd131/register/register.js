let participantCount = 1;

function participantTemplate(count) {
  return `
    <section class="participant participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}" name="grade${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>`;
}

function addParticipantHandler() {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  const addButton = document.getElementById('addParticipant');
  // Insert the new participant section before the "Add Participant" button
  addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
}

function totalFees() {
  // Select all input elements whose id starts with "fee"
  const feeElements = document.querySelectorAll("input[id^='fee']");
  // Convert NodeList to an Array and sum up the fees
  const total = [...feeElements].reduce((sum, inputEl) => {
    const feeValue = parseFloat(inputEl.value);
    return sum + (isNaN(feeValue) ? 0 : feeValue); // Add 0 if value is not a number or empty
  }, 0);
  return total;
}

function successTemplate(info) {
  return `<p>Thank you, ${info.name}, for registering. You have registered ${info.numParticipants} participant${info.numParticipants === 1 ? '' : 's'} and owe $${info.totalFees.toFixed(2)} in fees.</p>`;
}

function submitFormHandler(event) {
  event.preventDefault(); // Prevent default form submission (page reload)

  const calculatedTotalFees = totalFees();
  const adultName = document.getElementById('adult_name').value;
  
  const formElement = document.querySelector('form');
  const summaryElement = document.getElementById('summary');

  // Create the summary message
  const summaryHTML = successTemplate({
    name: adultName,
    numParticipants: participantCount,
    totalFees: calculatedTotalFees
  });

  // Hide the form and display the summary
  formElement.style.display = 'none';
  summaryElement.innerHTML = summaryHTML;
  summaryElement.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addParticipant');
  if (addButton) {
    addButton.addEventListener('click', addParticipantHandler);
  }

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', submitFormHandler);
  }
});