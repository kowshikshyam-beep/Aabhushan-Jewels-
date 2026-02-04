// FILTER & SEARCH FUNCTIONALITY
// Handles product filtering by category and search queries

class ProductFilter {
  constructor() {
    this.allProducts = getAllProducts();
    this.filteredProducts = this.allProducts;
    this.currentCategory = 'All';
    this.currentSearchQuery = '';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderProducts(this.allProducts);
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentSearchQuery = e.target.value;
        this.applyFilters();
      });

      // Allow Enter key to search
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.applyFilters();
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.applyFilters();
      });
    }

    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        e.target.classList.add('active');

        this.currentCategory = e.target.dataset.category;
        this.applyFilters();
      });
    });

    // Set 'All' as active on initial load
    const allBtn = document.querySelector('[data-category="All"]');
    if (allBtn) {
      allBtn.classList.add('active');
    }
  }

  applyFilters() {
    let filtered = this.allProducts;

    // Apply category filter
    if (this.currentCategory !== 'All') {
      filtered = filtered.filter(product => product.category === this.currentCategory);
    }

    // Apply search filter
    if (this.currentSearchQuery) {
      const query = this.currentSearchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    this.filteredProducts = filtered;
    this.renderProducts(filtered);
  }

  renderProducts(products) {
    const productsContainer = document.getElementById('productsContainer');

    if (!productsContainer) return;

    if (products.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1/-1;" class="no-results">
          <h3>No jewellery found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      `;
      return;
    }

    productsContainer.innerHTML = products.map(product => `
      <div class="product-card" onclick="navigateToProduct('${product.id}')">
        <div class="product-image">
          ${product.images && product.images[0] ? `<img src="${product.images[0]}" alt="${product.name}">` : '💍'}
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-details">
            <p class="text-small"><strong>Purity:</strong> ${product.purity}</p>
            <p class="text-small"><strong>Weight:</strong> ${product.weight}</p>
          </div>
          <div class="product-price">${product.price}</div>
          <button class="product-button">View Details</button>
        </div>
      </div>
    `).join('');
  }

  // Helper method to clear filters
  clearFilters() {
    document.getElementById('searchInput').value = '';
    this.currentSearchQuery = '';
    this.currentCategory = 'All';
    this.applyFilters();
  }

  // Helper method to get filtered products count
  getFilteredCount() {
    return this.filteredProducts.length;
  }
}

// Initialize filter when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productsContainer')) {
      new ProductFilter();
    }
  });
} else {
  if (document.getElementById('productsContainer')) {
    new ProductFilter();
  }
}

// Helper function to navigate to product page
function navigateToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}
