const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function validForm(): boolean {
    const element: NodeListOf<Element> = document.querySelectorAll(
        ".form-control:not(#email)"
    );
    let countError = 0;
    for (let i = 0; i < element.length; i++) {
        if ((element[i] as HTMLInputElement).value == "") {
            element[i].classList.remove("is-valid");
            element[i].classList.add("is-invalid");
            countError++;
        } else {
            element[i].classList.remove("is-invalid");
            element[i].classList.add("is-valid");
        }
    }
    const email = document.getElementById("email") as HTMLInputElement;
    email.classList.remove("is-invalid");
    const feedback = document.getElementById(
        "email-invalid-feedback"
    ) as HTMLInputElement;
    if (email.value !== "") {
        if (email.value.match(email.value)) {
            email.classList.add("is-valid");
        } else {
            feedback.innerHTML = "Invalid email";
            email.classList.add("is-invalid");
            countError++;
        }
    } else {
        countError++;
        feedback.innerHTML = "Fill out this field";
        email.classList.add("is-invalid");
    }
    return countError == 0;
}

window.addEventListener("load", () => {
    let isDragging: boolean = false;
    const sliderContainer: HTMLDivElement = (
        document.getElementsByClassName(
            "slider-content"
        ) as HTMLCollectionOf<HTMLDivElement>
    )[0];
    sliderContainer.addEventListener("mousedown", () => {
        isDragging = true;
    });
    sliderContainer.addEventListener("mouseup", () => {
        isDragging = false;
    });
    sliderContainer.addEventListener("mousemove", (e: MouseEvent) => {
        if (isDragging) {
            sliderContainer.scrollLeft -= e.movementX;
        }
    });
    let currentSlide = 0;
    const slides: HTMLCollectionOf<HTMLDivElement> =
        document.getElementsByClassName(
            "slide"
        ) as HTMLCollectionOf<HTMLDivElement>;
    const prev: HTMLButtonElement = document.getElementById(
        "slider-controll-prev"
    ) as HTMLButtonElement;
    const next: HTMLButtonElement = document.getElementById(
        "slider-controll-next"
    ) as HTMLButtonElement;

    const setSlide = (index: number) => {
        // clear
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slides[index].classList.add("active");
        slides[index].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });
    };
    next.addEventListener("click", (e) => {
        currentSlide = (currentSlide + 1) % slides.length;
        setSlide(currentSlide);
    });
    prev.addEventListener("click", (e) => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        setSlide(currentSlide);
    });
    const copright = document.getElementById("copyright-year") as HTMLElement;
    copright.innerHTML = new Date().getFullYear().toString();
    const form: HTMLFormElement = document.getElementById(
        "form-contact"
    ) as HTMLFormElement;
    form.onsubmit = validForm;
});
