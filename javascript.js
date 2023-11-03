function goToFacebookPage() {
    window.location.href = "https://www.facebook.com/nour hattab";
  }


function goToInstagramPage() {
    window.location.href = "https://www.instagram.com/nour.hattab8";
  }

  function goToWhatsApp() {
    var phoneNumber = "71146312";
    var message = "";
  
    //Form a URL with appropriate query parameters
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
    // Open the link in a new window or tab
    window.open(url, "_blank");
  }