/**
* ABAIXO EXEMPLO DE COMO INCLUIR ITEM NO MENU PRINCIPAL DO SISTEMA DESCOMENTE AS LINHAS ABAIXO E LIMPE
* SEU CACHE DO NAVEGADOR QUE NO MENU PROVEDOR SERA INCLUSO UM LINK PARA ADDON TESTE DE EXEMPLO
*
*/

const minha_url = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '') + "/admin/";
add_menu.clientes2('{"plink": "' + minha_url + 'addons/rel_sem_carne/", "ptext": "Relatorio Clientes sem Carne"}');