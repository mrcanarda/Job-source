// Sample job data - basit iş ilanları
const sampleJobs = [
    {
        id: 1,
        title: "Hemşire",
        employer: "Almanya İşveren",
        location: "10115 - Berlin",
        description: "Almanya'nın Berlin şehrinde faaliyet gösteren bir sağlık kuruluşu adına yürütülen hemşire başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "2 dakika önce",
        isNew: true,
        category: "professional" // Mesleki yeterlilik Belgesi
    },

    {
        id: 2,
        title: "Kaporta Ustası",
        employer: "Almanya İşveren",
        location: "47877 - Willich-Schiefbahn",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen kaporta ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "5 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 3,
        title: "Kaporta Ustası",
        employer: "Almanya İşveren",
        location: "41747 - Viersen",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen kaporta ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "6 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 4,
        title: "Oto Motor Ustası",
        employer: "Almanya İşveren",
        location: "47877 - Willich-Schiefbahn",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen oto motor ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "7 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 5,
        title: "Oto Motor Ustası",
        employer: "Almanya İşveren",
        location: "41747 - Viersen",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen oto motor ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "8 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 6,
        title: "Hasta ve Yaşlı Bakımı",
        employer: "Almanya İşveren",
        location: "10115 - Berlin",
        description: "Almanya'nın Berlin şehrinde faaliyet gösteren bir bakım merkezi adına yürütülen hasta ve yaşlı bakımı başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "9 dakika önce",
        isNew: true,
        category: "professional" // Mesleki yeterlilik Belgesi
    },

    {
        id: 7,
        title: "Araç Boya Ustası",
        employer: "Almanya İşveren",
        location: "47877 - Willich-Schiefbahn",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen araç boya ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "12 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 8,
        title: "Araç Boya Ustası",
        employer: "Almanya İşveren",
        location: "41747 - Viersen",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen araç boya ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "13 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 9,
        title: "Fizyoterapist",
        employer: "Almanya İşveren",
        location: "10115 - Berlin",
        description: "Almanya'nın Berlin şehrinde faaliyet gösteren bir rehabilitasyon merkezi adına yürütülen fizyoterapist başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "14 dakika önce",
        isNew: true,
        category: "professional" // Mesleki yeterlilik Belgesi
    },

    {
        id: 10,
        title: "Oto Elektrikçisi",
        employer: "Almanya İşveren",
        location: "Willich-Schiefbahn",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen oto elektrikçisi başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "17 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 11,
        title: "Oto Elektrikçisi",
        employer: "Almanya İşveren",
        location: "Viersen",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen oto elektrikçisi başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "18 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 12,
        title: "Mekanik Bakım Ustası",
        employer: "Almanya İşveren",
        location: "Willich-Schiefbahn",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen mekanik bakım ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "19 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    },
    {
        id: 13,
        title: "Mekanik Bakım Ustası",
        employer: "Almanya İşveren",
        location: "Viersen",
        description: "Almanya'nın Kuzey Ren-Vestfalya bölgesinde faaliyet gösteren bir işveren adına yürütülen mekanik bakım ustası başvurunuz kapsamında, süreç hakkında detaylı bilgi alabileceğiniz ücretsiz bir online görüşme planlanmaktadır.",
        postedTime: "20 dakika önce",
        isNew: false,
        category: "craft" // Kalfalık veya ustalık belgesi
    }

];

// Global variables
let currentJobs = [...sampleJobs];
let currentCategoryFilter = null; // 'professional', 'craft', or null

// DOM elements
const jobsList = document.getElementById('jobsList');
const jobsCount = document.getElementById('jobsCount');
const jobSearch = document.getElementById('jobSearch');
const locationSearch = document.getElementById('locationSearch');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderJobs();
    setupEventListeners();
    updateFilterCounts();
    loadSearchParameters();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    jobSearch.addEventListener('input', filterJobs);
    locationSearch.addEventListener('input', filterJobs);
    
    // Search button
    document.querySelector('.btn-search').addEventListener('click', filterJobs);
    
    // Filter click events
    setupFilterClickEvents();
}

// Load search parameters from URL and populate search fields
function loadSearchParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const locationParam = urlParams.get('location');

    if (searchParam && jobSearch) {
        jobSearch.value = searchParam;
        // Trigger search to filter jobs
        filterJobs();
    }

    if (locationParam && locationSearch) {
        locationSearch.value = locationParam;
        // Trigger search to filter jobs
        filterJobs();
    }
}

