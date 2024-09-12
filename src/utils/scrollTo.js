export const scrollToSection = (id) => {
    console.log("scrollToSection", id);
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }
}