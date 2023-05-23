const titleButtons = document.querySelectorAll(".lista-titles-item");
const produtoContent = document.querySelectorAll(".lista-conteudos-item");

function whenButtonClick() {
  titleButtons.forEach((button)=>(
    button.classList.remove('ativo')
  ))
  produtoContent.forEach((button)=>(
    button.classList.remove('ativo')
  ))
}

titleButtons.forEach((button) =>(
    button.addEventListener('click',() =>{
      whenButtonClick()
      button.classList.add('ativo')
      const contentRelative = document.querySelector(".lista-conteudos-item[data-id='" + button.dataset.id + "']");
      contentRelative.classList.add('ativo')
      })
));