// Setup filter click events - YENİ BASİT YAKLAŞIM
function setupFilterClickEvents() {
    console.log('Setting up filter click events...');
    
    // Setup collapsible filter headers
    const filterHeaders = document.querySelectorAll('.filter-header');
    filterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const filterGroup = header.closest('.filter-group');
            const filterContent = filterGroup.querySelector('.filter-content');
            
            // Toggle collapsed state
            header.classList.toggle('collapsed');
            filterContent.classList.toggle('collapsed');
        });
    });
    
    // Tarih filtreleri - Yeni ve Tüm ilanlar (karşılıklı dışlayıcı)
    const dateFilters = document.querySelectorAll('.filter-group:first-child .filter-content .filter-label');
    dateFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            console.log('Date filter clicked:', filter.textContent.trim());
            
            // Diğer tarih filtrelerini kapat
            dateFilters.forEach(otherFilter => {
                if (otherFilter !== filter) {
                    otherFilter.classList.remove('active');
                }
            });
            
            // Bu filtreyi aç/kapat
            filter.classList.toggle('active');
            filterJobs();
        });
    });
    
    // Kalfalık veya ustalık belgesi filtresi - ID ile
    const craftFilter = document.getElementById('craft-filter');
    console.log('Craft filter found:', craftFilter);
    console.log('Craft filter text:', craftFilter ? craftFilter.textContent.trim() : 'NOT FOUND');
    
    if (craftFilter) {
        // Önce eski event listener'ları temizle
        craftFilter.removeEventListener('click', craftFilterClickHandler);
        
        // Yeni event listener ekle
        craftFilter.addEventListener('click', craftFilterClickHandler);
        
        function craftFilterClickHandler() {
            console.log('=== CRAFT FILTER CLICKED ===');
            console.log('Filter text:', this.textContent.trim());
            console.log('Filter ID:', this.id);
            console.log('Before: currentCategoryFilter =', currentCategoryFilter);
            
            // Tüm filtreleri temizle
            clearAllCategoryFilters();
            
            // Bu filtreyi aktif et
            currentCategoryFilter = 'craft';
            this.classList.add('active');
            
            console.log('After: currentCategoryFilter =', currentCategoryFilter);
            console.log('Craft filter active class:', this.classList.contains('active'));
            console.log('=== END CRAFT FILTER ===');
            
            filterJobs();
        }
    }
    
    // Mesleki yeterlilik Belgesi filtresi - ID ile
    const professionalFilter = document.getElementById('professional-filter');
    console.log('Professional filter found:', professionalFilter);
    console.log('Professional filter text:', professionalFilter ? professionalFilter.textContent.trim() : 'NOT FOUND');
    
    if (professionalFilter) {
        // Önce eski event listener'ları temizle
        professionalFilter.removeEventListener('click', professionalFilterClickHandler);
        
        // Yeni event listener ekle
        professionalFilter.addEventListener('click', professionalFilterClickHandler);
        
        function professionalFilterClickHandler() {
            console.log('=== PROFESSIONAL FILTER CLICKED ===');
            console.log('Filter text:', this.textContent.trim());
            console.log('Filter ID:', this.id);
            console.log('Before: currentCategoryFilter =', currentCategoryFilter);
            
            // Tüm filtreleri temizle
            clearAllCategoryFilters();
            
            // Bu filtreyi aktif et
            currentCategoryFilter = 'professional';
            this.classList.add('active');
            
            console.log('After: currentCategoryFilter =', currentCategoryFilter);
            console.log('Professional filter active class:', this.classList.contains('active'));
            console.log('=== END PROFESSIONAL FILTER ===');
            
            filterJobs();
        }
    }
    
    // Şehir filtreleri
    const cityFilters = document.querySelectorAll('.filter-group:last-child .filter-content .filter-item .filter-label');
    cityFilters.forEach((filter) => {
        filter.addEventListener('click', () => {
            // "daha fazla" seçeneği için özel işlem
            if (filter.classList.contains('more-option')) {
                console.log('Daha fazla şehir tıklandı');
                
                // Gizli şehirleri göster/gizle
                const hiddenCities = document.querySelectorAll('.hidden-cities');
                const moreText = document.getElementById('more-text');
                
                hiddenCities.forEach(city => {
                    if (city.style.display === 'none') {
                        city.style.display = 'block';
                        moreText.textContent = '- daha az';
                    } else {
                        city.style.display = 'none';
                        moreText.textContent = '+ daha fazla';
                    }
                });
                
                return;
            }
            
            filter.classList.toggle('active');
            filterJobs();
        });
    });
    
    // Gizli şehirlere de click event ekle (sayfa yüklendiğinde)
    setTimeout(() => {
        const hiddenCityFilters = document.querySelectorAll('.hidden-cities .filter-label');
        hiddenCityFilters.forEach((filter) => {
            filter.addEventListener('click', () => {
                filter.classList.toggle('active');
                filterJobs();
            });
        });
    }, 100);
}

