(async function(){
	async function deactivate(){
			  const chatContents = await document.querySelectorAll('div[role="application"] > div[role="row"] > div > div > div')
			  const chatContent = await Array.from(chatContents)
			  chatContent.map((item) => {
				item.classList.remove('chat-privacy-active');
			  })
	}

  const chatlistWrapper = await document.querySelector('div[aria-label="Chat list"]')
  const chatlist = await Array.from(chatlistWrapper.children)
  chatlist.map((item) => {
	//item.style.filter = 'blur(5px)';
	item.classList.remove('privacy-active');
	item.addEventListener('click', async function(){
		  const chatContentsWrapper = await document.querySelector('div[role="application"]');
		  chatContentsWrapper.parentElement.addEventListener('scroll', function(){
	deactivate();
});

	});
	deactivate();
  })
})()
