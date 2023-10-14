var $_GET = {},
	args = location.search.substr(1).split(/&/)
for (var i = 0; i < args.length; ++i) {
	var tmp = args[i].split(/=/)
	if (tmp[0] != "") {
		$_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(
			tmp.slice(1).join("").replace("+", " ")
		)
	}
}
$(() => {
	$("#quiz input").attr("disabled", true)
	let pnts = 0
	switch ($_GET["pyt1"]) {
		case "a":
			$("#pyt1a").attr("checked", true)
			$("#pyt1").append("<div class='correct'>Dobrze!</div>")
			pnts++
			break
		case "b":
			$("#pyt1b").attr("checked", true)
			$("#pyt1").append("<div class='wrong'>Źle!</div>")
			break
		case "c":
			$("#pyt1c").attr("checked", true)
			$("#pyt1").append("<div class='wrong'>Źle!</div>")
			break
		case "d":
			$("#pyt1d").attr("checked", true)
			$("#pyt1").append("<div class='wrong'>Źle!</div>")
			break
	}
	$("#pyt2").attr("value", $_GET["pyt2"])
	if ($_GET["pyt2"] == 9) {
		$("#pyt2").after("<div class='correct'>Dobrze!</div>")
		pnts++
	} else $("#pyt2").after("<div class='wrong'>Źle!</div>")
	$("#pyt3").attr("value", $_GET["pyt3"])
	if ($_GET["pyt3"].toLocaleUpperCase() == "U-Bahn".toLocaleUpperCase()) {
		$("#pyt3").after("<div class='correct'>Dobrze!</div>")
		pnts++
	} else $("#pyt3").after("<div class='wrong'>Źle!</div>")
	$("#pyt4").attr("value", $_GET["pyt4"])
	if ($_GET["pyt4"] == "1981-11") {
		$("#pyt4").after("<div class='correct'>Dobrze!</div>")
		pnts++
	} else $("#pyt4").after("<div class='wrong'>Źle!</div>")
	$("hr").after(`<div class='pnts'>Zdobyte punkty: ${pnts}/4</div>`)
})
