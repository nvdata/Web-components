Esse é um modal simples,

**botaoAbrir** tem q conter o atributo
data-modal="abrir"


**botaoFechar**  tem q conter o atributo
data-modal="fechar"


**containerModal** tem q conter o atributo
data-modal="container"


necessario

css: modal.css
js: modal.js

   
<section class="modal_container" data-modal="container">
        <!-- conteudo do modal -->
        <div class="modal">
            <button data-modal="fechar" class="fechar">X</button>
        </div>
</section>