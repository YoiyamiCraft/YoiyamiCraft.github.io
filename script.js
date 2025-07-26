document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のフェードインアニメーション
    const sections = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 要素の10%が見えたら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});