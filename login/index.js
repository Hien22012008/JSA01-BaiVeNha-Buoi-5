function registerNewUser() {
	console.log('test....')
	var fname = document.getElementById('fname').value
	var password = document.getElementById('password').value

	if(password != confirmPwd) {
		alert('Mat khau nhap khong khop!!! Vui long kiem tra lai!!!')
		return false;
	}

	localStorage.setItem('fullname', fname)
	localStorage.setItem('password', password)

	return true;

}

