let navHeaderElem = $('#navbar-header')[0];

class NavBarHeader{
	constructor(startStr){
		this.startStr = startStr;
	}
	set fio(name){
		this.name = name;
	}
	get fio()
	{
		return this.name;
	}
	set greeting(str){
		this.greetMsg = str;
	}
	get greeting(){
		return this.greetMsg;
	}
	get HeaderHTML()
	{
		return `<p>${this.startStr}, <span id="userName" style="font-weight: bold">${this.fio}</span>,
		${this.greeting===undefined || this.greeting ==='' ? 'Как сегодня настрой?': this.greeting}</p>`
	}
	updateName()
	{
		let nameBlock = $('#userName');

		for (let elem of nameBlocks){
			elem.innerText = this.fio;
		}
	}
}

window.onload = function () {
    let Uname;

    let navheader = new NavBarHeader('Здравствуй');
    let name = localStorage.getItem('UserName');

    if (name===null){
        let newName = prompt('Как к вам обращаться?','Dude');
        localStorage.setItem('UserName',newName);
    }

    navheader.fio = localStorage.getItem('UserName');

    navHeaderElem.innerHTML = navheader.HeaderHTML;
    Uname = document.getElementById('userName');

    Uname.addEventListener('click',function () {
        let newName = prompt('Как к вам обращаться?',localStorage.getItem('UserName'));
        navheader.fio = newName;
    })
};