// Tüm kategori filtrelerini temizle
function clearAllCategoryFilters() {
    currentCategoryFilter = null;
    
    // Tüm kategori filtrelerinden active class'ını kaldır
    const allCategoryFilters = document.querySelectorAll('.filter-group:nth-child(2) .filter-content .filter-label');
    allCategoryFilters.forEach(filter => filter.classList.remove('active'));
}

// Update filter counts
function updateFilterCounts() {
    // Count jobs in each category
    const professionalCount = sampleJobs.filter(job => job.category === 'professional').length;
    const craftCount = sampleJobs.filter(job => job.category === 'craft').length;
    
    // Count new jobs and total jobs
    const newJobsCount = sampleJobs.filter(job => job.isNew).length;
    const totalJobsCount = sampleJobs.length;
    
    console.log('Calculated counts:', { professionalCount, craftCount, newJobsCount, totalJobsCount });
    
    // Update the counts in the sidebar using IDs
    const professionalFilter = document.getElementById('professional-filter');
    const craftFilter = document.getElementById('craft-filter');
    
    // Update date filter counts - Yeni ve Tüm ilanlar
    const newFilter = document.getElementById('new-jobs-count');
    const allJobsFilter = document.getElementById('all-jobs-count');
    
    console.log('Found count elements:', { professionalFilter, craftFilter, newFilter, allJobsFilter });
    
    if (professionalFilter) {
        const countElement = professionalFilter.querySelector('.count');
        if (countElement) {
            countElement.textContent = professionalCount;
            console.log('Set professional count to:', professionalCount);
        }
    }
    if (craftFilter) {
        const countElement = craftFilter.querySelector('.count');
        if (countElement) {
            countElement.textContent = craftCount;
            console.log('Set craft count to:', craftCount);
        }
    }
    
    // Update date filter counts - Yeni ve Tüm ilanlar
    if (newFilter) {
        newFilter.textContent = newJobsCount; // Sadece yeni işler (9)
        console.log('Set new jobs count to:', newJobsCount);
    }
    if (allJobsFilter) {
        allJobsFilter.textContent = totalJobsCount; // Tüm işler (11)
        console.log('Set total jobs count to:', totalJobsCount);
    }
}

// Filter jobs based on search criteria and active filters
function filterJobs() {
    const searchTerm = jobSearch.value.toLowerCase();
    const locationTerm = locationSearch.value.toLowerCase();
    
    console.log('Filtering jobs with:', { searchTerm, locationTerm, currentCategoryFilter });
    
    currentJobs = sampleJobs.filter(job => {
        // Search term filter
        const matchesSearch = !searchTerm || 
            job.title.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm);
        
        // Location filter
        const matchesLocation = !locationTerm || 
            job.location.toLowerCase().includes(locationTerm);
        
        // Category filter - YENİ BASİT MANTIK
        let matchesCategory = true;
        if (currentCategoryFilter) {
            matchesCategory = job.category === currentCategoryFilter;
            console.log(`Job ${job.title} (${job.category}) - category filter ${currentCategoryFilter}: ${matchesCategory}`);
        }
        
        // Tarih filtreleri - YENİ!
        let matchesDate = true;
        const activeDateFilters = document.querySelectorAll('.filter-group:first-child .filter-label.active');
        if (activeDateFilters.length > 0) {
            activeDateFilters.forEach(dateFilter => {
                const filterText = dateFilter.textContent.trim();
                if (filterText.includes('Yeni')) {
                    // Sadece isNew: true olan işleri göster
                    matchesDate = matchesDate && job.isNew;
                    console.log(`Job ${job.title} - Yeni filter: isNew = ${job.isNew}`);
                } else if (filterText.includes('Tüm ilanlar')) {
                    // Tüm işleri göster
                    matchesDate = true;
                    console.log(`Job ${job.title} - Tüm ilanlar filter: showing all`);
                }
            });
        }
        
        // Şehir filtreleri
        let matchesCity = true;
        const activeCityFilters = document.querySelectorAll('.filter-group:last-child .filter-label.active');
        if (activeCityFilters.length > 0) {
            const activeCities = Array.from(activeCityFilters).map(filter => 
                filter.querySelector('span:first-child').textContent
            );
            matchesCity = activeCities.some(city => job.location.includes(city));
        }
        
        const finalMatch = matchesSearch && matchesLocation && matchesCategory && matchesDate && matchesCity;
        console.log(`Job ${job.title}: search=${matchesSearch}, location=${matchesLocation}, category=${matchesCategory}, date=${matchesDate}, city=${matchesCity} => ${finalMatch}`);
        
        return finalMatch;
    });
    
    console.log('Filtered jobs:', currentJobs.map(j => j.title));
    
    // Render jobs
    renderJobs();
}

