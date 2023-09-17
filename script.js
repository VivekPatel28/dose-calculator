
document.addEventListener("DOMContentLoaded", function () {
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");

  if (toastTrigger) {
    // Initialize the Bootstrap toast instance
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);

    // Add a click event listener to the button
    toastTrigger.addEventListener("click", function () {
      // Show the Bootstrap toast when the button is clicked
      toastBootstrap.show();
    });
  }
});

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}