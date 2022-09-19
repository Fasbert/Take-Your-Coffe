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
const element_latte = document.getElementById('element-latte');
const modal_latte = document.getElementById('modal-latte');
const close_latte = document.getElementById('close-latte');

element_latte.addEventListener('click', () =>{
    modal_latte.classList.add('show');
})

close_latte.addEventListener('click', () =>{
    modal_latte.classList.remove('show');
})

// 
const element_frappe = document.getElementById('element-frappe');
const modal_frappe = document.getElementById('modal-frappe');
const close_frappe = document.getElementById('close-frappe');

element_frappe.addEventListener('click', () =>{
    modal_frappe.classList.add('show');
})

close_frappe.addEventListener('click', () =>{
    modal_frappe.classList.remove('show');
})

// 
const element_mocha = document.getElementById('element-mocha');
const modal_mocha = document.getElementById('modal-mocha');
const close_mocha = document.getElementById('close-mocha');

element_mocha.addEventListener('click', () =>{
    modal_mocha.classList.add('show');
})

close_mocha.addEventListener('click', () =>{
    modal_mocha.classList.remove('show');
})

// 
const element_traditionalDrip = document.getElementById('element-traditional-drip');
const modal_traditionalDrip = document.getElementById('modal-traditional-drip');
const close_traditionalDrip = document.getElementById('close-traditional-drip');

element_traditionalDrip.addEventListener('click', () =>{
    modal_traditionalDrip.classList.add('show');
})

close_traditionalDrip.addEventListener('click', () =>{
    modal_traditionalDrip.classList.remove('show');
})

// 
const element_americano = document.getElementById('element-americano');
const modal_americano = document.getElementById('modal-americano');
const close_americano = document.getElementById('close-americano');

element_americano.addEventListener('click', () =>{
    modal_americano.classList.add('show');
})

close_americano.addEventListener('click', () =>{
    modal_americano.classList.remove('show');
})

// 
const element_hwt = document.getElementById('element-hwt');
const modal_hwt = document.getElementById('modal-hwt');
const close_hwt = document.getElementById('close-hwt');

element_hwt.addEventListener('click', () =>{
    modal_hwt.classList.add('show');
})

close_hwt.addEventListener('click', () =>{
    modal_hwt.classList.remove('show');
})