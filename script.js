document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Add toggle functionality
  const hireButton = document.querySelector('[data-toggle="hire"]');
  const jobButton = document.querySelector('[data-toggle="job"]');
  const employerContent = document.querySelector('[data-content="employer"]');
  const jobSeekerContent = document.querySelector('[data-content="jobseeker"]');

  function toggleView(view) {
    const logo = document.querySelector('.logo');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const productLinks = document.querySelectorAll('.product-link');

    if (view === 'hire') {
      // Update colors and text for employer view
      logo.classList.remove('text-purple-600');
      logo.classList.add('text-blue-600');
      ctaButtons.forEach(button => {
        button.classList.remove('bg-purple-600', 'hover:bg-purple-700');
        button.classList.add('bg-blue-600', 'hover:bg-blue-700');
        button.textContent = 'Book a Demo';
      });
      productLinks.forEach(link => link.classList.remove('hidden'));
      
      // Update toggle buttons
      hireButton.classList.add('bg-white', 'text-blue-600', 'shadow-sm');
      hireButton.classList.remove('text-gray-600');
      jobButton.classList.remove('bg-white', 'text-purple-600', 'shadow-sm');
      jobButton.classList.add('text-gray-600');
      
      // Show/hide content
      employerContent.classList.remove('hidden');
      jobSeekerContent.classList.add('hidden');
    } else {
      // Update colors and text for job seeker view
      logo.classList.remove('text-blue-600');
      logo.classList.add('text-purple-600');
      ctaButtons.forEach(button => {
        button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        button.classList.add('bg-purple-600', 'hover:bg-purple-700');
        button.textContent = 'Take my interview';
      });
      productLinks.forEach(link => link.classList.add('hidden'));
      
      // Update toggle buttons
      jobButton.classList.add('bg-white', 'text-purple-600', 'shadow-sm');
      jobButton.classList.remove('text-gray-600');
      hireButton.classList.remove('bg-white', 'text-blue-600', 'shadow-sm');
      hireButton.classList.add('text-gray-600');
      
      // Show/hide content
      jobSeekerContent.classList.remove('hidden');
      employerContent.classList.add('hidden');
    }
  }

  hireButton.addEventListener('click', () => toggleView('hire'));
  jobButton.addEventListener('click', () => toggleView('job'));
}); 