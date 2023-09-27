// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the search input and search button
//   var searchInput = document.getElementById("searchInput");
//   var searchButton = document.getElementById("searchButton");

//   // Add a click event listener to the search button
//   searchButton.addEventListener("click", function () {
//       performSearch();
//   });

//   // Add a key press event listener to the search input
//   searchInput.addEventListener("keypress", function (event) {
//       if (event.key === "Enter") {
//           performSearch();
//       }
//   });

//   // Function to perform the search
//   function performSearch() {
//       var searchTerm = searchInput.value.toLowerCase();
//       // You can replace this with your own logic to search the content on your page
//       // For example, you can search for keywords in your content and highlight them or display search results.
//       // Here's a basic example of displaying an alert with the search term:
//       alert("Searching for: " + searchTerm);
//   }
// });

  document.addEventListener("DOMContentLoaded", function () {
    var highlightButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");

    highlightButton.addEventListener("click", function () {
      highlightWords();
    });

    searchInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        highlightWords();
      }
    });

    function highlightWords() {
      var searchText = searchInput.value;
      var paragraphs = document.querySelectorAll("p");

      paragraphs.forEach(function (paragraph) {
        var paragraphText = paragraph.innerHTML;
        var highlightedText = paragraphText.replace(new RegExp(searchText, "gi"), function (match) {
          return '<span class="highlight">' + match + '</span>';
        });

        paragraph.innerHTML = highlightedText;
      });
    }
  });



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

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))