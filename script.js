
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
document.getElementById('whitelistForm').addEventListener('submit', function (event) {
    event.preventDefault();
    submitFormToGoogleSheets();
    document.getElementById('whitelistForm').reset(); // Reset form fields
    document.getElementById('successMessage').style.display = 'block'; // Show success message
});
 

function submitFormToGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxb7QrRcEKCjMllb76hUgNjbVUkbd8a5bJW7cY-HzCedHq-o-68RIhvWBQy4r72bg/exec';
    const form = document.getElementById('whitelistForm');
    Swal.fire({
        icon: 'info',
        title: 'Submitting...',
        text: 'Sending whitelist application request',
        showConfirmButton: false,
        allowOutsideClick: false
    });

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    html: `
                    <h3 style="color:white">
                    Your application is submitted.
                    <u> Thank you!</u>
                    </h3>
                    `,
                    timer: 3000,
                    background: "url(src/download.png)",
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: true
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error!', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.'
            });
        });
}
document.addEventListener('scroll', function() {
    var footerPosition = document.querySelector('footer').getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        document.body.classList.add('footer-reached');
    } else {
        document.body.classList.remove('footer-reached');
    }
});

function alertt(){
    Swal.fire({
        icon: 'info',
        title: 'Rules',
        html: `
        <h6>you must read the rules</h6>
        <h5>
        <a href="" class="a1">#rules</a>
        </h5>
        ` ,
        timer: 2000,
        showConfirmButton: false,
        allowOutsideClick: false
    });
}