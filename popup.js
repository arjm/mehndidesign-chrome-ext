document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        chrome.tabs.create({ url: link.href });
      });
    });
  });