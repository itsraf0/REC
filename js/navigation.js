// Global navigation settings for Raf's Emoji Casino
const casinoGames = [
    { id: 'home', name: 'Menu', emoji: '🏠', path: '/index.html', description: 'Back to menu' },
    { id: 'slots', name: 'Slots', emoji: '🎰', path: '/slots/index.html', description: 'Play Slots' },
    { id: 'plinko', name: 'Plinko', emoji: '🎱', path: '/plinko/index.html', description: 'Play Plinko' },
    { id: 'dice', name: 'Dice', emoji: '🎲', path: '/dice/index.html', description: 'Play Dice' },
    { id: 'blackjack', name: 'Blackjack', emoji: '♠️', path: '/blackjack/index.html', description: 'Play Blackjack' }
];

// Function to generate the navigation menu HTML
function generateNavigationMenu() {
    const currentPath = window.location.pathname;
    const menuContainer = document.createElement('div');
    menuContainer.className = 'quick-switch';

    casinoGames.forEach(game => {
        // Determine if this game is the current page
        const isCurrent = 
            (game.id === 'home' && (currentPath === '/' || currentPath.endsWith('/index.html'))) || 
            (game.id !== 'home' && currentPath.includes(game.id));
        
        // Create the link element
        const gameLink = document.createElement('a');
        
        if (isCurrent) {
            gameLink.className = 'current';
            // Don't set href to '#' even if current - keep it functional
            // Handle path based on current location
            const isInGameDir = /\/(slots|plinko|dice|blackjack)\//i.test(currentPath);
            gameLink.href = isInGameDir ? `..${game.path}` : `.${game.path}`;
        } else {
            // Handle path based on current location
            const isInGameDir = /\/(slots|plinko|dice|blackjack)\//i.test(currentPath);
            gameLink.href = isInGameDir ? `..${game.path}` : `.${game.path}`;
        }
        
        gameLink.title = game.description;
        gameLink.textContent = `${game.emoji} ${game.name}`;
        
        menuContainer.appendChild(gameLink);
    });

    return menuContainer;
}

// Function to initialize the navigation when DOM is loaded
function initNavigation() {
    document.addEventListener('DOMContentLoaded', function() {
        // Remove any existing navigation menu first
        const existingNav = document.querySelector('.quick-switch');
        if (existingNav) {
            existingNav.remove();
        }
        
        // Add the new navigation menu to the body
        document.body.appendChild(generateNavigationMenu());
    });
}

// Initialize navigation
initNavigation();

// Log successful initialization
console.log('✅ Centralized navigation system loaded successfully'); 