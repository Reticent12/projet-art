document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttone').onclick = () => {
        let list = document.getElementsByClassName('feature');
        Array.from(list).forEach((feature) => {
            let style = window.getComputedStyle(feature);
            if (style.opacity === "0") { // Now checking the computed style
                feature.style.opacity = "1";
                feature.style.visibility = "visible";
                feature.style.height = "auto"; // Expand height
            } 
        });
    }
});