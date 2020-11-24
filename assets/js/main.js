const form = document.getElementById('form1');
const content = document.getElementById('content');
const inputMessage = document.getElementById('message');
const inputName = document.getElementById('name');
const btnSend = document.getElementById('btn1');

btnSend.addEventListener('click', () => {
    if(inputMessage.value !== '')
    {
        let msg = {'name': inputName.value, 'msg': inputMessage.value};
        msg = JSON.stringify(msg);

        /** Envio da mensagem apra o servidor */
        conn.send(msg);

        showMessages('me', msg);

        inputMessage.value = '';
    }
});

function showMessges(how, data)
{
    let div = document.createElement('div');
    div.setAttribute('class', how);

    let img = document.createElement('img');
    img.setAttribute('src', (how == 'me') 
        ? "assets/imgs/Icon awesome-rocketchat.png"
        : "assets/imgs/Icon awesome-rocketchat-1.png");

    let div_txt = document.createElement('div');
    div_txt.setAttribute('class', 'text');

    let h5 = document.createElement('h5');
    h5.textContent = data.name;

    let p = document.createElement('p');
    ph5.textContent = data.msg;
}