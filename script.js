var musicPlaying = false
$(() => {
	// Music control
	const music = document.getElementById("music")
	$("#musicControl").text("▶️")
	$("#musicControl").click((e) => {
		e.preventDefault()
		if (musicPlaying) {
			music.pause()
			musicPlaying = false
			$("#musicControl").text("▶️")
		} else {
			music.play()
			musicPlaying = true
			$("#musicControl").text("⏸️")
		}
	})

	// Dynamic gallery
	$("#galleryWarn").hide()
	try {
		$("#gallery").magnificPopup({
			delegate: "img",
			type: "image",
			tClose: "Zamknij",
			tLoading: "Wczytywanie...",
			closeOnContentClick: true,
			disableOn: 1370,
			preload: [1, 1],
			gallery: {
				enabled: true,
				tPrev: "Poprzednie zdjęcie",
				tNext: "Następne zdjęcie",
				tCounter: "%curr%/%total%",
			},
			image: {
				tError: 'Nastąpił problem przy wczytywaniu <a href="%url%">zdjęcia</a>!',
			},
		})
		console.log("Dynamic gallery deployed succesfully!")
	} catch (e) {
		console.error(`Error during deployment of dynamic gallery\n${e}`)
	}
	if ($(window).width() < 1370) {
		$("#galleryWarn").show()
		console.warn("Screen too narrow for dynamic gallery!\nDisabling...")
	}

	// Popup quiz
	try {
		$("#quizLink").magnificPopup({
			type: "iframe",
			tClose: "Zamknij",
			tLoading: "Wczytywanie...",
			disableOn: 960,
		})
		console.log("Popup quiz deployed succesfully!")
	} catch (e) {
		console.error(`Error during deployment of popup quiz\n${e}`)
	}
	if ($(window).width() < 960) {
		console.warn("Screen too narrow for popup quiz!\nDisabling...")
	}
})
