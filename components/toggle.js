if (typeof window === 'object') {
    // Check if document is finally loaded
    const checkbox =  document.querySelector("#toggle");
    const html =  document.querySelector("html");
    console.log('html...', html)
    const toggleDarkMode = function(){
        checkbox.checked ? html.classList.add("dark")
        : html.classList.remove("dark");
    }
    
    toggleDarkMode();
    
    checkbox.addEventListener('click', toggleDarkMode);
}