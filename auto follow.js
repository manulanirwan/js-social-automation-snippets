(() => {
    let followCount = 0;
    const maxFollows = 100; // total follows before stopping
    const scrollDelay = 2000; // time (ms) to wait after each scroll
    const clickDelay = 500; // time (ms) between follow clicks

    const autoFollow = setInterval(() => {
        // find all buttons containing text "Follow"
        const buttons = Array.from(document.querySelectorAll('button'))
            .filter(btn => btn.textContent.trim().toLowerCase() === 'follow');

        if (buttons.length === 0) {
            console.log('No follow buttons found, scrolling...');
            window.scrollBy(0, 1000); // scroll down to load more
            return;
        }

        const button = buttons[0];
        button.click();
        followCount++;
        console.log(`Followed ${followCount}`);

        if (followCount >= maxFollows) {
            clearInterval(autoFollow);
            console.log('✅ Finished auto-following.');
        }

        // Scroll occasionally to load more
        if (followCount % 5 === 0) {
            window.scrollBy(0, 1000);
        }
    }, clickDelay);

    // stop automatically after a while for safety
    setTimeout(() => {
        clearInterval(autoFollow);
        console.log('⏹️ Auto-follow stopped (timeout).');
    }, maxFollows * (clickDelay + scrollDelay));
})();
