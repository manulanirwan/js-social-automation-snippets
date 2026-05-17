(() => {
    let unfollowCount = 0;
    const maxUnfollows = 50; // total unfollows before stopping
    const clickDelay = 800;  // ms between unfollows
    const scrollStep = 1000; // px to scroll each time
    const languageText = 'following'; // change this to match your site's button text

    const autoUnfollow = setInterval(() => {
        // Find all buttons that say "Following"
        const buttons = Array.from(document.querySelectorAll('button'))
            .filter(btn => btn.textContent.trim().toLowerCase() === languageText);

        if (buttons.length === 0) {
            console.log('No "Following" buttons found, scrolling...');
            window.scrollBy(0, scrollStep);
            return;
        }

        const btn = buttons[0];
        btn.click(); // Click to unfollow
        unfollowCount++;
        console.log(`Unfollowed ${unfollowCount}`);

        // Stop after reaching limit
        if (unfollowCount >= maxUnfollows) {
            clearInterval(autoUnfollow);
            console.log('✅ Finished auto-unfollowing.');
        }

        // Scroll down every few unfollows to load more
        if (unfollowCount % 5 === 0) {
            window.scrollBy(0, scrollStep);
        }
    }, clickDelay);

    // Safety stop after a while
    setTimeout(() => {
        clearInterval(autoUnfollow);
        console.log('⏹️ Auto-unfollow stopped (timeout).');
    }, maxUnfollows * clickDelay * 1.5);
})();
