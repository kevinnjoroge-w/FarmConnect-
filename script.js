 // Mobile menu toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const mobileMenu = document.getElementById('mobileMenu');
 
 mobileMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });
 
 // Shopping cart functionality
 const cartBtn = document.getElementById('cartBtn');
 const cartModal = document.getElementById('cartModal');
 const closeCartBtn = document.getElementById('closeCartBtn');
 const cartCount = document.getElementById('cartCount');
 const cartItems = document.getElementById('cartItems');
 const cartSummary = document.getElementById('cartSummary');
 
 let cart = [];
 
 // Add to cart buttons
 const addToCartButtons = document.querySelectorAll('.add-to-cart');
 addToCartButtons.forEach(button => {
     button.addEventListener('click', (e) => {
         e.stopPropagation();
         
         // Get product info from the card
         const card = button.closest('.bg-white');
         const productName = card.querySelector('h3').textContent;
         const productPrice = card.querySelector('span.text-green-600').textContent;
         
         // Add to cart
         const product = {
             name: productName,
             price: parseFloat(productPrice.replace(/[^0-9.-]+/g,"")),
             quantity: 1
         };
         
         const existingItem = cart.find(item => item.name === product.name);
         
         if (existingItem) {
             existingItem.quantity += 1;
         } else {
             cart.push(product);
         }
         
         // Update UI
         updateCartUI();
         
         // Show cart modal
         cartModal.classList.add('active');
         
         // Cart count animation
         cartCount.classList.add('animate-bounce');
         setTimeout(() => {
             cartCount.classList.remove('animate-bounce');
         }, 1000);
     });
 });
 
 function updateCartUI() {
     // Update cart count
     const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
     cartCount.textContent = totalItems;
     
     // Update cart items
     if (cart.length === 0) {
         cartItems.innerHTML = `
             <div class="text-center py-10 text-gray-500">
                 <i class="fas fa-shopping-cart text-4xl mb-2"></i>
                 <p>Your cart is empty</p>
             </div>
         `;
         cartSummary.classList.add('hidden');
     } else {
         cartItems.innerHTML = '';
         let subtotal = 0;
         
         cart.forEach(item => {
             const itemTotal = item.price * item.quantity;
             subtotal += itemTotal;
             
             const cartItem = document.createElement('div');
             cartItem.classList.add('flex', 'items-center', 'justify-between', 'border-b', 'border-gray-200', 'pb-4');
             cartItem.innerHTML = `
                 <div class="flex items-center space-x-4">
                     <img src="https://placeholder.com/60x60" alt="${item.name}" class="w-16 h-16 rounded-md object-cover">
                     <div>
                         <h4 class="font-medium text-gray-800">${item.name}</h4>
                         <p class="text-green-600 text-sm">${item.price.toFixed(2)}</p>
                     </div>
                 </div>
                 <div class="flex items-center space-x## 4">
                     <div class="flex items-center border border-gray-300 rounded-md">
                         <button class="decrease-quantity px-2 py-1 text-gray-500 hover:bg-gray-100" data-name="${item.name}">
                             <i class="fas fa-minus text-xs"></i>
                         </button>
                         <span class="quantity px-2">${item.quantity}</span>
                         <button class="increase-quantity px-2 py-1 text-gray-500 hover:bg-gray-100" data-name="${item.name}">
                             <i class="fas fa-plus text-xs"></i>
                         </button>
                     </div>
                     <button class="remove-item ml-2 text-gray-500 hover:text-red-500" data-name="${item.name}">
                         <i class="fas fa-trash"></i>
                     </button>
                 </div>
             `;
             cartItems.appendChild(cartItem);
         });
         
         // Update summary
         document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
         document.getElementById('cartTotal').textContent = `$${(subtotal).toFixed(2)}`;
         cartSummary.classList.remove('hidden');
         
         // Add event listeners to quantity buttons
         document.querySelectorAll('.decrease-quantity').forEach(button => {
             button.addEventListener('click', (e) => {
                 const productName = e.target.getAttribute('data-name') || 
                                    e.target.parentElement.getAttribute('data-name');
                 const item = cart.find(item => item.name === productName);
                 
                 if (item.quantity > 1) {
                     item.quantity -= 1;
                     updateCartUI();
                 }
             });
         });
         
         document.querySelectorAll('.increase-quantity').forEach(button => {
             button.addEventListener('click', (e) => {
                 const productName = e.target.getAttribute('data-name') || 
                                    e.target.parentElement.getAttribute('data-name');
                 const item = cart.find(item => item.name === productName);
                 
                 item.quantity += 1;
                 updateCartUI();
             });
         });
         
         document.querySelectorAll('.remove-item').forEach(button => {
             button.addEventListener('click', (e) => {
                 const productName = e.target.getAttribute('data-name') || 
                                    e.target.parentElement.getAttribute('data-name');
                 cart = cart.filter(item => item.name !== productName);
                 updateCartUI();
             });
         });
     }
 }
 
 // Cart modal toggle
 cartBtn.addEventListener('click', () => {
     cartModal.classList.add('active');
 });
 
 closeCartBtn.addEventListener('click', () => {
     cartModal.classList.remove('active');
 });
 
 // Auth modal with tabs
 const authBtn = document.getElementById('authBtn');
 const authModal = document.getElementById('authModal');
 const closeAuthBtn = document.getElementById('closeAuthBtn');
 const loginTab = document.getElementById('loginTab');
 const registerTab = document.getElementById('registerTab');
 const loginForm = document.getElementById('loginForm');
 const registerForm = document.getElementById('registerForm');
 
 authBtn.addEventListener('click', () => {
     authModal.classList.add('active');
 });
 
 closeAuthBtn.addEventListener('click', () => {
     authModal.classList.remove('active');
 });
 
 loginTab.addEventListener('click', () => {
     loginTab.querySelector('a').classList.add('text-green-600', 'border-green-600');
     loginTab.querySelector('a').classList.remove('text-gray-500');
     registerTab.querySelector('a').classList.remove('text-green-600', 'border-green-600');
     registerTab.querySelector('a').classList.add('text-gray-500');
     loginForm.classList.remove('hidden');
     registerForm.classList.add('hidden');
 });
 
 registerTab.addEventListener('click', () => {
     registerTab.querySelector('a').classList.add('text-green-600', 'border-green-600');
     registerTab.querySelector('a').classList.remove('text-gray-500');
     loginTab.querySelector('a').classList.remove('text-green-600', 'border-green-600');
     loginTab.querySelector('a').classList.add('text-gray-500');
     registerForm.classList.remove('hidden');
     loginForm.classList.add('hidden');
 });
 
 // Farmer signup modal
 const signupFarmerBtn = document.getElementById('signupFarmerBtn');
 const farmerSignupModal = document.getElementById('farmerSignupModal');
 const closeFarmerBtn = document.getElementById('closeFarmerBtn');
 const sellBtn = document.getElementById('sellBtn');
 
 signupFarmerBtn.addEventListener('click', () => {
     farmerSignupModal.classList.add('active');
 });
 
 sellBtn.addEventListener('click', () => {
     farmerSignupModal.classList.add('active');
 });
 
 closeFarmerBtn.addEventListener('click', () => {
     farmerSignupModal.classList.remove('active');
 });
 
 // Close modals when clicking outside
 document.querySelectorAll('.modal-overlay').forEach(modal => {
     modal.addEventListener('click', (e) => {
         if (e.target === modal) {
             modal.classList.remove('active');
         }
     });
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
         
         // Close mobile menu if open
         if (!mobileMenu.classList.contains('hidden')) {
             mobileMenu.classList.add('hidden');
         }
     });
 });
 
 // Animation on scroll
 function animateOnScroll() {
     const elements = document.querySelectorAll('.animate-fadeIn');
     
     elements.forEach(element => {
         const elementPosition = element.getBoundingClientRect().top;
         const screenPosition = window.innerHeight;
         
         if (elementPosition < screenPosition) {
             element.style.opacity = '1';
         }
     });
 }
 
 window.addEventListener('scroll', animateOnScroll);
 animateOnScroll(); // Run once on page load