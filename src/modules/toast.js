const toast = (message) => {
    const toast = document.createElement("div");
    const text = document.createTextNode(message);
    toast.appendChild(text);
    toast.className = "toast";
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("load");
        setTimeout(() => {
            toast.classList.remove("load");
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 2000);
        }, 2000);
    });
}

export default toast;