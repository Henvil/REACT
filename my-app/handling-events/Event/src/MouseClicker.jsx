export default function MouseClicker() {
    function handleClick(e) {
        if (e.target.tagName === "IMG") {
            console.log("Image src:", e.target.src);
        } else {
            console.log("Button name:", e.target.name);
        }
    }

    return (
        <button name="one" onClick={handleClick}>
            Mouse Clicker
            <img src="Event/public/vite.svg" alt="Immagine" />
        </button>
    );
}
