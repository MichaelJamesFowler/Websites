// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // Mobile Navigation
  // ==========================
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  }

  // ==========================
  // Smooth Scrolling
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"))

      if (target) {
        e.preventDefault()

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })

        if (navLinks) {
          navLinks.classList.remove("active")
        }
      }
    })
  })

  // ==========================
  // Sticky Header Shadow
  // ==========================
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // ==========================
  // Contact Form Validation
  // ==========================
  const form = document.querySelector("form")

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      const name = form.querySelector('input[type="text"]')

      const email = form.querySelector('input[type="email"]')

      const message = form.querySelector("textarea")

      if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        showNotification("Please complete all required fields.", "error")
        return
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

      showNotification("Sending enquiry...", "success")
      form.submit()
      form.reset()
    })
  }

  // ==========================
  // Scroll Animations
  // ==========================
  const animatedElements = document.querySelectorAll(".card, .support-box, .testimonial")

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    },
    {
      threshold: 0.15
    }
  )

  animatedElements.forEach(el => {
    observer.observe(el)
  })
})

// ==========================
// Notification Function
// ==========================
function showNotification(message, type) {
  const notification = document.createElement("div")

  notification.className = `notification ${type}`

  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.classList.add("visible")
  }, 100)

  setTimeout(() => {
    notification.classList.remove("visible")

    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}
