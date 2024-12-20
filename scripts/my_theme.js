(async function(){
	async function myTheme(){
		const side = await document.querySelector('#side')
		const parent = side.parentElement;

		if(side.getAttribute('data-theme-active') == null || side.getAttribute('data-theme-active') == 0){
			side.setAttribute('data-theme-active', 1)
			parent.setAttribute('draggable', 'true')

			parent.style.position = 'absolute';
			parent.style.transform = 'translateY(-50%)';
			parent.style.height = '60vh';
			(parent.parentElement).children[2].style.display = 'none';

			parent.classList.add('my-theme');
			parent.children[0].style.display = 'none';


			side.addEventListener('dragstart', function (event) {
				// Store the element's initial position
				event.dataTransfer.setData('text/plain', null);
			});

			side.addEventListener('dragend', function (event) {
				// Here, you can handle any actions once the drag ends
					console.log({
							x: event.x,
							y: event.y,
							z: this,
					})

					this.style.position = 'absolute';
					this.style.left = `${event.x - this.offsetWidth}px`;
					this.style.top = `${event.y - this.offsetHeight}px`;
					//this.style.transform = 'translate(-50%, -50%)';
			});
		}else if(side.getAttribute('data-theme-active') == 1){
			side.setAttribute('data-theme-active', 0)
			parent.removeAttribute('draggable')

			parent.style.position = 'relative';
			parent.style.transform = 'translateY(0)';
			parent.style.left = "";
			parent.style.top = "";
			parent.style.height = '100%';
			(parent.parentElement).children[2].style.display = 'block';

			parent.classList.remove('my-theme');
			parent.children[0].style.display = 'block';
		}

	}

	myTheme();
})()
