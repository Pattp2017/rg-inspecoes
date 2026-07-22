async function abrirPagina(nome) {

    const resposta = await fetch(`pages/${nome}.html`);

    const html = await resposta.text();

    document
        .getElementById("app")
        .innerHTML = html;

}
