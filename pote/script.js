// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

// Testimonials Slider

const testimonials = document.querySelectorAll(".testimonial")
let current = 0

function showTestimonial() {
  testimonials.forEach(item => {
    item.classList.remove("active")
  })

  testimonials[current].classList.add("active")

  current++

  if (current >= testimonials.length) {
    current = 0
  }
}

setInterval(showTestimonial, 4000)

// Contact Form

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  alert("Thank you for your enquiry. We will contact you shortly.")

  this.reset()
})

// Fade In Animation

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
})

document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = "0"
  card.style.transform = "translateY(30px)"
  card.style.transition = "all .6s ease"

  observer.observe(card)
})
