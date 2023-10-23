/*Alerta ao clicar enviar no formulario*/
function enviar()
{
    alert('Email enviado com sucesso!');
}

/*Troca o estilo da pagina de acordo com a variavel armazenada no localStorage*/
function changeStyle(){
    let last_style = localStorage.getItem('last_style');
    if(last_style == 1)
    {
        //reStyle(1)
        changeCSS('style2.css',0);
        last_style = 2;
        localStorage.setItem('last_style', 2);
    }
    else
    {
        //reStyle(0)
        changeCSS('style1.css',0);
        last_style = 1;
        localStorage.setItem('last_style', 1);
    }
};

/*Aplica um css a pagina*/
function applyStyle(status){
    if(status == 1)
    {
        changeCSS('style1.css',0);
        last_style = 1;
        localStorage.setItem('last_style', 1);
    }
    else
    {
        changeCSS('style2.css',0);
        last_style = 2;
        localStorage.setItem('last_style', 2);
    }
};

/*Altera o css*/
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
};

/*Funcao acionada toda vez que carregar o script*/
function loadpage()
{
    if(localStorage.length == 0)
    {
        localStorage.setItem('last_style', 2);
        changeStyle();
    }
    else
    {
        applyStyle(localStorage.getItem('last_style'))
    }
};
/*chama a fincao loadPage*/
loadpage();