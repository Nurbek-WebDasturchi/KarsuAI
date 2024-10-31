
            const boxes = document.querySelectorAll(".box");

            boxes.forEach((box) => {
                box.addEventListener("mouseenter", () => {
                    // Animatsiya vaqtini o'lchash va boshqa elementlarga yetishib olish
                    boxes.forEach((otherBox) => {
                        if (otherBox !== box) {
                            const computedStyle = getComputedStyle(otherBox);
                            box.style.backgroundColor =
                                computedStyle.backgroundColor;
                            box.style.color = computedStyle.color;
                            box.style.borderColor = computedStyle.borderColor;
                        }
                    });
                });

                // Hoverdan chiqib ketganda animatsiyani qayta tiklash
                box.addEventListener("mouseleave", () => {
                    box.style.backgroundColor = "";
                    box.style.color = "";
                    box.style.borderColor = "";
                });
            });
            document
            .getElementById("click-btn")
            .addEventListener("click", function () {
                const card = document.querySelector(".row-custom");
                card.classList.toggle("flipped");
            });
