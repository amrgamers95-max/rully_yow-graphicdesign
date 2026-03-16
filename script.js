// 1. Generate Twinkling Stars Background
const starsContainer = document.getElementById('stars-container');
const starCount = 150;

if (starsContainer) {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        starsContainer.appendChild(star);
    }
}

// 2. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// 3. Render Graphic Design Portfolio Dynamically
const graphicDesigns = {
    "feed": [
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567821/WhatsApp_Image_2026-03-15_at_16.41.56_nr8glr.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567784/Dummy_design_20260315_164044_0000.jpg_me1nr2.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567478/Reminder_Open_Registrasi_Mitra_rayxj1.png",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567478/kolase_queelyn_new-black_trjntd.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567473/Quinza_detail_jenahara_dress_hxxp3y.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567471/syarat_join_latisza_maret_2026-agen_bayco1.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567461/Latisza-Svargaraya_Dress-Series-1_zok5gf.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567435/kolase_tsamara_mukena-black_d7u31p.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567433/kolase_hezline_dress-sky_blue_wk16oz.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567431/frame_ellmore_midi_dress_u8id0k.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567414/kolase_ovelyn_bergo_refresh-rosenut_btxdq0.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567414/kolase_havsha_square-mahogany_jztju9.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567414/kolase_harumi_prayer_set-rosebrown_qy8kcx.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567414/frame_havsha_square_oqf8ie.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567399/kolase_hasan_koko-navy_vrcj6w.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567393/frame_queenlyn_bergo_a2r85e.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567389/frama_zeeva_dress_mub21k.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567389/detail_sadjiwa_dress_mom_aw7soz.jpg",
         "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567369/detail_zahira_prayer_set_mrswzr.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567367/detail_meyshara_prayer_set_uwhs1k.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567355/detail_calyssa_dress_pvnrn8.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567355/detail_hezline_dress_hfd2fy.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567348/FLYER_JOIN_LEVEL_JANUARI_2026-SUB_AGEN_lf5ibx.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567343/detail_aksararaya_dress_mom_1-1_kb93sb.jpg"
    ],
    "portrait": [
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567468/START_ORDER_OVELYN_BERGO-10_jnmxwl.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567468/START_ORDER_HEZLINE_DRESS-09_voy4ek.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567460/START_ORDER_CLARISSA_DRESS_u3ilyx.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567453/START_ORDER_ZEEVA_DRESS_dpakna.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567450/START_ORDER_ALLURA_DRESS-09_wyfwsl.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567444/START_ORDER_MUTIARA_MOM_KIDS_kuxrjx.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567375/flyer_tahun_baru_2026-latisza_odeeme.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567348/flyer_libur_tahun_baru_oxada0.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567347/flyer_content_challenge-02_mkqh1u.png",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567340/ALine_quotes_monday_16-03-26-01-1_gxtqh7.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567819/WhatsApp_Image_2026-03-15_at_16.37.56_efgk4j.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567475/START_ORDER_CALYSSA_DRESS-02_hzsess.jpg"
    ],
    "landscape": [
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567342/card_idul_FITRI_A5-07_umewuf.png",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1773567341/cover_box-03_y4vkfu.png"
    ]
};

// Fungsi untuk mengisi foto ke dalam kategori masing-masing
function loadGraphicDesigns() {
    for (const category in graphicDesigns) {
        const container = document.getElementById(`grid-${category}`);
        if (container) {
            let imagesHTML = '';
            graphicDesigns[category].forEach(imageUrl => {
                imagesHTML += `<img src="${imageUrl}" alt="${category} design" loading="lazy">`;
            });
            container.innerHTML = imagesHTML;
        }
    }
}

// Jalankan fungsi saat web dimuat
document.addEventListener('DOMContentLoaded', loadGraphicDesigns);