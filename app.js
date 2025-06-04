function sendGift() {
    // Open ABA payment link in a new tab
    window.open("https://pay.ababank.com/1eWAfFkCo5V5JCat8", "_blank");

    // Show alert immediately (since we can't detect payment status)
    setTimeout(() => {
        alert("🎉 Thanks for your gift! I really appreciate it! 🎁");
    }, 1000); // small delay so it's not instant
}