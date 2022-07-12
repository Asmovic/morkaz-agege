if (typeof window === 'object') {
    // Check if document is finally loaded
    const checkbox =  document.querySelector("#toggle");
    const html =  document.querySelector("html");
    console.log('html...', html)
    const toggleDarkMode = function(){
        checkbox.checked ? (
            html.classList.add("dark"),
            localStorage.setItem("theme", "dark")
        )
        : (
            html.classList.remove("dark"),
            localStorage.setItem("theme", "light")
        );
  
    }
    
    toggleDarkMode();
    
    checkbox.addEventListener('click', toggleDarkMode);

/*             // On page load or when changing themes, best to add inline in `head` to avoid FOUC
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              } */
}