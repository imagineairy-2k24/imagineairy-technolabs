// Image loader for Synovate website
document.addEventListener('DOMContentLoaded', function() {
    // Replace image sources with Unsplash images
    const imageMap = {
        // Logo
        'logo.png': 'assets/images/logo.png',
        
        // About page images
        'about-img.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        
        // Team member images
        'team/member1.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        'team/member2.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        'team/member3.jpg': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        'team/member4.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
        'team/member5.jpg': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
        'team/member6.jpg': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
        
        // Team preview images
        'team/team-preview-1.jpg': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop',
        'team/team-preview-2.jpg': 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300&h=300&fit=crop',
        
        // Hero section image
        'hero-bg.jpg': '../images/hero-bg.jpeg',
    };

    // Replace all image sources
    document.querySelectorAll('img').forEach(img => {
        const srcPath = img.getAttribute('src');
        if (srcPath) {
            const imageName = srcPath.split('/').pop();
            const fullPath = srcPath.replace('assets/images/', '');
            if (imageMap[fullPath]) {
                img.setAttribute('src', imageMap[fullPath]);
            }
        }
    });
}); 