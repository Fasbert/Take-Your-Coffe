//Header Template
class HeaderTmp extends HTMLElement{
    connectedCallback(){ 
        this.innerHTML = `
        <div class="coffee-header">
        
        </div>
            `
        }
    }

customElements.define('header-tmp', HeaderTmp)

//Footer Template
class FooterTmp extends HTMLElement{
    connectedCallback(){ 
        this.innerHTML = `
        <footer>
        <a href="https://github.com/Lumbert/Take-Your-Coffe">
            <h5>GitHub Page</h5>
        </a>
        </footer>
            `
        }
    }

customElements.define('footer-tmp', FooterTmp)

//Coffee Modal Page

const element_espresso = document.getElementById('element-espresso');
const modal_espresso = document.getElementById('modal-espresso');
const close_espresso = document.getElementById('close-espresso');

element_espresso.addEventListener('click', () =>{
    modal_espresso.classList.add('show');
})

close_espresso.addEventListener('click', () =>{
    modal_espresso.classList.remove('show');
})

// 
const element_cappuccino = document.getElementById('element-cappuccino');
const modal_cappuccino = document.getElementById('modal-cappuccino');
const close_cappuccino = document.getElementById('close-cappuccino');

element_cappuccino.addEventListener('click', () =>{
    modal_cappuccino.classList.add('show');
})

close_cappuccino.addEventListener('click', () =>{
    modal_cappuccino.classList.remove('show');
})

// 