// Render jobs on the page
function renderJobs() {
    // Update job count
    jobsCount.textContent = currentJobs.length;
    
    // Clear current jobs
    jobsList.innerHTML = '';
    
    if (currentJobs.length === 0) {
        jobsList.innerHTML = `
            <div class="no-jobs">
                <h3>İş ilanı bulunamadı</h3>
                <p>Arama kriterlerinize uygun iş ilanı bulunamadı. Farklı anahtar kelimeler deneyin.</p>
            </div>
        `;
        return;
    }
    
    // Sort jobs: new jobs first, then by posted time
    const sortedJobs = [...currentJobs].sort((a, b) => {
        // First priority: new jobs come first
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        
        // Second priority: sort by posted time (newer first)
        const timeA = parseInt(a.postedTime.match(/\d+/)[0]);
        const timeB = parseInt(b.postedTime.match(/\d+/)[0]);
        return timeA - timeB;
    });
    
    // Render each job in sorted order
    sortedJobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobsList.appendChild(jobCard);
    });
}

// Create a job card element
function createJobCard(job) {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.innerHTML = `
        <h3 class="job-title">${job.title}</h3>
        <p class="job-location">
            <i class="fas fa-map-marker-alt location-icon"></i>
            ${job.location}
        </p>
        <p class="job-description">${job.description}</p>
        
        <div class="job-footer">
            <span class="job-time">${job.postedTime}</span>
            <div class="job-actions">
                ${job.isNew ? '<span class="new-badge">YENİ</span>' : ''}
                <a href="${job.id === 13 && job.title === 'Mekanik Bakım Ustası' && job.location === 'Viersen' ? 'mekanik-bakim-ustasi-viersen.html' : job.id === 12 && job.title === 'Mekanik Bakım Ustası' && job.location === 'Willich-Schiefbahn' ? 'mekanik-bakim-ustasi-willich.html' : job.id === 11 && job.title === 'Oto Elektrikçisi' && job.location === 'Viersen' ? 'oto-elektrikcisi-viersen.html' : job.id === 10 && job.title === 'Oto Elektrikçisi' && job.location === 'Willich-Schiefbahn' ? 'oto-elektrikcisi-willich.html' : job.id === 9 && job.title === 'Fizyoterapist' && job.location === '10115 - Berlin' ? 'fizyoterapist.html' : job.id === 6 && job.title === 'Hasta ve Yaşlı Bakımı' && job.location === '10115 - Berlin' ? 'hasta-bakiciligi.html' : job.id === 1 && job.title === 'Hemşire' && job.location === '10115 - Berlin' ? 'hemsirelik.html' : job.id === 8 && job.title === 'Araç Boya Ustası' && job.location === '41747 - Viersen' ? 'arac-boya-ustasi-viersen.html' : job.id === 7 && job.title === 'Araç Boya Ustası' && job.location === '47877 - Willich-Schiefbahn' ? 'arac-boya-ustasi-willich.html' : job.id === 5 && job.title === 'Oto Motor Ustası' && job.location === '41747 - Viersen' ? 'oto-motor-ustasi-viersen.html' : job.id === 4 && job.title === 'Oto Motor Ustası' && job.location === '47877 - Willich-Schiefbahn' ? 'oto-motor-ustasi-willich.html' : job.id === 3 && job.title === 'Kaporta Ustası' && job.location === '41747 - Viersen' ? 'kaporta-ustasi-viersen.html' : job.id === 2 && job.title === 'Kaporta Ustası' && job.location === '47877 - Willich-Schiefbahn' ? 'kaporta-ustasi-willich.html' : `job-detail.html?id=${job.id}`}" class="more-link">daha fazla</a>
                <i class="fas fa-heart heart-icon"></i>
            </div>
        </div>
    `;
    
            // Add click event to job card
        jobCard.addEventListener('click', () => {
            // Navigate to job detail page
            if (job.id === 13 && job.title === "Mekanik Bakım Ustası" && job.location === "Viersen") {
                // Special case: Mekanik Bakım Ustası Viersen goes to dedicated page
                window.location.href = `mekanik-bakim-ustasi-viersen.html`;
            } else if (job.id === 12 && job.title === "Mekanik Bakım Ustası" && job.location === "Willich-Schiefbahn") {
                // Special case: Mekanik Bakım Ustası Willich-Schiefbahn goes to dedicated page
                window.location.href = `mekanik-bakim-ustasi-willich.html`;
            } else if (job.id === 11 && job.title === "Oto Elektrikçisi" && job.location === "Viersen") {
                // Special case: Oto Elektrikçisi Viersen goes to dedicated page
                window.location.href = `oto-elektrikcisi-viersen.html`;
            } else if (job.id === 10 && job.title === "Oto Elektrikçisi" && job.location === "Willich-Schiefbahn") {
                // Special case: Oto Elektrikçisi Willich-Schiefbahn goes to dedicated page
                window.location.href = `oto-elektrikcisi-willich.html`;
            } else if (job.id === 8 && job.title === "Araç Boya Ustası" && job.location === "41747 - Viersen") {
                // Special case: Araç Boya Ustası Viersen goes to dedicated page
                window.location.href = `arac-boya-ustasi-viersen.html`;
            } else if (job.id === 7 && job.title === "Araç Boya Ustası" && job.location === "47877 - Willich-Schiefbahn") {
                // Special case: Araç Boya Ustası Willich-Schiefbahn goes to dedicated page
                window.location.href = `arac-boya-ustasi-willich.html`;
            } else if (job.id === 5 && job.title === "Oto Motor Ustası" && job.location === "41747 - Viersen") {
                // Special case: Oto Motor Ustası Viersen goes to dedicated page
                window.location.href = `oto-motor-ustasi-viersen.html`;
            } else if (job.id === 4 && job.title === "Oto Motor Ustası" && job.location === "47877 - Willich-Schiefbahn") {
                // Special case: Oto Motor Ustası Willich-Schiefbahn goes to dedicated page
                window.location.href = `oto-motor-ustasi-willich.html`;
            } else if (job.id === 3 && job.title === "Kaporta Ustası" && job.location === "41747 - Viersen") {
                // Special case: Kaporta Ustası Viersen goes to dedicated page
                window.location.href = `kaporta-ustasi-viersen.html`;
            } else if (job.id === 2 && job.title === "Kaporta Ustası" && job.location === "47877 - Willich-Schiefbahn") {
                // Special case: Kaporta Ustası Willich-Schiefbahn goes to dedicated page
                window.location.href = `kaporta-ustasi-willich.html`;
            } else if (job.id === 9 && job.title === "Fizyoterapist" && job.location === "10115 - Berlin") {
                // Special case: Fizyoterapist goes to dedicated page
                window.location.href = `fizyoterapist.html`;
            } else if (job.id === 6 && job.title === "Hasta ve Yaşlı Bakımı" && job.location === "10115 - Berlin") {
                // Special case: Hasta ve Yaşlı Bakımı goes to dedicated page
                window.location.href = `hasta-bakiciligi.html`;
            } else if (job.id === 1 && job.title === "Hemşire" && job.location === "10115 - Berlin") {
                // Special case: Hemşire goes to dedicated page
                window.location.href = `hemsirelik.html`;
            } else {
                // Navigate to general job detail page
                window.location.href = `job-detail.html?id=${job.id}`;
            }
        });
    
    return jobCard;
}

// Add some CSS for the no-jobs message and location icon
const style = document.createElement('style');
style.textContent = `
    .no-jobs {
        text-align: center;
        padding: 3rem;
        color: #6b7280;
    }
    
    .no-jobs h3 {
        color: #374151;
        margin-bottom: 1rem;
    }
    
    .job-card {
        cursor: pointer;
    }
    
    .job-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
    }
    
    .location-icon {
        color: #6366f1;
        margin-right: 8px;
        font-size: 14px;
    }
    
    .job-location {
        display: flex;
        align-items: center;
        color: #6b7280;
        font-size: 14px;
        margin-bottom: 1rem;
    }
    
    .more-option {
        color: #14b8a6 !important;
        font-weight: 500;
        cursor: pointer;
        border: none !important;
        background: none !important;
        font-family: 'Inter', sans-serif !important;
    }
    
    .more-option:hover {
        color: #0d9488 !important;
        background-color: #f0fdfa !important;
        transform: none !important;
        border: none !important;
    }
    
    .more-option .count {
        display: none;
    }
    
    .filter-item.more-option {
        border-bottom: none !important;
    }
    
    .filter-item.more-option::after {
        display: none !important;
    }
`;
document.head.appendChild(style);
