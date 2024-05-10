<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Preview de Upload</title>
</head>
<body>
	<h2>Preview de Múltiplas Imagens</h2>

	<form>
		<input type="file" name="inputImagens" id="inputImagens" multiple accept="image/*"><br><br>
	</form>
	<span id="previewImagem"> </span>
	<script>
		const inputImagens = document.getElementById("inputImagens");

		const previewImagem = document.getElementById("previewImagem");

		inputImagens.addEventListener("change", function(e) {
			previewImagem.innerHTML = "";

			for(const arquivo of e.target.files) {
				const imagemHTML = `<img src="${URL.createObjectURL(arquivo)}" alt="${arquivo.name}" style="max-width:200px; margin: 10px;">`;

				previewImagem.insertAdjacentHTML("beforeend", imagemHTML);
			}
		});
	</script>
</body>
</html>
