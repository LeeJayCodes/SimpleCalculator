        // dark-mode and light-mode


        const modeBtn =  document.querySelector('#darkMode');
        const icon = modeBtn.querySelector('i');
        const body = document.querySelector('body');
        const root = document.documentElement;

        //colors for dark

        modeBtn.addEventListener('click',()=>{
            if (icon.classList.contains('fa-moon')){
                icon.classList.remove('fa-moon')
                icon.classList.add('fa-sun')

                //color property for dark mode
                root.style.setProperty('--calculator', '#0b4346');
                root.style.setProperty('--displayFont', '#FFF');
                root.style.setProperty('--buttonbackg', '#000000');
                root.style.setProperty('--button', '#FFFFFF');
                root.style.setProperty('--backgroundGradient', 'linear-gradient(45deg, #06282a,#041a1c, #020d0e)');
                
            } else {
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-moon')

                //color property for light mode
                root.style.setProperty('--calculator', '#FFF');
                root.style.setProperty('--displayBG', 'rgba(0,0,0,0.8)');
                root.style.setProperty('--displayFont', '#FFF');
                root.style.setProperty('--buttonbackg', '#1BD7BB');
                root.style.setProperty('--button', '#000');
                root.style.setProperty('--backgroundGradient', 'linear-gradient(45deg, #2AF598, #22E4AC, #1BD7BB, #14C9CB, #0FBED8)');
            }
        })