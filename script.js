            // Sahifa yuklanganda musiqa ijro etiladi
            window.addEventListener("load", function () {
                var audio = document.getElementById("background-music");
                audio.play();
                audio.muted = false;

                // 23 soniyadan keyin ovozni pasaytirishni boshlaymiz
                setTimeout(function () {
                    var fadeOutInterval = setInterval(function () {
                        if (audio.volume > 0.05) {
                            audio.volume -= 0.05; // Ovozini asta-sekin pasaytirish
                        } else {
                            audio.volume = 0; // Ovoz butunlay pasaydi
                            clearInterval(fadeOutInterval); // Intervalni to'xtatish
                            audio.pause(); // Audioni to'xtatish
                            audio.currentTime = 0; // Musiqani boshidan Batafsil uchun
                        }
                    }, 300); // Har 300 millisekundda ovoz pasayadi
                }, 23000); // 23 soniyadan keyin fade-out boshlanadi
            });
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
