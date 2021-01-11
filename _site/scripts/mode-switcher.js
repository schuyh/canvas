let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
    let theme = sessionStorage.getItem('theme');
    
    if (systemInitiatedDark.matches) {
        document.getElementById("paintbrush").src = "/assets/images/paintbrushWhite3.png";
    } else {
        document.getElementById("paintbrush").src = "/assets/images/paintbrushBlack3.png";
    }
    
    function prefersColorTest(systemInitiatedDark) {
      if (systemInitiatedDark.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');		
           document.getElementById("paintbrush").src = "/assets/images/paintbrushWhite3.png";
           sessionStorage.setItem('theme', '');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("paintbrush").src = "/assets/images/paintbrushBlack3.png";
        sessionStorage.setItem('theme', '');
      }
    }
    systemInitiatedDark.addListener(prefersColorTest);
    
    
    function modeSwitcher() {
        let theme = sessionStorage.getItem('theme');
        if (theme === "dark") {
            document.documentElement.setAttribute('data-theme', 'light');
            sessionStorage.setItem('theme', 'light');
            document.getElementById("paintbrush").src = "/assets/images/paintbrushBlack3.png";
        }	else if (theme === "light") {
            document.documentElement.setAttribute('data-theme', 'dark');
            sessionStorage.setItem('theme', 'dark');
            document.getElementById("paintbrush").src = "/assets/images/paintbrushWhite3.png";
        } else if (systemInitiatedDark.matches) {	
            document.documentElement.setAttribute('data-theme', 'light');
            sessionStorage.setItem('theme', 'light');
            document.getElementById("paintbrush").src = "/assets/images/paintbrushBlack3.png";
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            sessionStorage.setItem('theme', 'dark');
            document.getElementById("paintbrush").src = "/assets/images/paintbrushWhite3.png";
        }
    }
    
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").src = "/assets/images/paintbrushWhite3.png";
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("paintbrush").src = "/assets/images/paintbrushBlack3.png";
    }

/* Thank you to Derek Kedziora for writing the blog post "Dark Mode Revisited" 
   and for making the underlying CSS, HTML, and Javascript available for reuse */